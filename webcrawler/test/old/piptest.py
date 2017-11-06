# coding: utf-8
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
import time

from bs4 import BeautifulSoup


notUniqueCounter = 0
def notUniqueUrlsGetter():
    global notUniqueCounter
    if notUniqueCounter < 100:
        toReturn = "http://localhost/testajax/demo.php"
        notUniqueCounter += 1
        return toReturn
    else:
        return None

def beforeAjaxSleepCallback(browser):
    pass

def afterAjaxSleepCallback(browser):
    pass

def pipCallback(browser, pipedMessage):
#     printLTS(crawlingElement)
    browser.driver.find_element_by_css_selector("#page1").click()
    time.sleep(1.0)

def crawlingCallback(data):
    type = data["crawlingElement"]["type"]
    if type == CRAWLING_ELEMENT_TYPE.notUniqueUrl:
        print("we got the notUniqueUrl")
        return {"message": "vas y click"}
    elif type == CRAWLING_ELEMENT_TYPE.notUniqueUrl:
        return None
    elif type == CRAWLING_ELEMENT_TYPE.pipedMessage:
        print("HERE WE GOT THE DESIRED DATA")
#         printLTS(data)
        return None
        

def failedUrlCallback(urlsFailedNotEnough, urlsFailedEnough):
    print("urlsFailedNotEnough:")
    printLTS(urlsFailedNotEnough)
    print("urlsFailedEnough:")
    printLTS(urlsFailedEnough)
    tt.toc()


if __name__ == '__main__':
    print("Start")
    tt = TicToc()
    tt.tic()
    startUrls = list(generateAjaxRandomURLs(100))
#     startUrls = []
    rootPath = getExecDirectory(__file__)
    tmpDir = tmpDir(__file__)
    logger = Logger("piptest.log")

    crawler = Crawler \
    (
        startUrls,
        paramsDomain = \
        {
            "proxyInstanciationRate":
            {
                "alpha": [0.99, 0.5],
                "beta": [NormalizedLawBeta.LOG, NormalizedLawBeta.EXP]
            },
            "browserCount": [20, 21, 23],
            "parallelRequests": [10, 11, 12], 
        },
        pageLoadTimeout=10,
        crawlingCallback=crawlingCallback,
        failedUrlCallback=failedUrlCallback,
        browsersVerbose=True,
        banditRoundDuration=20,
        logger=logger,
        queueMinSize=30,
        stopCrawlerAfterSeconds=10,
        maxRetryFailed=3,
        ajaxSleep=2,
        beforeAjaxSleepCallback=beforeAjaxSleepCallback,
        afterAjaxSleepCallback=None,
        browserMaxDuplicatePerDomain=2,
        useProxies=True,
        pipCallback=pipCallback,
        notUniqueUrlsGetter=notUniqueUrlsGetter,
    )

    crawler.start()
    
    crawler.mainThread.join()
    
    
    
    print("End")
    





