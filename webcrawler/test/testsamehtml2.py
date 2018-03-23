# coding: utf-8

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
from webcrawler.sample.taonews import *
from webcrawler.crawler import *
from databasetools.mongo import *
from webcrawler.newsscraper import *
from webcrawler.newstools import *
from twitterarchiveorg.urlgenerator import *
from webcrawler.sample import __version__


        

class MongoConnector(MongoCollection):
    def __init__(self):
        (user, password, host) = getMongoAuth()
        super().__init__ \
        (
            "test",
            "samehtml2",
            user=user,
            password=password,
            host=host,
            indexNotUniqueOn="last_url_domain",
            indexOn=["expanded_url", "twitter_url"],
        )
        self.urlParser = URLParser()
        
     
    def printAll(self):
        data = self.collection.toDataFrame()
        print(data)
     
    def expandedUrlExists(self, expandedUrl):
        return self.collection.has({"expanded_url": expandedUrl})
     
    def crawlingCallback(self, data, browser=None):
        expandedUrl = data["crawlingElement"]["data"]
        twitterUrl = expandedUrl
        status = data["status"]
        if status == Browser.REQUEST_STATUS.success \
        or status == Browser.REQUEST_STATUS.error404:
            lastUrl = data["lastUrl"]
            html = data["html"]
            if not self.expandedUrlExists(expandedUrl):
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
                toStore = convertDict(toStore)
                self.collection.insert(toStore)
 
def failedUrlCallback(urlsFailedNotEnough, urlsFailedEnough):
    logInfo("urlsFailedNotEnough:", logger=logger)
    logInfo(listToStr(urlsFailedNotEnough), logger=logger)
    logInfo("urlsFailedEnough:", logger=logger)
    logInfo(listToStr(urlsFailedEnough), logger=logger)
    tt.toc()

def execCrawler():

    mongoConnector = MongoConnector()
    mongoConnector.resetCollection(security=False)
    dataPath = "/home/hayj/Data/TwitterArchiveOrg/Converted2/*.bz2"
    tnug = TaoNewsUrlGenerator(dataPath, None, test=False)
    
    for current in tnug:
        printLTS(current)
    exit()
    
    urls = []
    for i in range(200):
        i = str(i)
        url = "http://localhost/testajax/samehtml.php?id=" + i
        urls.append(url)
     
    crawler = Crawler \
    (
        urls,
        paramsDomain = \
        {
            "proxyInstanciationRate":
            {
                "alpha": [0.99],
                "beta": [NormalizedLawBeta.LOG]
            },
            "browserCount": [20],
            "parallelRequests": [10],
        },
        proxiesPath=None,
        pageLoadTimeout=4,
        crawlingCallback=mongoConnector.crawlingCallback,
        failedUrlCallback=failedUrlCallback,
        browsersVerbose=True,
        banditRoundDuration=20,
        logger=None,
        queueMinSize=20,
        stopCrawlerAfterSeconds=10,
        maxRetryFailed=0,
        ajaxSleep=3.0,
        browserMaxDuplicatePerDomain=3,
        useProxies=False,
        loadImages=True,
    )
     
    crawler.start()
    crawler.mainThread.join()

def showLines():
    mongoConnector = MongoConnector()
    for current in mongoConnector.collection.find():
        print(current["expanded_url"])
        print(current["last_url"])
        print(len(current["scrap"]["boilerpipe"]["text"]))
        print(current["scrap"]["boilerpipe"]["text"])

def showSameHtml():
    # Est ce que c'est uniquement à cause de indiatimes ou pas ????
    (user, password, host) = getMongoAuth()
    collectionCrawling = MongoCollection \
    (
        "test",
        "samehtml2",
        user=user,
        password=password,
        host=host,
        indexNotUniqueOn="last_url_domain",
        indexOn=["expanded_url", "twitter_url"],
    )
    urlParser = URLParser()
    count = 0
    for current in collectionCrawling.collection.find():
        expandedUrl = current["expanded_url"]
        lastUrl = current["last_url"]
        if expandedUrl != lastUrl:
            expandedUrlDomain = urlParser.getDomain(expandedUrl)
            lastUrlDomain = urlParser.getDomain(lastUrl)
            if expandedUrlDomain != lastUrlDomain:
                if "indiatimes" in expandedUrl or "indiatimes" in lastUrl:
                    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
                    print("indiatimes")
                    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
                print(current["expanded_url"])
                print(current["last_url"])
                print(current["crawling_version"])
                print(current["status"])
                print("--------------------------------------")
                count += 1
#                 print(len(current["scrap"]["boilerpipe"]["text"]))
    #             print(current["scrap"]["boilerpipe"]["text"])
    print("count")
    print(count)
    print("collectionCrawling.size()")
    print(collectionCrawling.size())
    
def seeBlank():
    (user, password, host) = getMongoAuth()
    collectionCrawling = MongoCollection \
    (
        "test",
        "samehtml2",
        user=user,
        password=password,
        host=host,
        indexNotUniqueOn="last_url_domain",
        indexOn=["expanded_url", "twitter_url"],
    )
    
    for current in collectionCrawling.find():
        expandedUrl = current["expanded_url"]
        lastUrl = current["last_url"] 
        if "about" in expandedUrl or "about" in lastUrl:
            print(expandedUrl)
            print(lastUrl)

if __name__ == '__main__':
#     execCrawler()
#      showLines()
    while True:
        showSameHtml()
        print()
        print()
        print()
        print()
        time.sleep(5)



















