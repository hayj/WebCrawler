# coding: utf-8

import pymongo
from databasetools.mongo import *
from systemtools.file import *
from systemtools.location import *
from systemtools.basics import *
from datatools.json import *
from datatools.csvreader import *
from webcrawler.crawler import *
from webcrawler.utils import *
from webcrawler.browser import *
from webcrawler.error404.urls import *
import sh
from webcrawler.error404.urls import *
import random
from webcrawler.error404.alreadydone import *
from systemtools.logger import log, logInfo, logWarning, logError, Logger

def seedTest():
    b = Browser(driverType=DRIVER_TYPE.chrome, proxy=getRandomProxy(), headless=False)
    print(b.getScrapedHeader())
    b.close()
    

def test1():
    b = Browser(headless=True)
    print(b.getScrapedHeader())
    b.close()

if __name__ == '__main__':
    seedTest()


"""

www.whatismybrowser.com: 
[
    "ACCEPT text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "ACCEPT_ENCODING gzip, deflate",
    "CONNECTION keep-alive",
    "UPGRADE_INSECURE_REQUESTS 1",
    "USER_AGENT Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/61.0.3163.100 Safari/537.36"
]


"""