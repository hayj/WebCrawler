# coding: utf-8

from webcrawler.browser import *
from webcrawler.utils import *
from selenium import webdriver
from datatools.url import *
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import random
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import zipfile
from systemtools.file import *
from systemtools.location import *
from systemtools.basics import *
import psutil
import time

if __name__ == '__main__':
    
    b = Browser(driverType=DRIVER_TYPE.chrome, headless=True)
    
#     urls = ["http://nypost.com/2017/10/07/inside-the-mean-girls-culture-that-destroyed-sex-and-the-city/", "http://abcnews.go.com/Entertainment/wireStory/resignations-fallout-grow-embattled-producer-weinstein-50351532", "https://framaforms.org/evenement-koezio-doctorants-ed-stic-15-decembre-2017-1509354126"]
#     for url in urls:
#         data = b.html(url)
#         print(data["status"])
#         print(data["title"])

    printLTS(b.html("https://www.google.com"))
    
#     b.initDriver()
#     
#     time.sleep(30)

