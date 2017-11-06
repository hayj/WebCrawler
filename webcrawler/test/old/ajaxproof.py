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
from webcrawler.utils import *
from webcrawler.browser import *
from queue import *

import urllib.request

import scrapy
from scrapy.crawler import CrawlerProcess
    

 
class MySpider(scrapy.Spider):
    start_urls = None
    
    name = "product_spider3"
    
    def parse(self, response):
        html = response.body
        strToFile(byteToStr(html), rootPath + "/tmp/" + "scrapy-crawl" + ".html")

        
# url = 'http://www.lemonde.fr/idees/article/2017/10/25/la-force-tranquille-de-l-oncle-xi_5205696_3232.html'
# url = 'http://www.lefigaro.fr/services/catawiki/2017/09/29/06020-20170929ARTWWW00083-l8217histoire-cachee-des-albums-les-plus-recherches-de-tintin.php'
# url = 'http://www.lexpress.fr/actualite/politique/54-des-francais-pensent-que-le-pouvoir-est-trop-concentre-sur-macron_1955089.html'
url = 'http://www.leparisien.fr/culture-loisirs/la-legende-du-rock-fats-domino-est-morte-25-10-2017-7354680.php'



if __name__ == '__main__':
    
    rootPath = getExecDirectory(__file__)
    
    globRemove(rootPath + "/tmp/*")
    
    
    print("Start")
#     page = urllib.request.urlopen(url)
#     strToFile(byteToStr(page.read()), rootPath + "/tmp/" + "no-js-no-comments" + ".html")
    
    
    
    
    b = Browser()
    html = b.html(url)["html"]
    strToFile(html, rootPath + "/tmp/" + "got-comments" + ".html")
    
    
    
    MySpider.start_urls = [url]
    process = CrawlerProcess()
    process.crawl(MySpider)
    process.start() # the script will block here until all crawling jobs are finished
    
    
    
    print("END")