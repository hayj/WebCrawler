# coding: utf-8


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



# Le probleme c'est qu'il a timeout mais que c'est pour l'instant un uniqueURl du coup on le

def terminatedCallback(urlsFailedNotEnough, urlsFailedEnough):
    logInfo("urlsFailedNotEnough:", logger)
    logInfo(listToStr(urlsFailedNotEnough), logger)
    logInfo("urlsFailedEnough:", logger)
    logInfo(listToStr(urlsFailedEnough), logger)

def clickPrecedent(browser):
    a = None
    try:
        button = browser.driver.find_element_by_xpath("//a[contains(text(), 'récédent')]")
        a = button.get_attribute("href")
        if button is not None:
            button.click()
    except Exception as e:
        logException(e, logger, location="clickPrecedent")
    return a

def crawlingCallback(data, browser=None):
    """
        Here if you return a dict, the browser will be set as piped
        and you will receive a ...
    """
    reducedData = reduceDictStr(data, max=100)
    ce = data["crawlingElement"]
    print(browser.name + " crawlingCallback -> \n" + listToStr(ce))
    status = data["status"]
    log(data["title"] + " LOADED !!!!", logger)
    if status not in [REQUEST_STATUS.success, REQUEST_STATUS.error404, REQUEST_STATUS.timeoutWithContent]:
        if isinstance(ce.data, str) and len(ce.data) > 3:
            crawler.put(ce.extraData)
            print("ON A AJOUTE " + ce.extraData + " donc un browser va etre kill et un autre browser va prendre le relai en rechargeant cette url...")
        return None
    if ce.type == CrawlingElement.TYPE.pipedMessage:
        strToTmpFile(data["html"])
        return {""}
    elif len(ce.data) > len("https://www.koreus.com/"):
        strToTmpFile(data["html"])
        return {}
    else:
        logError("data in crawlingCallback not recognized!", logger)

def pipCallback(browser, crawlingElement):
    """
        Here if you return a dict, the browser will be set as piped
        and you will receive a ...
    """

    print(browser.name + " pipCallback -> \n" + listToStr(crawlingElement))
    # Le pipCallback arrive avant le crawlingCallback
    # ou alors c'est que le sleep empeche le click...; ???

    printLTS(crawlingElement)
    randomSleep(0.2, 1.0)
    a = clickPrecedent(browser)
    crawlingElement.data = a
    randomSleep(0.2, 1.0)

if __name__ == '__main__':
    logger = Logger("koreus.log", remove=True)
    log("Starting...", logger)
    proxiesPath = "/home/hayj/Data/Misc/crawling/proxies-test.txt"
    browsersHeadless = False
    driverType = DRIVER_TYPE.phantomjs # Here chrome doesn't work well for this task
    browserCount = [4]
    parallelRequests = [4]
    useProxies = True
    alpha = [0.99] # Pour avoir une instanciation de une fois tous les proxies


    crawler = Crawler \
    (
        [
            "https://www.koreus.com/video/rue-glace-inondation.html",
            "https://www.koreus.com/video/construction-etoile-mort-timelapse.html",
            "https://www.koreus.com/video/wd40-explosion.html",
            "https://www.koreus.com/video/explosion-bouche-egout.html"
        ],
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
        pipCallback=pipCallback, # 30
        crawlingCallback=crawlingCallback,
        failedCallback=None,
        terminatedCallback=terminatedCallback,
        browsersVerbose=True,
        banditRoundDuration=0, # 500
        logger=logger,
        queueMinSize=50, # 300
        stopCrawlerAfterSeconds=300,
        maxRetryFailed=20,
        ajaxSleep=2.0,
        browserMaxDuplicatePerDomain=3,
        useProxies=useProxies,
        loadImages=True,
        browsersHeadless=browsersHeadless,
        browsersDriverType=driverType,
    )

    crawler.start()
    crawler.mainThread.join()
    log("End.", logger)






