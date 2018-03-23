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
from databasetools.mongo import *

from bs4 import BeautifulSoup

from selenium.webdriver.common.keys import Keys

def convertTupleToRequest(theTuple, l1=True):
    result = \
    {
        "codpos": theTuple[1],
        "bouygues_id": getRandomInt(1000),
        "l1_normalisee": theTuple[0],
    }
    if not l1:
        result["l2_normalisee"] = result["l1_normalisee"]
        result["l1_normalisee"] = None
    else:
        result["l2_normalisee"] = None
    return result
    

def getAllRequests():
    if TEST:
        allL1 = \
        [
            ("restaurant", "91300"),
            ("supermarché", "91300"),
            ("carrefour", "91300"),
            ("leclerc", "91300"),
            ("cora", "91300"),
            ("coiffeur", "91300"),
            ("cora", "06000"),
        ]
        allL2 = \
        [
            ("pathé", "91300"),
        ]
        results = []
        count = 0
        for current in allL1:
            currentConverted = convertTupleToRequest(current, l1=True)
            currentConverted["request_id"] = count
            count += 1
            results.append(currentConverted)
        for current in allL2:
            currentConverted = convertTupleToRequest(current, l1=False)
            currentConverted["request_id"] = count
            count += 1
            results.append(currentConverted)
        return results
    else:
        csvReader = CSVReader(execDir(__file__) + "/../data-sample/siren_bouygues.csv", delimiter=';')
        requests = []
        count = 0
        for current in csvReader:
            currentRequest = HashableDict()
            currentRequest["l1_normalisee"] = current["l1_normalisee"]
            currentRequest["bouygues_id"] = current["id"]
            currentRequest["codpos"] = current["codpos"]
            currentRequest["l2_normalisee"] = None
            currentRequest["request_id"] = count
            requests.append(currentRequest)
            count += 1
            if current["l2_normalisee"] is not None:
                currentRequest = HashableDict()
                currentRequest["l2_normalisee"] = current["l2_normalisee"]
                currentRequest["bouygues_id"] = current["id"]
                currentRequest["codpos"] = current["codpos"]
                currentRequest["l1_normalisee"] = None
                currentRequest["request_id"] = count
                requests.append(currentRequest)
                count += 1
        return hashableDictListToDictList(set(requests))



class MongoConnector:
    def __init__(self):
        if TEST:
            self.collection = MongoCollection \
            (
                "pagesjaunes",
                "test1",
                user="jamy",
                password="c'est pas sorcier*",
                host="192.168.1.27",
            )
#             self.collection.resetCollection(security=False)
            self.collection.resetCollection()
        else:
            self.collection = MongoCollection("pagesjaunes", "crawl2")
    
    def crawlingCallback(self, data):
        self.collection.insert({"data": "test", "id": 3})
    
    def printAll(self):
        data = self.collection.toDataFrame()
        print(data)

notUniqueCounter = 0
def notUniqueUrlsGetter():
    global notUniqueCounter
    maxNotUniqueUrls = 100000
    if TEST:
        maxNotUniqueUrls = 20
    if len(allRequests) > 0 and notUniqueCounter < maxNotUniqueUrls:
        notUniqueCounter += 1
        return "https://www.pagesjaunes.fr"
    else:
        return None

def getNewRequestPipedMessage(count=1):
    try:
        request = allRequests.pop()
        request["message"] = "recherche"
        request["count"] = count
#         print("getNewRequestPipedMessage")
#         printLTS(request)
        return request
    except:
        return None

def crawlingCallback(data, browser=None):
    ceType = data["crawlingElement"]["type"]
    ceData = data["crawlingElement"]["data"]
    strToTmpFile(data["html"])
    browser.driver.save_screenshot(tmpDir() + "/" + getRandomStr() + ".png")
    if data["status"] != Browser.REQUEST_STATUS.success:
        return None
    if ceType == CRAWLING_ELEMENT_TYPE.notUniqueUrl:
        if not TEST:
            # Here we check if the element exists in the database
            pass
        request = getNewRequestPipedMessage()
        return request
    elif ceType == CRAWLING_ELEMENT_TYPE.uniqueUrl:
        print("We got " + str(ceData))
        url = data["crawlingElement"]["data"]
        html = data["html"]
#             strToTmpFile(data["html"])
        # First we cherche all request wich have this url:
        allRequestIds = []
        for id, urls in urlMemory.items():
            if url in urls:
                allRequestIds.append(id)
        # Then we store the html for all request id:
        for current in allRequestsCopy:
            if current["request_id"] in allRequestIds:
                toStore = {}
                toStore =  {**toStore, **current}
                toStore["url"] = url
                toStore["html"] = html
                toStore["title"] = data["title"]
                toStore["lastUrl"] = data["lastUrl"]
                mongoConnector.collection.insert(toStore)
        return None
    elif ceType == CRAWLING_ELEMENT_TYPE.pipedMessage:
        if ceData["message"] == "recherche":
            count = ceData["count"]
            # First we check ".no-result"
            soup = BeautifulSoup(data['html'], "lxml")
            if not isNoResult(soup):
                try:
                    # Here we add all found elements to the crawler queue:
                    allLinks = getAllResultLinks(soup)
                    (safeLinks, honeypotLinks) = honeypotDetector.getLinks(browser.driver)
                    for current in allLinks:
                        if current in safeLinks:
                            logInfo("Adding " + str(current))
                            crawler.put(current)
                            # Then we retain all found urls associated with this pipedMessage:
                            urlMemory[ceData["request_id"]].append(current)
                except Exception as e:
                    print(str(e))
        if count < 1000000:
            return getNewRequestPipedMessage(count + 1)
        else:
            return None

def pipCallback(browser, pipedMessage):
#     print("pipedMessage")
#     printLTS(pipedMessage)
    if pipedMessage["message"] == "recherche":
        merde = "#acc-alert-deny"
        merde = browser.driver.find_elements_by_css_selector(merde)
#         print("merde1")
        for current in merde:
            current.click()
            
        # quiquoi:
        quiquoiCSS = "#pj_search_quoiqui"
        quiquoi = browser.driver.find_elements_by_css_selector(quiquoiCSS)
#         print("quiquoi")
        if pipedMessage["l1_normalisee"] is not None:
            for current in quiquoi:
                length = len(current.get_attribute('value'))
                current.send_keys(length * Keys.BACKSPACE)
                current.send_keys(pipedMessage["l1_normalisee"])
                break
        else:
            for current in quiquoi:
                length = len(current.get_attribute('value'))
                current.send_keys(length * Keys.BACKSPACE)
                current.send_keys(pipedMessage["l2_normalisee"])
                break
        randomSleep(0.2, 0.6)
        # ou:
        ouCSS = "#pj_search_ou"
        ou = browser.driver.find_elements_by_css_selector(ouCSS)
#         print("ou")
        for current in ou:
#             print('------------')
#             print(current.get_attribute('value'))
            length = len(current.get_attribute('value'))
            current.send_keys(length * Keys.BACKSPACE)
            current.send_keys(pipedMessage["codpos"])
#             print('------------')
#             print(current.get_attribute('value'))
            break
        randomSleep(0.2, 0.6)
        # button:
        buttonCSS = "#form_motor_pagesjaunes .button .icon-search"
        buttons = browser.driver.find_elements_by_css_selector(buttonCSS)
        buttons = list(buttons)
#         print("buttons")
        for current in buttons:
            current.click()
            break
        randomSleep(0.2, 0.6)
        
#         print("ambiguité")
        # ambiguité
        merde = ".ambiguite_ou_container li a"
        merde = browser.driver.find_elements_by_css_selector(merde)
        for current in merde:
            current.click()
            randomSleep(0.2, 0.6)
            break


def failedUrlCallback(urlsFailedNotEnough, urlsFailedEnough):
    serialize(urlMemory, "/home/hayj/urlmemory.pickle")
    print("urlsFailedNotEnough:")
    printLTS(urlsFailedNotEnough)
    print("urlsFailedEnough:")
    printLTS(urlsFailedEnough)
    tt.toc()

def isNoResult(soup):
    noResult = False
    for noResult in soup.select('.no-result'):
        return True
    return False

def getAllResultLinks(soup):
    resultSelector = "#listResults .denomination-links"
    allLinks = []
    for current in soup.select(resultSelector):
        if current.has_attr('href'):
            current = current['href']
            if len(current) > 5:
                current = "https://www.pagesjaunes.fr" + current
                allLinks.append(current)
    return allLinks

def testParsing():
    curretExecDir = execDir(__file__)
#     result1Path = curretExecDir + "/../data-sample/result-pagesjaunes.html"
#     result1 = fileToStr(result1Path)
#     soup = BeautifulSoup(result1, "lxml")
#     print("no result for result1: " + str(isNoResult(soup)))
#     
#     printLTS(getAllResultLinks(soup))
#     
#     result2Path = curretExecDir + "/../data-sample/result-pagesjaunes-noresult.html"
#     result2 = fileToStr(result2Path)
#     soup = BeautifulSoup(result2, "lxml")
#     print("no result for result2: " + str(isNoResult(soup)))
    
    result3Path = curretExecDir + "/../data-sample/result-pagesjaunes2.html"
    result3 = fileToStr(result3Path)
    soup = BeautifulSoup(result3, "lxml")
    print("no result for result3: " + str(isNoResult(soup)))
    printLTS(getAllResultLinks(soup))
    
    exit()
    
def testProxy():
    proxiesPath = dataDir() + "/Misc/" + "proxies-test.txt"
    proxies = getProxies(proxiesPath)
    b = Browser(proxy=proxies[0])
    print(b.getScrapedHeader())
    exit()

def testButton():
    browser = Browser()
    browser.get("file:///home/hayj/Workspace/Python/Crawling/Misc/webcrawler/data-sample/result-pagesjaunes3.html")
    buttonCSS = "#form_motor_pagesjaunes .button"
    buttons = browser.driver.find_elements_by_css_selector(buttonCSS)
    buttons = list(buttons)
    print(buttons)
    for current in buttons:
        current.click()
        break
    exit()

def serializeUrlMemory():
#     print("serializing urlMemory")
    serialize(urlMemory, "/home/hayj/urlmemory.pickle")

if __name__ == '__main__':
    print("Start")
    
#     testButton()
#     testProxy()
#     testParsing()
    
    TEST = False
    # Get all proxies:
    if TEST:
        proxiesPath = dataDir() + "/Misc/" + "proxies-test.txt"
    else:
        proxiesPath = dataDir() + "/Misc/" + "proxies-prod.txt"
    printLTS(fileToStrList(proxiesPath))
#     exit()
    # Get all requests:
    allRequests = getAllRequests()
    allRequestsCopy = getAllRequests()
    urlMemory = {}
    for currentRequest in allRequests:
        urlMemory[currentRequest["request_id"]] = []
    if TEST:
        printLTS(allRequests)
    # Get mongo connector:
    mongoConnector = MongoConnector()
    
#     df = mongoConnector.collection.toDataFrame()
#     print(df)
#     df.to_csv(tmpDir() + "/" + "data" + getRandomStr() + ".csv")
#     exit()
    
    # serialize url mem:
    timer = Timer(serializeUrlMemory, 3, sleepFirst=True)
    timer.start()
    
    # THE CRAWLER:
    tt = TicToc()
    tt.tic()
    honeypotDetector = HoneypotDetector()
    startUrls = []
    if TEST:
        logger = Logger("pagesjaunes-crawling-test.log")
    else:
        logger = Logger("pagesjaunes-crawling-prod.log")
    if TEST:
        crawler = Crawler \
        (
            startUrls,
            paramsDomain = \
            {
                "proxyInstanciationRate":
                {
                    "alpha": [0.99],
                    "beta": [NormalizedLawBeta.LOG]
                },
                "browserCount": [2],
                "parallelRequests": [2], 
            },
            proxiesPath=proxiesPath,
            pageLoadTimeout=20,
            crawlingCallback=crawlingCallback,
            failedUrlCallback=failedUrlCallback,
            browsersVerbose=True,
            banditRoundDuration=200,
            logger=logger,
            queueMinSize=100,
            stopCrawlerAfterSeconds=10,
            maxRetryFailed=3,
            ajaxSleep=2.0,
            browserMaxDuplicatePerDomain=2,
            useProxies=True,
            pipCallback=pipCallback,
            notUniqueUrlsGetter=notUniqueUrlsGetter,
        )
    else:
        crawler = Crawler \
        (
            startUrls,
            paramsDomain = \
            {
                "proxyInstanciationRate":
                {
                    "alpha": [0.99],
                    "beta": [NormalizedLawBeta.LOG]
                },
                "browserCount": [20],
                "parallelRequests": [20], 
            },
            proxiesPath=proxiesPath,
            pageLoadTimeout=20,
            crawlingCallback=crawlingCallback,
            failedUrlCallback=failedUrlCallback,
            browsersVerbose=True,
            banditRoundDuration=0,
            logger=logger,
            queueMinSize=100,
            stopCrawlerAfterSeconds=1000,
            maxRetryFailed=5,
            ajaxSleep=3.0,
            browserMaxDuplicatePerDomain=2,
            useProxies=True,
            pipCallback=pipCallback,
            notUniqueUrlsGetter=notUniqueUrlsGetter,
        )

    crawler.start()
    crawler.mainThread.join()
    print("Main thread end !!!!!")
    
    # Attention, le placement des element si c'est sur mobile est mauvais et fait planté tout

    # IPs de test
    # 192.3.220.160:80:octopeek:librepost
    # 165.231.108.152:80:octopeek:librepost
    # 23.229.63.71:80:octopeek:librepost
    # 196.17.15.50:80:octopeek:librepost
    # 165.231.108.142:80:octopeek:librepost
    # 104.160.1.244:80:octopeek:librepost
    
    """
        23.229.63.119:80:octopeek:librepost
        165.231.108.5:80:octopeek:librepost
        107.150.88.57:80:octopeek:librepost
    """
    """
        179.61.175.245:80:octopeek:librepost
        154.16.43.38:80:octopeek:librepost
        138.128.226.253:80:octopeek:librepost
    """

    """
        192.3.220.160:80:octopeek:librepost
        165.231.108.152:80:octopeek:librepost
        23.229.63.71:80:octopeek:librepost
        165.231.108.142:80:octopeek:librepost
        104.160.1.244:80:octopeek:librepost
        23.229.63.119:80:octopeek:librepost
        165.231.108.5:80:octopeek:librepost
        107.150.88.57:80:octopeek:librepost
        179.61.175.245:80:octopeek:librepost
        154.16.43.38:80:octopeek:librepost
        138.128.226.253:80:octopeek:librepost
        107.150.88.180:80:octopeek:librepost
        23.229.63.104:80:octopeek:librepost
        185.182.48.125:80:octopeek:librepost
        179.61.175.188:80:octopeek:librepost
        23.229.63.115:80:octopeek:librepost
        104.160.2.150:80:octopeek:librepost
        185.182.48.183:80:octopeek:librepost
        192.3.220.158:80:octopeek:librepost
        179.61.175.130:80:octopeek:librepost
        23.229.62.84:80:octopeek:librepost
        23.229.58.90:80:octopeek:librepost
        104.160.2.83:80:octopeek:librepost
    """
    
    
    





