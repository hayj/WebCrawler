# coding: utf-8

from datatools.text import *
from datatools.json import *
from datatools.url import *
from datatools.csvreader import *
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
import scrapy




class MongoConnector():
    def __init__(self):
        pass
    
    def crawlerCallback(self, url, expendedUrl, html, title=None, extraData=None):
        pass

class MultipleCrawler():
    def __init__(self, **kwargs):
        self.init(**kwargs)
    
    def init(self,
             crawlerNumber=None,
             proxiesPath=None,
             logger=None,
             crawlerCallback=None,
             linkPerCrawler=500):
        self.logger = logger
        self.linkPerCrawler = linkPerCrawler
        self.crawlerNumber = crawlerNumber
        self.initProxies(proxiesPath)
        if self.crawlerNumber is None:
            self.crawlerNumber = len(self.proxies)
        self.initCrawlers(crawlerCallback)
    
    def initProxies(self, proxiesPath=None):
        """
            This function parse a proxy file and keep it. You have to launch initCrawlers() after if you want to apply these new proxies to all crawlers. The init function do it by itself.
        """
        self.proxiesPath = proxiesPath
        self.proxies = MultipleCrawler.getProxies(self.proxiesPath)
    
    
    def initCrawlers(self, crawlerCallback):
        self.crawlers = []
        # Init all crawlers:
        for i in range(self.crawlerNumber):
            # Creating the crawler:
            crawler = Crawler(crawlerCallback=crawlerCallback)
            # Set a proxy only if there is one left:
            if i <= len(self.proxies) - 1:
                proxy = self.proxies[i]
                crawler.setProxie(**proxy)
            self.crawlers.append(crawler)


class Crawler1(scrapy.Spider):
    name = "product_spider"
        
    def __init__(self, start_urls, browser):
        self.start_urls = start_urls
        self.browser = browser

    def parse(self, response):
        html = self.driver.html(response.url)
        print(html)



from scrapy.crawler import CrawlerProcess
    
class MySpider1(scrapy.Spider):
    
    name = "product_spider2"
    start_urls = ['http://localhost/testajax/demo.php?id=95L4FZZLVN-15083666594480977#page1', 'http://localhost/testajax/demo.php?id=MCSZTE86LG-15083666594481184#page1', 'http://localhost/testajax/demo.php?id=FTQOTIFPU5-15083666594481285#page1', 'http://localhost/testajax/demo.php?id=QP0F5Q81P7-15083666594481375#page1', 'http://localhost/testajax/demo.php?id=9ZDM0IPSIA-15083666594481463#page1', 'http://localhost/testajax/demo.php?id=NN5U7L2ZJF-15083666594481554#page1', 'http://localhost/testajax/demo.php?id=59YT7L48MK-1508366659448164#page1', 'http://localhost/testajax/demo.php?id=UTQ67EGRV5-1508366659448173#page1', 'http://localhost/testajax/demo.php?id=2DFQPW5TJ3-15083666594481826#page1', 'http://localhost/testajax/demo.php?id=WTS6QB2BWC-1508366659448192#page1']

    def parse(self, response):
#         print(response.body)
        print("b")
 
class MySpider2(scrapy.Spider):
    start_urls = ['http://localhost/testajax/demo.php?id=A2CS8MT9BT-1508366674654952#page1', 'http://localhost/testajax/demo.php?id=DRRXZ0HNZX-15083666746549704#page1', 'http://localhost/testajax/demo.php?id=L5LJJJLEOX-1508366674654981#page1', 'http://localhost/testajax/demo.php?id=7QSCJ0W9AN-150836667465499#page1', 'http://localhost/testajax/demo.php?id=4ITANGNBA0-15083666746549993#page1', 'http://localhost/testajax/demo.php?id=QM3JWVQ143-15083666746550086#page1', 'http://localhost/testajax/demo.php?id=16W90O63JE-15083666746550174#page1', 'http://localhost/testajax/demo.php?id=FY5E98PVTT-1508366674655026#page1', 'http://localhost/testajax/demo.php?id=7GD21D8VEE-1508366674655034#page1', 'http://localhost/testajax/demo.php?id=UPS5LNPTGJ-15083666746550431#page1']
    
    name = "product_spider3"
    
    def parse(self, response):
        print("a")
        if getRandomFloat() > 0.9:
            print(response.body)

        
if __name__ == '__main__':


    process = CrawlerProcess()
    process.crawl(MySpider1)
    process.crawl(MySpider2)
    process.start() # the script will block here until all crawling jobs are finished









