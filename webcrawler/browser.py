# coding: utf-8

from datatools.json import *
from datatools.url import *
from machinelearning.bandit import *
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
from threading import Thread, Lock
import math
import numpy
from webcrawler.utils import *
from webcrawler.domainduplicate import *
from enum import Enum
import time
from webcrawler.crawler import CRAWLING_ELEMENT_TYPE, urlToCrawlingElement
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys

# debugCount = 0

def queueMean(queue, defaultValue=0.0):
    if queue is None:
        return defaultValue
    l = list(queue)
    l = removeNone(l)
    if len(l) == 0:
        return defaultValue
    return sum(l) / len(l)



class Browser():
    """
        # html and get methods explanation:
        
        We have 2 scenarios:
         * You gave a htmlCallback to the __init__. This scenario is usefull if you want to consider
         the page download as a critical part (network bottleneck). And you also want to wait the ajax
         to be loaded but you don't consider this wait as a network bottleneck.
             * So you have to call "get" method, this will lock the object,
             get the url, then start a thread, finally return True if the request succeeded.
             The thread will wait, call the "html" method (for the htmlCallback) and finally 
             release the lock.
         * You didn't give any callback:
              * You need to use "html" method and give an url. No thread will be executed.
              No lock will be locked. "html" method will call "get" method and just return data
              to the caller.
        
        # Scrolling down before or after the ajax wait
        
        If, for instance you want to scroll down or other things in the browser, you can give
        callbacks to the browser : beforeAjaxSleepCallback and afterAjaxSleepCallback
    """
    
    headers = \
    {
        "Accept": \
        [
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    #         "*/*",
        ],
        # If we set this, we got encrypted web page source:
    #     "Accept-Encoding": \
    #     [
    #         "gzip, deflate, br",
    #         "br, gzip, deflate",
    #         "gzip, deflate",
    #     ],
        "Accept-Language": \
        [
            "fr-fr",
            "en-US,*",
            "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
        ],
        "User-Agent": \
        [
#             "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0_3 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A432 Safari/604.1",
#             "Googlebot/2.1 (+http://www.google.com/bot.html)",
#             "Googlebot/2.1 (+http://www.googlebot.com/bot.html)",
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:56.0) Gecko/20100101 Firefox/56.0", # laptop
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36", # laptop
            "Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:16.0) Gecko/20120815 Firefox/16.0", # laptop
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36", # laptop
            "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36", # laptop
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36", # laptop
#             "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0_3 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) CriOS/61.0.3163.73 Mobile/15A432 Safari/602.1",
        ]
    }
    
    duplicates = DomainDuplicateCache()
    
    REQUEST_STATUS = Enum("REQUEST_STATUS", "success error404 timeout timeoutWithContent refused duplicate invalid exception")
    
    def __init__(
                    self,
                    phantomjsPath="/home/hayj/Programs/headlessbrowsers/phantomjs-2.1.1-linux-x86_64/bin/phantomjs",
                    logger=None,
                    proxy=None,
                    name=None,
                    verbose=True,
                    loadImages=False,
                    beforeAjaxSleepCallback=None,
                    afterAjaxSleepCallback=None,
                    htmlCallback=None,
                    defaultScore=None,
                    durationHistoryCount=60, # 60 is a good choice
                    pageLoadTimeout=25,
                    maxDuplicatePerDomain=20,
                    checkProxyTimeout=5,
                    ajaxSleep=1.0, # > 3.0 for production crawl task
                ):
        self.lastIsDuplicate = False
        self.maxDuplicatePerDomain = maxDuplicatePerDomain
        self.beforeAjaxSleepCallback = beforeAjaxSleepCallback
        self.afterAjaxSleepCallback = afterAjaxSleepCallback
        self.name = name
        if self.name is None:
            self.name = getRandomName()
        self.verbose = verbose
        self.logger = logger
        self.phantomjsPath = phantomjsPath
        self.pageLoadTimeout = pageLoadTimeout
        self.defaultScore = defaultScore
        if self.defaultScore is None:
            self.defaultScore = self.pageLoadTimeout
        self.checkProxyTimeout = checkProxyTimeout
        self.ajaxSleep = ajaxSleep
        self.driver = None
        self.proxy = proxy
        self.loadImages = loadImages
        self.generateHeaderForThisProxy()
        self.initDriver()
        self.generateWindowForThisProxy()
        self.htmlCallback = htmlCallback
        self.lastGetIsOk = None
        self.crawlingElement = None
        self.durationHistoryCount = durationHistoryCount
        self.durationHistory = getFixedLengthQueue(self.durationHistoryCount)
        self.lock = Lock()
        
    def clone(self):
        return Browser \
        (
            phantomjsPath=self.phantomjsPath,
            logger=self.logger,
            proxy=self.proxy,
            name=None,
            verbose=self.verbose,
            loadImages=self.loadImages,
            beforeAjaxSleepCallback=self.beforeAjaxSleepCallback,
            afterAjaxSleepCallback=self.afterAjaxSleepCallback,
            htmlCallback=self.htmlCallback,
            defaultScore=self.defaultScore,
            durationHistoryCount=self.durationHistoryCount,
            pageLoadTimeout=self.pageLoadTimeout,
            maxDuplicatePerDomain=self.maxDuplicatePerDomain,
            checkProxyTimeout=self.checkProxyTimeout,
            ajaxSleep=self.ajaxSleep,
        )
    
    def log(self, text):
        if self.logger is not None:
            log(text, self)
        else:
            print(text)
    
    def getProxy(self):
        return self.proxy
    
    def generateHeaderForThisProxy(self):
        if self.proxy is None:
            self.generateRandomHeader()
        else:
            ip = self.proxy["ip"]
            ip = ip.replace(".", "_")
            numbers = getAllNumbers(ip)
            i = 0
            for key, value in Browser.headers.items():
                if key != "User-Agent":
                    theNumberIndex = i % len(numbers)
                    theNumber = numbers[theNumberIndex]
                    if theNumber == 0:
                        theNumber = 1
                    theIndex = theNumber % (len(value))
                    value = value[theIndex]
#                     print(value)
                    capabilityKey = 'phantomjs.page.customHeaders.{}'.format(key)
                    webdriver.DesiredCapabilities.PHANTOMJS[capabilityKey] = value
                i += 1
            theIndex = numbers[0] % (len(Browser.headers["User-Agent"]))
            userAgent = Browser.headers["User-Agent"][theIndex]
#             print(userAgent)
            webdriver.DesiredCapabilities.PHANTOMJS['phantomjs.page.settings.userAgent'] = userAgent
    
    def generateRandomHeader(self):
        for key, value in Browser.headers.items():
            if key != "User-Agent":
                value = random.choice(value)
                capabilityKey = 'phantomjs.page.customHeaders.{}'.format(key)
                webdriver.DesiredCapabilities.PHANTOMJS[capabilityKey] = value
        userAgent = random.choice(Browser.headers["User-Agent"])
        webdriver.DesiredCapabilities.PHANTOMJS['phantomjs.page.settings.userAgent'] = userAgent
    
    def generateWindowForThisProxy(self):
        if self.driver is not None:
            if self.proxy is None:
                self.generateRandomWindow()
            else:
                ip = self.proxy["ip"]
                ip = ip.replace(".", "_")
                numbers = getAllNumbers(ip)
                width = int(1101 + numbers[0] + numbers[1])
                height = int(803  + numbers[2] + numbers[3])
                self.driver.set_window_size(width, height)
            
    def generateRandomWindow(self):
        if self.driver is not None:
            self.driver.set_window_size(getRandomInt(600, 1600), getRandomInt(500, 1500))
    
    def getScrapedHeader(self):
        headerSources = \
        [
            ("https://www.whatismybrowser.com/detect/what-http-headers-is-my-browser-sending", ".table"),
#             ("http://www.procato.com/my+headers", ".containerInner"),
#             ("http://httpbin.org/headers", None),
        ]
        urlParser = URLParser()
        allHeaders = {}
        for url, cssSelector in headerSources:
            try:
                domain = urlParser.getDomain(url, urlLevel=URLLEVEL.ALL)
                self.driver.get(url)
                if cssSelector is not None:
                    header = self.driver.find_element_by_css_selector(cssSelector).text
                    header = header.strip().split("\n")
                    newHeader = []
                    for current in header:
                        if not (current.lower().startswith("host") or current.lower().startswith("referer")):
                            newHeader.append(current)
                    header = newHeader
                else:
                    header = self.driver.page_source
                allHeaders[domain] = header
            except: pass
        return listToStr(allHeaders)

    def meanDuration(self):
        return queueMean(self.durationHistory, defaultValue=self.defaultScore)
    
    def getDriverData(self):
        lastUrl = None
        title = None
        html = None
        try:
            lastUrl = self.driver.current_url
            title = self.driver.title.strip()
            html = self.driver.page_source
        except Exception as e:
            logError("Exception location: browser.getDriverData()\n" + str(e), self)
        return (title, html, lastUrl)

    def acquire(self):
#         logWarning("Acquiring " + self.name, self)
        self.lock.acquire()
        
    def tryRelease(self):
        try:
#             logWarning("Trying to release " + self.name, self)
            self.lock.release()
        except Exception as e:
            logError("Exception location: browser.tryRelease()\n" + str(e), self)
    
    
    def get(self, crawlingElement, pipCallback=None):
        """
            This function return True if the request succeeded.
        """
        # We convert the url:
        crawlingElement = urlToCrawlingElement(crawlingElement)
        
        # Here we have a callback, we have to lock the object:
        if self.htmlCallback is not None:
            self.acquire()
        try:
            # And now we can get the html and retain time duration:
            tt = TicToc()
            tt.tic(display=False)
#             logInfo("Launching get for: " + str(url))
            if crawlingElement["type"] == CRAWLING_ELEMENT_TYPE.pipedMessage:
                pipCallback(self, crawlingElement["data"]) # Here the url is a piped message
            else:
                self.stopLoadingAndLoadBlank()
                self.driver.get(crawlingElement["data"])
#             logInfo("get done for: " + str(url))
            
#             global debugCount
#             debugCount += 1

            
            # We finally got something without exception, so we try to get data:
            (title, html, lastUrl) = self.getDriverData()
            
            # But here, if the status is not success, we set diffTime as the max:
            diffTime = tt.tic(display=False)
            if self.getStatus(True, crawlingElement, lastUrl, title, html) != Browser.REQUEST_STATUS.success:
                diffTime = self.pageLoadTimeout
            
            # We add the score to the history:
            self.durationHistory.append(diffTime)
            
            # And we keep currentUrl and ok status for the "html()" method:
            self.currentCrawlingElement = crawlingElement
            self.lastGetIsOk = True
            self.lastIsDuplicate = False
            if title is not None and html is not None \
            and crawlingElement["type"] == CRAWLING_ELEMENT_TYPE.uniqueUrl:
                self.lastIsDuplicate = self.duplicates.isDuplicate \
                (
                    crawlingElement["data"],
                    title,
                    html,
                    self.maxDuplicatePerDomain
                )
            
                # Now we add the download page to duplicates structure:
                Browser.duplicates.add \
                (
                    crawlingElement["data"],
                    title,
                    html,
                )
            
            # Finally we exec the finally statement and we return True (i.e. request ok):
            return True
        except Exception as e:
            if not isinstance(e, TimeoutException):
                logError("Exception location: browser.get()\n" + str(e), self)
            # Here we got a timeout, so we set the score as the badest:
            self.durationHistory.append(self.pageLoadTimeout)
            
            # And we keep url and ok status for the "html()" method:
            self.currentCrawlingElement = crawlingElement
            self.lastGetIsOk = False
            
            # Finally we exec the finally statement and we return False (i.e. failed):
            return False
        # The finally is executed before the return statement
        finally:
            # If the request succeeded:
            if self.lastGetIsOk:
                # First if this is a duplicates (i.e. a "you've been blocked" page for instance),
                # we don't need to sleep but we call the callback to keep aware the crawler:
                if self.lastIsDuplicate:
                    theThread = Thread(target=self.noAjaxSleepThenCallback)
                    theThread.start()
                # Then if we don't have any callback, the caller of this funct is the 
                # "html()" method of this object, so we just need to sleep:
                elif self.htmlCallback is None:
                    self.doAjaxSleep()
                # Else if we actually have a right web page without timeout
                # We sleep and we call the callback:
                else:
                    theThread = Thread(target=self.ajaxSleepThenCallback)
                    theThread.start()
            # If we got a timeout, we don't need to sleep:
            else:
                # If there are no callback, we don't do anything:
                if self.htmlCallback is None:
                    pass
                # Else we don't sleep but call the callback:
                # Or we have to sleep because we can have a timeoutWithContent...
                else:
                    theThread = Thread(target=self.noAjaxSleepThenCallback)
                    theThread.start()
#             self.tryRelease()

    
    def stopLoadingAndLoadBlank(self):
        self.stopLoading()
        self.loadBlank()
    
    def loadBlank(self):
#         tt = TicToc() # TODO delete
#         tt.tic()
        try:
            self.driver.get("about:blank")
        except Exception as e:
            logError("Exception location: Browser.loadBlank()\n" + str(e))
#         tt.toc()
    
    def stopLoading(self):
#         tt = TicToc() # TODO delete
#         tt.tic()
        try:
#             self.driver.close()
            self.driver.execute_script("window.stop();")
            self.driver.find_elements_by_css_selector("*")[0].send_keys(Keys.CONTROL + 'Escape')
        except Exception as e:
            logError("Exception location: Browser.stopLoading()\n" + str(e))
#         tt.toc()
    
    def doAjaxSleep(self):
        if self.beforeAjaxSleepCallback is not None:
            self.beforeAjaxSleepCallback(self)
        if self.ajaxSleep > 0.0:
            time.sleep(self.ajaxSleep)
        if self.afterAjaxSleepCallback is not None:
            self.afterAjaxSleepCallback(self)
    
    def noAjaxSleepThenCallback(self):
        try:
            self.html()
        except Exception as e:
            logError("Exception location: browser.noAjaxSleepThenCallback()\n" + str(e), self)
        self.tryRelease()

    def ajaxSleepThenCallback(self):
        self.doAjaxSleep()
        try:
            self.html()
        except Exception as e:
            logError("Exception location: browser.ajaxSleepThenCallback()\n" + str(e), self)
        # Here we terminated the sleep and the callback, so we can unlock the object:
        self.tryRelease()
    
    def isTimeoutWithContent(self, lastUrl, title, html):
        """
            Return False if it is a true timeout
            True instead (in case we got content)
        """
        if lastUrl is None or lastUrl.strip() == "" \
        or title is None or title.strip() == "" \
        or html is None or html.strip() == "" \
        or lastUrl == "about:blank":
            return False
        if "</body>" in html \
        and len(html) > 100:
            return True
        return False
            
    
    def getStatus(self, ok, crawlingElement, lastUrl, title, html):
        """
            The only difference to call this method in "get()" vs in "html()"
            is the the lastUrl can change du to js redirection...
            The html can change too, but it's not important to get the status
        """
        if not ok:
            if self.isTimeoutWithContent(lastUrl, title, html):
                return Browser.REQUEST_STATUS.timeoutWithContent
            else:
                return Browser.REQUEST_STATUS.timeout
        elif isRefused(html, lastUrl):
            return Browser.REQUEST_STATUS.refused
        elif isInvalidHtml(html):
            return Browser.REQUEST_STATUS.invalid
        elif is404Error(html):
            return Browser.REQUEST_STATUS.error404
        elif crawlingElement["type"] == CRAWLING_ELEMENT_TYPE.uniqueUrl \
        and self.duplicates.isDuplicate(crawlingElement["data"], title, html, self.maxDuplicatePerDomain):
            return Browser.REQUEST_STATUS.duplicate
        else:
            return Browser.REQUEST_STATUS.success
            
    
    def html(self, crawlingElement=None):
        """
            This function return data. Call "get" method instead if you gave a htmlCallback.
        """
        # We convert the url:
        crawlingElement = urlToCrawlingElement(crawlingElement)
        try:
            # Here it's the user who call this method:
            if crawlingElement is not None:
                ok = self.get(crawlingElement)
            # Here if the htmlCallback is not None, it's the get method which call html():
            elif self.htmlCallback is not None:
                crawlingElement = self.currentCrawlingElement
                ok = self.lastGetIsOk
            else:
                logError("You can't be in both scenarios described in the doc.", self)
                exit()
            
            # No we try to get some data:
            (title, html, lastUrl) = self.getDriverData()
            
            # And we get the status:
            status = self.getStatus(ok, crawlingElement, lastUrl, title, html)
    
            # Now we got all data, so we can make the data dict:
            data = \
            {
                "status": status,
                "crawlingElement": crawlingElement,
                "lastUrl": lastUrl,
                "html": html, # theHtml[0:20]
                "title": title,
            }
            
            # And we log informations:
            ip = " "
            if self.proxy is not None:
                ip = " (" + self.proxy["ip"] + ") " 
            logInfo(str(status.name) + " from " + self.name + ip + str(crawlingElement["data"]), self)
            if status == Browser.REQUEST_STATUS.duplicate:
                logInfo(str(title), self)
        except Exception as e:
            logError("Exception location: browser.html()\n" + str(e), self)
            data = \
            {
                "status": Browser.REQUEST_STATUS.exception,
                "crawlingElement": crawlingElement,
                "lastUrl": None,
                "html": None,
                "title": None,
            }
        # Now if we have a callback, we have to throw the data:
        if self.htmlCallback is not None:
            self.htmlCallback(data, self)
        # Or we just return it:
        else:
            return data
        return None

    def getUserAgent(self):
        return self.driver.execute_script("return navigator.userAgent")
    
    def setProxy(self, ip, port=80, user=None, password=None, type="http"):
        self.proxy = {}
        self.proxy["ip"] = ip
        self.proxy["port"] = port
        self.proxy["user"] = user
        self.proxy["password"] = password
        self.proxy["type"] = type
    
    def initDriver(self, retry=True):
        try:
            self.driver = webdriver.PhantomJS(self.phantomjsPath, service_args=self.getPhantomJSServiceArgs())
            self.driver.set_page_load_timeout(self.pageLoadTimeout)
        except Exception as e:
            if retry:
                time.sleep(2)
                self.initDriver(retry=False)
            else:
                logError("This driver can't be init: " + str(e), self)
        
        
    def launch(self, urlList):
        if not isinstance(urlList, list):
            urlList = [urlList]
        if len(urlList) == 1 and (urlList[0] is None or urlList[0] == ""):
            return None
        
        for currentUrl in urlList:
            self.driver.get(currentUrl)
            return self.driver.page_source # TODO delete
    
    def quit(self):
        self.driver.quit()
    
    def getPhantomJSServiceArgs(self):
        if self.proxy is None:
            return None
        params = \
        [
        '--proxy=' + self.proxy["ip"] + ':' + self.proxy["port"],
        '--proxy-type=http',
        '--proxy-auth=' + self.proxy["user"] + ':' + self.proxy["password"],
        '--load-images=no',
        ]
        if not self.loadImages:
            params.append('--load-images=no')
        return params

    def linkedInConnexion(self, user=u"opuire.malaire@tutanota.com", password=u"753êµ$UfD5"):
        """
        # class login-email et login-password find_element_by_class_name
        """
        usernameInput = self.browser.find_element_by_class_name("login-email")
        passwordInput = self.browser.find_element_by_class_name("login-password")
        
        usernameInput.send_keys(user)
        passwordInput.send_keys(password)
        
        self.browser.find_element_by_class_name("submit-button").click()

    def checkProxy(self):
        """
            This method return False if the proxy is not correctly set.
        """
        if self.proxy is None:
            logError("Proxy not correctly set.", self)
            return False
        else:
            webSiteList = \
            [
                "http://fr.geoipview.com",
                # On this web site with a proxy, the page load a lot of "near ip", so it's slow:
                # "http://www.localiser-ip.com",
                "http://www.mon-ip.com",
                "https://www.expressvpn.com/what-is-my-ip",
                "https://www.adresseip.com",
            ]
            
            def getWebSiteIP(url):
                try:
                    data = self.html(url)["html"]
                    ip = re.search("\d+[.]\d+[.]\d+[.]\d+", data).group(0)
                    return ip
                except Exception as e:
#                     logWarning("Ip not found in " + url + " " + str(e), self)
                    return None
            
            self.driver.set_page_load_timeout(self.checkProxyTimeout)
            previousAjaxSleep = self.ajaxSleep
            self.ajaxSleep = 0.0
            ipWhithoutProxy = getIP()
            success = False
            # log("This computer ip is " + ipWhithoutProxy, self)
            for current in webSiteList:
                proxyIP = getWebSiteIP(current)
                if proxyIP is not None:
                    if self.proxy["ip"] != proxyIP:
                        break
                    if proxyIP == ipWhithoutProxy:
                        break
                    success = True
                    break
            self.ajaxSleep = previousAjaxSleep
            self.driver.set_page_load_timeout(self.pageLoadTimeout)
            if success:
                log("Successfully init " + self.name + " with proxy " + proxyIP, self)
                return True
            else:
                logWarning(self.name + " failed to use proxy " + self.proxy["ip"], self)
                return False
    







