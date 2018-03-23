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

def htmlCallback(data, driver):
    result = str(data)[0:40]
    print(result)

def getLongSleep(b):
    b.get("http://localhost/testajax/longsleep.php")
#     b.close()

def testClose():
    b = Browser \
    (
        loadImages=True,
        pageLoadTimeout=3,
        htmlCallback=htmlCallback,
        ajaxSleep=1.0,
    )
    
    b.get("http://selenium-python.readthedocs.io/api.html")
#     theThread = Thread(target=getLongSleep, args=(b,))
#     theThread.start()
    b.get("http://localhost/testajax/longsleep.php")
    time.sleep(10)
#     b.stopLoading()
#     time.sleep(0.1)
#     print(b.driver.page_source)
    print(b.driver.current_url)


def testTimeout():
    """
        L'objectif ici c'est de voir si quand on a un timeout, ça produit une exception
        quand on veut le current_url
    """

if __name__ == '__main__':
    testClose()


















