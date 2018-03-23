# coding: utf-8

# nn pew in webcrawler-venv python /home/hayj/wm-dist-tmp/WebCrawler/webcrawler/sample/koreusbrowse.py

import sys, os; sys.path.append("/".join(os.path.abspath(__file__).split("/")[0:-3]))


from datatools.url import *
from systemtools.basics import *
from systemtools.duration import *
from systemtools.file import *
from systemtools.logger import log, logInfo, logWarning, logError, Logger
from systemtools.location import *
from systemtools.hayj import *
from systemtools.system import *
import sh
import random
import re
from threading import Thread, Lock, Semaphore, active_count
from webcrawler.crawler import *
from webcrawler.utils import *
from webcrawler.browser import *
from webcrawler.newsscraper import *
from queue import *
from databasetools.mongo import *
from databasetools.mongo import *
from datatools.newstools import *
from twitterarchiveorg.urlgenerator import *
from webcrawler.sample import __version__
from honeypotdetector.detector import *



def terminatedCallback(urlsFailedNotEnough, urlsFailedEnough):
    logInfo("urlsFailedNotEnough:", logger)
    logInfo(listToStr(urlsFailedNotEnough), logger)
    logInfo("urlsFailedEnough:", logger)
    logInfo(listToStr(urlsFailedEnough), logger)

def failedCallback(data):
    logError(listToStr(data), failedLogger)

def crawlingCallback(data, browser=None):
    ce = data["crawlingElement"]
    del data["crawlingElement"]
    data["url"] = ce.data
    status = data["status"]
    if status in [REQUEST_STATUS.success, REQUEST_STATUS.error404, REQUEST_STATUS.timeoutWithContent]:
        if not collection.has(data["url"]):
            storableData = dictToMongoStorable(data)
            storableData["status"] = storableData["status"].name
            collection.insert(storableData)
    try:
        for link in getVideosLinks(browser):
            if not collection.has(link):
                crawler.put(link)
    except Exception as e:
        logException(e, logger, location="for link in getVideosLinks")


honeypotDetector = None
def getVideosLinks(browser):
    global honeypotDetector
    if honeypotDetector is None:
        honeypotDetector = HoneypotDetector()
    (safeLinks, honeypotLinks) = honeypotDetector.getLinks(browser.driver, removeExternal=True)
    for safeLink in safeLinks:
        if isAVideoLink(safeLink):
#             log("ADDING " + safeLink, logger)
            yield safeLink

def beforeGetCallback(browser):
    randomSleep(0, 20)

def afterAjaxSleepCallback(browser):
    randomSleep(2, 10)

def isAVideoLink(url):
    """
        :example:
        >>> isAVideoLink("https://www.koreus.com/video/ecran-magique-dessin-paysage.html")
        True
        >>> isAVideoLink("https://www.koreus.com/videos/nouveau.html")
        False
        >>> isAVideoLink("https://www.koreus.com")
        False
    """
    return re.match("https://www.koreus.com/video/.{2,60}.html", url) is not None

if __name__ == '__main__':

    failedLogger = Logger("failed_koreusbrowse.log")
    logger = Logger("koreusbrowse.log", remove=True)
    log("Starting...", logger)
    proxiesPath = "/home/hayj/Data/Misc/crawling/proxies-test.txt"
    browsersHeadless = False
    driverType = DRIVER_TYPE.phantomjs # phantomjs
    browserCount = parallelRequests = [10, 20, 50] # [20, 50, 100, 150]
    useProxies = True
    alpha = [0.99] # Pour avoir une instanciation de une fois tous les proxies

    # Mongo collection init:
    (user, password, host) = getMongoAuth(user="hayj", hostname="datascience01")
    collection = MongoCollection \
    (
        "koreus",
        "crawl",
        version=__version__,
        indexOn=["url"],
        user=user, host=host, password=password,
        verbose=True,
        logger=logger
    )


    # Show the collection
    collection.show(1)
    exit()


#     count = 0
#     for current in collection.find():
#         try:
#             name = current["status"] + "_" + strToFilename(current["title"][0:30]) + getRandomStr()
#             print(name)
#             strToFile(current["html"], tmpDir(subDir="koreus-html") + "/" + name + ".html")
#             count += 1
#         except Exception as e:
#             logException(e, logger)
#         if count > 1000:
#             break
#
#
#     exit()

    # We make start urls:
    startUrls = \
    [
        "https://www.koreus.com/video/rue-glace-inondation.html",
        "https://www.koreus.com/video/construction-etoile-mort-timelapse.html",
        "https://www.koreus.com/video/wd40-explosion.html",
        "https://www.koreus.com/video/explosion-bouche-egout.html",
        "https://www.koreus.com/video/pub-jbs-sous-vetement.html",
        "https://www.koreus.com/video/liberer-ecureuil-arbre.html",
        "https://www.koreus.com/video/femme-accident-ejecte-smart.html",
    ]
    count = 0
    for current in collection.find():
        if current["status"] == "success":
            startUrls.append(current["url"])
            count += 1
        if count > 100:
            break

    crawler = Crawler \
    (
        startUrls,
        paramsDomain = \
        {
            "proxyInstanciationRate":
            {
                "alpha": alpha,
                "beta": [NormalizedLawBeta.LOG]
            },
            "browserCount": browserCount,
            "parallelRequests": parallelRequests,
        },
        proxiesPath=proxiesPath,
        pageLoadTimeout=30, # 30
        failedCallback=failedCallback,
        crawlingCallback=crawlingCallback,
        terminatedCallback=terminatedCallback,
        browsersVerbose=True,
        banditRoundDuration=300, # 500
        logger=logger,
        queueMinSize=50, # 300
        stopCrawlerAfterSeconds=300,
        maxRetryFailed=20,
        ajaxSleep=4.0,
        browserMaxDuplicatePerDomain=3,
        useProxies=useProxies,
        loadImages=True,
        browsersHeadless=browsersHeadless,
        browsersDriverType=driverType,
        sameBrowsersParallelRequestsCount=True,
        afterAjaxSleepCallback=afterAjaxSleepCallback,
        beforeGetCallback=beforeGetCallback,
    )

    crawler.start()
    crawler.mainThread.join()
    log("End.", logger)






