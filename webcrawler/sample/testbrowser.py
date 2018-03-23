from systemtools.basics import *
from datatools.json import *
from datatools.url import *
from machinelearning.bandit import *
from datastructuretools.setqueue import *
from machinelearning.function import *
from datatools.csvreader import *
from systemtools.basics import *
from systemtools.duration import *
from systemtools.file import *
from systemtools.logger import *
from systemtools.location import *
from systemtools.system import *
import selenium
from selenium import webdriver
import sh
import random
import html2text
import re
import ipgetter
from threading import Thread, Lock, Semaphore, active_count, BoundedSemaphore
import math
import numpy
from webcrawler.utils import *
from webcrawler.browser import *
from queue import *
import gc
from webcrawler.newsscraper import *



ns = NewsScraper(fileToStr(tmpDir() + "/test5864.html"))
ns = NewsScraper(fileToStr(tmpDir() + "/example.html"))
printLTS(ns.scrapAll())
exit()

b = Browser(driverType=DRIVER_TYPE.phantomjs)
content = b.html("http://wgntv.com/2017/01/14/ringling-brothers-closing-circus/")


printLTS(content)


strToFile(content["html"], tmpDir() + "/test5864.html")