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

from bs4 import BeautifulSoup


tt = None
crawler = None
rootPath = None
lock = Lock()
blocked = 0
logger = None

def isNews(url):
    if url is None or len(url) < 10:
        return False
    return re.match(r"^.*www\.leparisien\.fr.{25,300}\.php$", url) is not None

def beforeAjaxSleepCallback(browser):
    html = browser.driver.page_source
#     strToFile(html, getExecDirectory(__file__) + "/tmp/test11111.html")
    if html is not None and len(html) > 10:
        # We get all other pages:
        soup = BeautifulSoup(html, "lxml")
        for link in soup.find_all('a'):
            if link is not None:
                url = link.get('href')
                if isNews(url):
#                     print("Adding " + url)
                    crawler.putUrl(url)

def crawlingCallback(data):
    global blocked
    # Here we are sure 
    url = data["url"]
    html = data["html"]
    title = data["title"]
    if "You_have_been_blocked" in strToFilename(title):
        blocked += 1
        logger.p("blocked=" + str(blocked))
        printLTS(data)
    # We store the page:
    elif isNews(url):
        if title is not None and len(title) > 10:
            filename = ""
            filename += strToFilename(title)
            if len(filename) > 25:
                filename = filename[0:25]
            filename += "-" + getRandomStr() + ".html"
            strToFile(html, rootPath + "/tmp/" + filename)
    

def failedUrlCallback(urlsFailedNotEnough, urlsFailedEnough):
    print("urlsFailedNotEnough:")
    printLTS(urlsFailedNotEnough)
    print("urlsFailedEnough:")
    printLTS(urlsFailedEnough)
    tt.toc()


if __name__ == '__main__':
    
    print(dataDir())
    
    print(getProxiesPath())
    exit()
    
    
    print("Start")
    tt = TicToc()
    tt.tic()
    startUrls = ["http://www.leparisien.fr/",
                 "http://www.leparisien.fr/une/catalogne-carles-puigdemont-ne-convoque-pas-d-elections-faute-de-garanties-26-10-2017-7356789.php",
                 "http://www.leparisien.fr/une/des-substances-interdites-dans-plus-de-140-produits-cosmetiques-26-10-2017-7356690.php",
                 "http://www.leparisien.fr/culture-loisirs/copycomic-videos-la-chaine-youtube-qui-accuse-les-humoristes-francais-de-plagiat-26-10-2017-7356657.php"]
    rootPath = getExecDirectory(__file__)
    tmpDir = rootPath + "/tmp"
    mkdirIfNotExists(tmpDir)
    globRemove(tmpDir + "/*")
    
    
    logger = Logger("leparisien.log")
    
    
#     crawler = Crawler \
#     (
#         startUrls,
#         paramsDomain = \
#         {
#             "proxyInstanciationRate":
#             {
#                 "alpha": [0.0, 0.05, 0.2, 0.5, 0.95, 0.99], # [0.0, 0.05, 0.2, 0.5, 0.95, 0.99]
#                 "beta": [NormalizedLawBeta.LOG, NormalizedLawBeta.EXP]
#             },
#             "browserCount": [200, 300], # [200, 300, 400]
#             "parallelRequests": [20, 100, 200], # [20, 100, 200, 400]
#         },
#         pageLoadTimeout=30,
#         crawlingCallback=crawlingCallback,
#         failedUrlCallback=failedUrlCallback,
#         browsersVerbose=True,
#         banditRoundDuration=120,
#         logger=logger,
#         stopCrawlerAfterSeconds=1000,
#         maxRetryFailed=20,
#         ajaxSleep=5,
#         beforeAjaxSleepCallback=beforeAjaxSleepCallback,
#         afterAjaxSleepCallback=None,
#         browserMaxDuplicatePerDomain=2,
#         useProxies=True,
#     )
    crawler = Crawler \
    (
        startUrls,
        paramsDomain = \
        {
            "proxyInstanciationRate":
            {
                "alpha": [0.99], # [0.0, 0.05, 0.2, 0.5, 0.5, 0.95, 0.99]
                "beta": [NormalizedLawBeta.LOG, NormalizedLawBeta.EXP]
            },
            "browserCount": [10], # [200, 300, 400]
            "parallelRequests": [10], # [20, 100, 200]
        },
        pageLoadTimeout=30,
        crawlingCallback=crawlingCallback,
        failedUrlCallback=failedUrlCallback,
        browsersVerbose=True,
        banditRoundDuration=30,
        logger=logger,
        queueMinSize=30,
        stopCrawlerAfterSeconds=20,
        maxRetryFailed=3,
        ajaxSleep=4,
        beforeAjaxSleepCallback=beforeAjaxSleepCallback,
        afterAjaxSleepCallback=None,
        browserMaxDuplicatePerDomain=2,
        useProxies=True,
    )

    crawler.start()
    
    crawler.mainThread.join()
    Browser.duplicates.save()
    printLTS(Browser.duplicates.data)
    
    
#     time.sleep(100)
#     crawler.stop()






