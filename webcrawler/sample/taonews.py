# coding: utf-8

########## WORSPACE IN PYTHON PATH ##########
# Include all Paths :
# TODO faire un include de tous les sous dossiers du Workspace en remontant 4 dossiers
# TODO (mettre une variable pour le nombre de dossier a remonter).
# TODO mettre aussi le changement en utf-8
# TODO Et mettre le os.chdir("??") aussi
# TODO Faire une sorte d'entete pour chaque fichier python
# Updated 09/03/17
workspaceName = "WebCrawler" # Set the name of the Workspace in all ancestors folders
onlyInit = False # TODO
import sys
import os
import re
def dirsHasRegex(dirs, regex):
    if not isinstance(dirs, list):
        dirs = [dirs]
    # for all subdirs:
    for currentDir in dirs:
        # We get all files:
        files = getFileNames(currentDir)
        # We check if there .py or __init__.py:
        for fname in files:
            if re.search(regex, fname) is not None:
                return True
    return False

def getFileNames(currentFolder):
    files = [item for item in os.listdir(currentFolder) if os.path.isfile(os.path.join(currentFolder, item))]
    return files

def getSubdirsPaths(currentFolder):
    dirs = [currentFolder + item + "/" for item in os.listdir(currentFolder) if os.path.isdir(os.path.join(currentFolder, item))]
    return dirs

# We get the Workspace dir:
currentFolder = os.path.dirname(os.path.abspath(__file__))
workspace = currentFolder.split(workspaceName)[0] + workspaceName + "/"
# And while there are folders to watch:
penddingFolderList = [workspace]
pathsToAdd = []
while len(penddingFolderList) != 0:
    # We pop the current folder in in the pending queue:
    currentFolder = penddingFolderList.pop(0)
    if not currentFolder.split("/")[-2].startswith("."):
        hasPy = dirsHasRegex(currentFolder, ".py$")
        atLeastOneSubDirHasInit = dirsHasRegex(getSubdirsPaths(currentFolder), "__init__.py")
        # We add it in the path list:
        if hasPy or atLeastOneSubDirHasInit:
            pathsToAdd.append(currentFolder)
        # And We add the subfolders in the pending queue if there is no __init__.py:
        if not atLeastOneSubDirHasInit:
            subDirs = getSubdirsPaths(currentFolder)
            penddingFolderList += subDirs
# We add all paths in the python path:
print(pathsToAdd)
for path in pathsToAdd:
    sys.path.append(path)
#     print path
#############################################




from datatools.json import *
from datatools.url import *
from machinelearning.bandit import *
from datastructuretools.basics import *
from datastructuretools.setqueue import *
from machinelearning.function import *
from datatools.csvreader import *
from systemtools.basics import *
from systemtools.duration import *
from systemtools.file import *
from systemtools.logger import log, logInfo, logWarning, logWarning, logError, Logger
from systemtools.location import *
from systemtools.system import *
import selenium
from selenium import webdriver
import sh
import random
import html2text
import re
import ipgetter
from threading import Thread, Lock, Semaphore, active_count
import math
import numpy
from webcrawler.crawler import *
from webcrawler.utils import *
from webcrawler.browser import *
from queue import *
from databasetools.mongo import *
from webcrawler.honeypot import *
from databasetools.mongo import *
from webcrawler.newsscraper import *
from datatools.newstools import *
from twitterarchiveorg.urlgenerator import *
from webcrawler.sample import __version__


class MongoConnector:
    def __init__(self, dbName="test", collectionName="samehtml2", onlySuccess=False):
        (user, password, host) = getMongoAuth()
        self.collection = MongoCollection \
        (
            dbName,
            collectionName,
            user=user,
            password=password,
            host=host,
            indexNotUniqueOn="last_url_domain",
            indexOn=["expanded_url", "twitter_url"],
        )
        if collectionName == "samehtml2":
            self.collection.resetCollection(security=False)
        self.urlParser = URLParser()
        self.onlySuccess = onlySuccess
    
    def printAll(self):
        data = self.collection.toDataFrame()
        print(data)
    
    def expandedUrlExists(self, expandedUrl):
        if self.onlySuccess:
            return self.collection.has({"expanded_url": expandedUrl, "status": "success"})
        else:
            return self.collection.has({"expanded_url": expandedUrl})
    
    def crawlingCallback(self, data, browser=None):
        expandedUrl = data["crawlingElement"]["data"]
        twitterUrl = tnug.popTwitterUrl(expandedUrl)
        status = data["status"]
        if status == Browser.REQUEST_STATUS.success \
        or status == Browser.REQUEST_STATUS.error404 \
        or status == Browser.REQUEST_STATUS.timeoutWithContent:
            isToStore = None
            if status == Browser.REQUEST_STATUS.success:
                self.collection.deleteOne({"expanded_url": expandedUrl})
                isToStore = True
            else:
                alreadyStored = self.collection.findOne({"expanded_url": expandedUrl})
                if alreadyStored is None:
                    isToStore = True
                else:
                    if alreadyStored["status"] == "success":
                        isToStore = False
                    else:
                        self.collection.deleteOne({"expanded_url": expandedUrl})
                        isToStore = True
            if isToStore:
                lastUrl = data["lastUrl"]
                html = data["html"]
                ns = NewsScraper(html)
                scrap = ns.scrapAll()
                toStore = {}
                toStore["status"] = status.name
                toStore["last_url"] = lastUrl
                toStore["last_url_domain"] = self.urlParser.getDomain(lastUrl)
                toStore["twitter_url"] = twitterUrl
                toStore["html"] = html
                toStore["scrap"] = scrap
                toStore["expanded_url"] = expandedUrl
                toStore["expanded_url_domain"] = self.urlParser.getDomain(expandedUrl)
                toStore["title"] = data["title"]
                toStore["crawling_version"] = __version__
                toStore = dictToMongoStorable(toStore)
                self.collection.insert(toStore)
            

class TaoNewsUrlGeneratorFailed:
    def __init__(self, mongoConnector):
        self.mongoConnector = mongoConnector
        self.twitterUrlsMapping = {}
    
    def popTwitterUrl(self, expandedUrl):
        return self.twitterUrlsMapping.pop(expandedUrl, None)
    
    def __iter__(self):
        urlCount = 0
        for current in self.mongoConnector.collection.find():
            status = current["status"]
            expandedUrl = current["expanded_url"]
            twitterUrl = current["twitter_url"]
            if status != "success":
                self.twitterUrlsMapping[expandedUrl] = twitterUrl
                yield expandedUrl
                    

class TaoNewsUrlGenerator:
    def __init__(self, dataPath, mongoConnector=None, doShuffle=True, maxUrls=None, doRandom=False):
        self.doRandom = doRandom
        self.maxUrls = maxUrls
        self.doShuffle = doShuffle
        self.mongoConnector = mongoConnector
        self.nuf = NewsURLFilter()
        self.taoUrlGenerator = NewsUrlGenerator(dataPath, doShuffle=self.doShuffle)
        self.twitterUrlsMapping = {}
    
    def popTwitterUrl(self, expandedUrl):
        return self.twitterUrlsMapping.pop(expandedUrl, None)
    
    def __iter__(self):
        urlCount = 0
        for theDict in self.taoUrlGenerator:
            expandedUrl = theDict["expanded_url"]
            twitterUrl = theDict["twitter_url"]
            if self.mongoConnector is None or not self.mongoConnector.expandedUrlExists(expandedUrl):
                if not self.doRandom or getRandomFloat() > 0.69:
                    self.twitterUrlsMapping[expandedUrl] = twitterUrl
                    yield expandedUrl
                    urlCount += 1
                    if self.maxUrls is not None and urlCount > self.maxUrls:
                        break 


def terminatedCallback(urlsFailedNotEnough, urlsFailedEnough):
    logInfo("urlsFailedNotEnough:", logger=logger)
    logInfo(listToStr(urlsFailedNotEnough), logger=logger)
    logInfo("urlsFailedEnough:", logger=logger)
    logInfo(listToStr(urlsFailedEnough), logger=logger)
    tt.toc()

def failedCallback(crawlingElement):
    tnug.popTwitterUrl(crawlingElement["data"])

if __name__ == '__main__':
    TEST = False
    if TEST:
        logger = Logger("taonews-crawling-test.log")
    else:
        logger = Logger("taonews-crawling-prod.log")
    logInfo("Starting...", logger=logger)
    # Get all proxies:
    if TEST:
        proxiesPath = dataDir() + "/Misc/" + "proxies-test.txt"
    else:
        proxiesPath = dataDir() + "/Misc/" + "proxies-prod.txt"
    logInfo(listToStr(fileToStrList(proxiesPath)), logger=logger)
    # Get mongo 
    mongoConnector = MongoConnector("crawling", "taonews", onlySuccess=False) ###########
#     mongoConnector = MongoConnector(onlySuccess=False) ###########
    # THE CRAWLER:
    tt = TicToc()
    tt.tic()
    dataPath = "/home/hayj/Data/TwitterArchiveOrg/Converted2/*.bz2"
    tnug = TaoNewsUrlGenerator(dataPath, mongoConnector, maxUrls=8000, doRandom=True)
#     tnug = TaoNewsUrlGeneratorFailed(mongoConnector)
#     for current in tnug:
#         print(current)
#     exit()
    
    if isHostname("hjlat"):
        browserCount = [1]
        parallelRequests = [1]
    else:
        browserCount = [150, 200]
        parallelRequests = [1, 5, 20, 80, 150]
    crawler = Crawler \
    (
        tnug,
        paramsDomain = \
        {
            "proxyInstanciationRate":
            {
                "alpha": [0.0, 0.05, 0.2, 0.5, 0.95, 0.99],
                "beta": [NormalizedLawBeta.LOG, NormalizedLawBeta.EXP]
            },
            "browserCount": browserCount,
            "parallelRequests": parallelRequests,
        },
        proxiesPath=proxiesPath,
        pageLoadTimeout=30,
        crawlingCallback=mongoConnector.crawlingCallback,
        failedCallback=failedCallback,
        terminatedCallback=terminatedCallback,
        browsersVerbose=True,
        banditRoundDuration=200,
        logger=logger,
        queueMinSize=300,
        stopCrawlerAfterSeconds=300,
        maxRetryFailed=0,
        ajaxSleep=8.0,
        browserMaxDuplicatePerDomain=3,
        useProxies=True,
        loadImages=True,
    )
    
    def printSizeOfVars():
        logInfo(">>>>>>>>>>>>>> twitterUrlsMapping count = " + str(len(tnug.twitterUrlsMapping)), logger=logger)
        logInfo(">>>>>>>>>>>>>> twitterUrlsMapping size = " + objectSize(tnug.twitterUrlsMapping), logger=logger)
        logInfo(">>>>>>>>>>>>>> crawler.threads size = " + objectSize(crawler.threads), logger=logger)
        logInfo(">>>>>>>>>>>>>> Browser.duplicates size = " + objectSize(Browser.duplicates), logger=logger)
        logInfo(">>>>>>>>>>>>>> crawler.failedUrls size = " + objectSize(crawler.failedUrls), logger=logger)
        logInfo(">>>>>>>>>>>>>> crawler.alreadyCrawled size = " + objectSize(crawler.alreadyCrawled), logger=logger)
        logInfo(">>>>>>>>>>>>>> crawler.pipedBrowsers size = " + objectSize(crawler.pipedBrowsers), logger=logger)
        logInfo(">>>>>>>>>>>>>> crawler.browsers size = " + objectSize(crawler.browsers), logger=logger)
        logInfo(">>>>>>>>>>>>>> crawler.processing size = " + objectSize(crawler.processing), logger=logger)
        gc.collect()
    sizeTimer = Timer(printSizeOfVars, 30)
    sizeTimer.start()
    
    crawler.start()
    crawler.mainThread.join()







