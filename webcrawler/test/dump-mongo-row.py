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







def getAllFailedUrls(dbName="test", collectionName="samehtml2", getLastUrl=True):
    (user, password, host) = getMongoAuth()
    collection = MongoCollection \
    (
        dbName,
        collectionName,
        user=user,
        password=password,
        host=host,
        indexNotUniqueOn="last_url_domain",
        indexOn=["expanded_url", "twitter_url"],
    )
    urls = []
    urlParser = URLParser()
    count = 0
    for current in collection.find():
        expandedUrl = current["expanded_url"]
        lastUrl = current["last_url"]
        if expandedUrl != lastUrl:
            expandedUrlDomain = urlParser.getDomain(expandedUrl)
            lastUrlDomain = urlParser.getDomain(lastUrl)
            if expandedUrlDomain != lastUrlDomain:
                urls.append(expandedUrl)
                if getLastUrl:
                    urls.append(lastUrl)
                count += 1
    print("count")
    print(count)
    print("collectionCrawling.size()")
    print(collection.size())
    return urls
    


def urlToTmpFile(url, dbName="test", collectionName="samehtml2"):
    (user, password, host) = getMongoAuth()
    collection = MongoCollection \
    (
        "test",
        "samehtml2",
        user=user,
        password=password,
        host=host,
        indexNotUniqueOn="last_url_domain",
        indexOn=["expanded_url", "twitter_url"],
    )
    
    for current in collection.find({"expanded_url": url}):
        scrap = current["scrap"]["boilerpipe"]["text"]
        current["scrap"] = None
        html = current["html"]
        current["html"] = None
        result = listToStr(current)
        result += "\n" * 10
        result += scrap
        result += "\n" * 10
        result += html
        strToTmpFile(result, ext="txt")
        

def seeTimeoutWithContent(dbName="test", collectionName="samehtml2"):
    (user, password, host) = getMongoAuth()
    collection = MongoCollection \
    (
        "test",
        "samehtml2",
        user=user,
        password=password,
        host=host,
        indexNotUniqueOn="last_url_domain",
        indexOn=["expanded_url", "twitter_url"],
    )
    
    for current in collection.find({"status": "timeoutWithContent"}):
        scrap = current["scrap"]["boilerpipe"]["text"]
        url = current["expanded_url"]
        print(current["status"])
        print(url)
        input()
        print(scrap)
        input()
        


if __name__ == '__main__':


    # 
    # urls = \
    # [
    #     "http://www.nbcnews.com/news/us-news/army-leaker-chelsea-manning-obama-s-short-list-commutation-n705441",
    #     "http://www.foxnews.com/us/2017/01/16/fbi-reportedly-arrests-wife-orlando-nightclub-killer-omar-mateen.amp.html",
    #     "http://share.ew.com/MgtkDnw",
    #     "https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/taranurin/2017/01/06/next-on-tap-for-beer-k-cups-not-keg-cups/&utm_source=TWITTER&utm_medium=social&utm_content=774739143&utm_campaign=sprinklrForbesTechTwitter&refURL=&referrer=",
    # ]
    
#     for url in getAllFailedUrls():
#         urlToTmpFile(url)

    seeTimeoutWithContent()















