# coding: utf-8


from datatools.url import *
from systemtools.basics import *
from systemtools.duration import *
from systemtools.file import *
from systemtools.logger import log, logInfo, logWarning, logWarning, logError, Logger
from systemtools.location import *
from systemtools.system import *
import sh
import random
import re
from threading import Thread, Lock, Semaphore, active_count
from webcrawler.crawler import *
from webcrawler.utils import *
from webcrawler.browser import *
from queue import *
from databasetools.mongo import *
from databasetools.mongo import *
from datatools.newstools import *
from twitterarchiveorg.urlgenerator import *
from webcrawler.sample import __version__
from threading import Thread
import time



bs = []
isProxy = False
 
def functThread():
    global bs
    randomSleep(0, 10)
    proxy = None
    if isProxy:
        proxy=getRandomProxy()
    b = Browser(proxy=proxy)
    bs.append(b)
    print(str(b.html("http://edition.cnn.com/2017/11/07/politics/trump-moon-jae-in-south-korea/index.html")["html"])[0:3])
    time.sleep(30)
 
 
for i in range(20):
    currentThread = Thread(target=functThread)
    currentThread.start()

for i in range(200):
    time.sleep(30)
    try:
        print("killing")
        if isProxy:
            sh.pkill("-f", ".*phantomjs.*octopeek.*")
        else:
            sh.pkill("-f", ".*phantomjs.*")
    except Exception as e:
        print(str(e))



