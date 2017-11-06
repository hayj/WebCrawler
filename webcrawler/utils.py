# coding: utf-8

from systemtools.basics import *
from datatools.json import *
from datatools.url import *
from machinelearning.bandit import *
from machinelearning.function import *
from datatools.csvreader import *
from systemtools.basics import *
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
from threading import Thread, Lock
import math
import numpy

CRAWLING_ELEMENT_TYPE = Enum("CRAWLING_ELEMENT_TYPE", "notUniqueUrl uniqueUrl pipedMessage")

def urlToCrawlingElement(url):
    if url is None or isinstance(url, dict):
        return url
    else:
        return \
        {
            "data": url,
            "type": CRAWLING_ELEMENT_TYPE.uniqueUrl,
        }

def generateAjaxRandomURLs(n=10):
    for i in range(n):
        yield generateAjaxRandomURL()

def generateAjaxRandomURL():
    return "http://localhost/testajax/demo.php?id=" + getRandomStr() + "#page1"

def isRefused(html, lastUrl):
    if html == "<html><head></head><body></body></html>" \
    or lastUrl == "about:blank" \
    or "could not be retrieved</title>" in html:
        return True
    return False

def isInvalidHtml(html):
    if html is None or len(html) < 100:
        return True
    titleResult = re.finditer("<title(.*)</title>", html, re.DOTALL)
    if titleResult is None:
        return True
    titleResult = list(titleResult)
    if len(titleResult) == 0:
        return True
    if "You have been blocked" in html:
        return True
    return False

def is404Error(html, debug=False):
#     strToFile(html, getExecDirectory(__file__) + "/tmp/test.html")
#     exit()
    # If we found any of this in the first "<title(.*)</title>", it's a 404:
    match404Title = ["404", "error", "not found", "Moved Temporarily", "401 Unauthorized", "403 Forbidden", "Request Timeout", "Too Many Requests", "Service Unavailable", "404 ", " 404"]
    titleResult = re.finditer("<title(.*)</title>", html, re.DOTALL)
    if titleResult is None:
        return True
    titleResult = list(titleResult)
    if len(titleResult) == 0:
        return True
    title = None
    for current in titleResult:
        title = current.group(1)
        if title is None:
            return True
        if len(title) >= 1:
            title = title[1:]
        title = title.lower()
        break
    for current in match404Title:
        if current.lower() in title:
            if debug:
                print(">>>>> " + current)
            return True
    # Or if any of this is in the body:
    match404Body = ["404 not found", "page not found", "404<", ">404", "Moved Temporarily", "401 Unauthorized", "403 Forbidden", "Request Timeout", "Too Many Requests", "Service Unavailable"]
    htmlLower = html.lower()
    for current in match404Body:
        if current.lower() in htmlLower:
            if debug:
                print(">>>>> " + current)
            return True
    # Else we return True
    return False



def getProxiesPath(proxiesPath=None):
    if proxiesPath is not None:
        return proxiesPath
    else:
        return dataDir() + "/Misc/proxies-prod.txt"

def getIP():
    return ipgetter.myip()

def getRandomProxy(proxiesPath=None):
    proxiesPath = getProxiesPath(proxiesPath)
    allProxies = getProxies(proxiesPath)
    return random.choice(allProxies)

def getProxies(proxiesPath=None):
    proxiesPath = getProxiesPath(proxiesPath)
    # If the file exist, we parse it, one proxie by line (165.231.108.5:80:user:pass)
    if fileExists(proxiesPath):
        proxies = []
        proxies = fileToStrList(proxiesPath)
        for i in range(len(proxies)):
            theTuple = proxies[i].split(":")
            theDict = {}
            theDict["ip"] = theTuple[0]
            theDict["port"] = theTuple[1]
            theDict["user"] = theTuple[2]
            theDict["password"] = theTuple[3]
            theDict["type"] = "http"
            proxies[i] = theDict
        return proxies
    return None

def testIsHtmlOK():
    for currentPath in sortedGlob(getExecDirectory(__file__) + "/data-test/*.html"):
        print(currentPath)
        text = fileToStr(currentPath)
        print(isHtmlOk(text))

def getMongoAuth(isJamy=False):
    """
        (user, password, host) = getMongoAuth()
    """
    if isJamy:
        return \
        (
            "jamy",
            "c'est pas sorcier*",
            "192.168.1.29",
        )
    else:
        password="K5Tv9G4191IfapG327Pnd6ft8IE49Igamv"
        user="hayj"
        if isHostname("datascience"):
            host = "localhost"
        else:
            host = "ds01.dc01.octopeek.com"
        return (user, password, host)

if __name__ == '__main__':
#     testIsHtmlOK()
    print(getProxiesPath())






