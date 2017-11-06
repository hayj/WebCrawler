# coding: utf-8


import pymongo
from databasetools.mongo import *
from systemtools.file import *
from systemtools.location import *
from systemtools.basics import *
from webcrawler.utils import *
import sh
from webcrawler.error404.urls import *
from webcrawler.browser import *

def htmlCallback(data, browser):
    printLTS(data["crawlingElement"]["data"])
    printLTS(data["html"])
#     printLTS(data["html"][0:30])

if __name__ == '__main__':
    urls = \
    [
        "http://blogs.timesofindia.indiatimes.com/toi-editorials/a-really-spicy-sarkari-romance-three-cheers-for-ias-toppers-tina-dabi-and-athar-khan-rocking-conservative-boats-%F0%9F%98%9C/",
        "https://sqa.stackexchange.com/questions/24961/selenium-getpagesource-returns-previous-pages-source",
#         "/home/hayj/Workspace/Python/Crawling/WebCrawler/webcrawler/data-sample/produce_static_browser.html",
#         "http://ujhgseythsdqfsdfvshd.fr",
#         generateAjaxRandomURL(),
#         generateAjaxRandomURL(),
#         generateAjaxRandomURL(),
#         generateAjaxRandomURL(),
    ]
    
    browser = Browser \
    (
        htmlCallback=htmlCallback,
        proxy=getRandomProxy(),
        loadImages=True,
        pageLoadTimeout=15,
        maxDuplicatePerDomain=1000,
        ajaxSleep=6.0,
    )
    
    for url in urls:
        browser.get(url)
        input()
    