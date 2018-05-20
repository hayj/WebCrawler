# coding: utf-8

from systemtools.basics import *
from datatools.jsonreader import *
from datatools.url import *
from machinelearning.bandit import *
from datastructuretools.setqueue import *
from machinelearning.function import *
from datatools.csvreader import *
from systemtools.basics import *
from systemtools import duration
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
from hjwebbrowser.utils import *
from hjwebbrowser.browser import *
from hjwebbrowser.httpbrowser import *
from hjwebbrowser.tor import *
from queue import *
import gc



class Crawler:
    """
        The ajaxSleep param for all browser is important : you need to choose
        a long sleep (5 seconds for instance) to allow a full ajax completion
        BUT the Bandit will automatically increase the parallelRequests parameter
        to crawl more urls while some browser are waiting for Ajax. So we don't
        have to care about if there are ajax requests or not because tuhe crawling
        speed will automticaly fit the ajaxSleep param.
    """
    def __init__\
    (
        self,
        startUrls,
        paramsDomain=None,
        alpha=[0.99],
        beta=[NormalizedLawBeta.LOG],
        parallelRequests=[2, 3],
        browserCount=[5, 8],
        banditRoundDuration=120, # in seconds
        verbose=True,
        logger=None,
        alreadyCrawledFunct=None, # For example a mongo funct
        alreadyFailedFunct=None, # For example a mongo funct
        proxiesPath=None,
        checkProxy=False, # This feature doesn't work
        useProxies=True,
        proxies=None,
        maxRetryFailed=20, # 20 is a good choice
        ajaxSleep=5.0, # > 3.0 for production crawl task, you need to set a lot of browsers
        pageLoadTimeout=25,
        browserDurationHistoryCount=60, # The better choice is 60
        queueMinSize=1000, # A good choice is 1000
        terminatedCallback=None, # To get failed urls when the crawler stop
        crawlingCallback=None,
        browsersVerbose=True,
        browsersDriverType=None,
        browsersHeadless=None,
        browserMaxDuplicatePerDomain=3,
        banditExploreRate=0.2,
        banditVerbose=True,
        banditParamHistoryCount=60, # Depends on the number of possible params combinason
        stopCrawlerAfterSeconds=1000, # best is 1000
        beforeAjaxSleepCallback=None,
        afterAjaxSleepCallback=None,
        failedCallback=None,
        # This callback will, for instance, fill a form and send it,
        # DO NOT catch timeout exception because the browser (which call pipCallback)
        # DO NOT edit the given pipedMessage
        # Will automatically handle this case.
        pipCallback=None,
        notUniqueUrlsGetter=None,
        mainThreadTimeInterval=0.5,
        loadImages=True,
        phantomjsKillPattern=".*phantomjs.*octopeek.*",
        chromeKillPattern=".*chrome.*",
        sameBrowsersParallelRequestsCount=False,
        beforeGetCallback=None,
        browserUseFastError404Detection=True,
        firstRequestSleepMin=0.0,
        firstRequestSleepMax=5.0,
        allRequestsSleepMin=0.0,
        allRequestsSleepMax=0.0,
        useHTTPBrowser=False,
        allowRestartTor=False,
        deleteCrawlingElement=True,
        httpBrowserParams={},
        browserParams={},
        isInvalidFunct=None,
    ):
        """
            startUrls can be a list, an iterator or a generator
            pipCallback replace the get() function of selenium,
            so you can for example click on an element
            When you click, Selenium wait until the page is loaded !
            You don't need to do this : https://blog.codeship.com/get-selenium-to-wait-for-page-load/
            sameBrowsersParallelRequestsCount: to force the browser count to be the same as the parallel request count
        """
        # We check bandit params:
        if not isinstance(alpha, list):
            alpha = [alpha]
        if not isinstance(beta, list):
            beta = [beta]
        if not isinstance(parallelRequests, list):
            parallelRequests = [parallelRequests]
        if not isinstance(browserCount, list):
            browserCount = [browserCount]

        if sameBrowsersParallelRequestsCount:
            browserCount = parallelRequests

        # We have to remove elements from parallelRequests > max(browserCount)
        maxBrowserCount = max(browserCount)
        newParallelRequests = []
        for current in parallelRequests:
            if current <= maxBrowserCount:
                newParallelRequests.append(current)
        parallelRequests = newParallelRequests
        if len(parallelRequests) == 0:
            parallelRequests = [maxBrowserCount]

        # Domain params:
        if paramsDomain is None:
            paramsDomain = \
            {
                "proxyInstanciationRate":
                {
                    # 0.99 will choose all proxies uniformly, it's important to keep this param because
                    # proxies can fall down in the performance classement (mistake) and we will not use
                    # it again...
                    "alpha": alpha, # [0.0, 0.05, 0.2, 0.5, 0.5, 0.95, 0.99]
                    "beta": beta, # NormalizedLawBeta.EXP
                },
                "browserCount": browserCount,
                "parallelRequests": parallelRequests,
            }

        # Callback and functions:
        self.beforeAjaxSleepCallback = beforeAjaxSleepCallback
        self.afterAjaxSleepCallback = afterAjaxSleepCallback
        self.crawlingCallback = crawlingCallback
        self.terminatedCallback = terminatedCallback
        self.alreadyCrawledFunct = alreadyCrawledFunct
        self.alreadyFailedFunct = alreadyFailedFunct
        self.pipCallback = pipCallback
        self.notUniqueUrlsGetter = notUniqueUrlsGetter
        self.failedCallback = failedCallback
        self.beforeGetCallback = beforeGetCallback
        self.isInvalidFunct = isInvalidFunct

        # Memory:
        self.processing = []
        self.browsers = OrderedSetQueue()
        self.threads = []
        self.alreadyCrawled = set()
        self.failedUrls = dict()
        self.pipedBrowsers = [] # structure [(browser, dict), ...]

        # To start with a delay:
        self.startedBrowsers = SerializableDict(limit=1000)
        self.firstRequestSleepMin = firstRequestSleepMin
        self.firstRequestSleepMax = firstRequestSleepMax
        self.allRequestsSleepMin = allRequestsSleepMin
        self.allRequestsSleepMax = allRequestsSleepMax

        # Proxies:
        self.allowRestartTor = allowRestartTor
        self.useProxies = useProxies
        self.proxies = None
        if self.useProxies:
            if proxies is not None:
                self.proxies = proxies
            elif proxiesPath is not None:
                try:
                    self.proxies = getProxies(proxiesPath)
                except: pass
        if self.useProxies and (self.proxies is None or len(self.proxies) == 0):
            self.useProxies = False
            self.proxies = None

        # For the browser:
        self.browserParams = browserParams
        self.browserParams["isInvalidFunct"] = self.isInvalidFunct
        self.browsersHeadless = browsersHeadless
        self.browsersDriverType = browsersDriverType
        if self.browsersDriverType is None:
            self.browsersDriverType = DRIVER_TYPE.chrome
        self.loadImages = loadImages
        self.checkProxy = checkProxy
        self.browsersVerbose = browsersVerbose
        self.pageLoadTimeout = pageLoadTimeout
        self.ajaxSleep = ajaxSleep
        self.browserUseFastError404Detection = browserUseFastError404Detection

        # If we work with an httpBrowser:
        self.useHTTPBrowser = useHTTPBrowser
        self.httpBrowserParams = httpBrowserParams
        self.httpBrowserParams["isInvalidFunct"] = self.isInvalidFunct

        # Others:
        self.deleteCrawlingElement = deleteCrawlingElement
        self.phantomjsKillPattern = phantomjsKillPattern
        self.chromeKillPattern = chromeKillPattern
        self.mainThreadTimeInterval = mainThreadTimeInterval
        self.browserMaxDuplicatePerDomain = browserMaxDuplicatePerDomain
        self.browserDurationHistoryCount = browserDurationHistoryCount
        self.banditRoundDuration = banditRoundDuration
        self.paramsDomain = paramsDomain
        self.logger = logger
        self.maxRetryFailed = maxRetryFailed
        self.verbose = verbose
        self.previousParams = None
        self.stopCrawlerAfterSeconds = stopCrawlerAfterSeconds
        self.score = 0
        self.banditVerbose = banditVerbose
        self.banditExploreRate = banditExploreRate
        self.paused = False
        self.timer = None
        self.initTimer()
        self.initProxiesScores()

        # For the bandit:
        self.sameBrowsersParallelRequestsCount = sameBrowsersParallelRequestsCount
        self.banditParamHistoryCount = banditParamHistoryCount
        self.bandit = Bandit(paramsDomain=self.paramsDomain,
                             verbose=self.banditVerbose,
                             exploreRate=self.banditExploreRate,
                             logger=self.logger,
                             paramHistoryCount=self.banditParamHistoryCount,
                             paramsChecker=self.banditParamsChecker)

        # For this class:
        self.tt = None
        self.semaphoreCount = paramsDomain["parallelRequests"][0]

        # Locks:
        self.cacheLock = Lock() # with self.cacheLock:
        self.queueLock = Lock() # with self.queueLock:
        self.parallelSemaphore = None

        # For the queue:
        # iter convert a list, a generator or an iterator to an iterator so you can call next(self.startUrls)
        self.startUrls = iter(startUrls)
        # queueMinSize will define an event when the queue be filled:
        self.queueMinSize = queueMinSize
        # And at each event, we fill the queue with:
        self.queueFillCount = self.queueMinSize * 2
        # Finally the queue max size is:
        self.queueMaxSize = self.queueMinSize * 100
        self.queue = OrderedSetQueue(self.queueMaxSize)

        # The main thread:
        self.mainThread = None

        # We init params:
        self.nextBanditRound()

    def banditParamsChecker(self, params):
        if self.sameBrowsersParallelRequestsCount and params["browserCount"] != params["parallelRequests"]:
            return False
        elif params["browserCount"] < params["parallelRequests"]:
            return False
        return True

    def initTimer(self):
#         print("initTimer")
        if self.banditRoundDuration > 0:
            if self.timer is not None:
                self.timer.stop()
            self.timer = duration.Timer(self.nextBanditRound, self.banditRoundDuration, sleepFirst=True)

    def start(self):
#         print("start")
        # This call will start the crawling, so we set stopped as False
        self.paused = False
        # Now we can start:
        self.mainThread = Thread(target=self.run)
        self.mainThread.start()

    def run(self):
#         print("run")
        # Now for each url:
        while True:
            # We add elements to the queue if necessary:
            self.fillQueue()
            # We stop if requested by the user of this class:
            if self.paused:
                break
            else:
                # We get the next url:
                crawlingElement = None
                try:
                    # But if there are no url more, we timeout and retry fillQueue:
                    with self.cacheLock:
                        with self.queueLock:
                            # First we try to get an existing pipedBrowser, it's the priority:
                            if self.hasPipedBrowser():
                                pipedMessage = self.pipedBrowsers[0][1]
                                crawlingElement = CrawlingElement(pipedMessage, type=CrawlingElement.TYPE.pipedMessage)
                            else:
                                # But a piped browser can be in the processing, so we don't get other crawlingElement
                                # which can produce other browsers clones bvcause it can be too much:
                                if len(self.processing) < 1.5 * self.previousParams["browserCount"]:
#                                 if self.pipedMessageInProcessingCount() < self.previousParams["browserCount"]:
#                                 if self.pipedMessageInProcessingCount() < self.previousParams["browserCount"] / 2:
#                                 if len(self.processing) < self.previousParams["browserCount"] / 2:
                                    # Now if all is ok we can get a not unique url (user function):
                                    if self.notUniqueUrlsGetter is not None:
                                        crawlingElement = self.notUniqueUrlsGetter()
                                        if isinstance(crawlingElement, str):
                                            crawlingElement = CrawlingElement(crawlingElement, type=CrawlingElement.TYPE.notUniqueUrl)
                                    # Or we get url from the unique url queue:
                                    if crawlingElement is None:
                                        crawlingElement = self.queue.get(True, self.mainThreadTimeInterval)
                                        crawlingElement = tryUrlToCrawlingElement(crawlingElement)
                                # If we have too much processing, we just sleep to prevent clonage of too much browsers:
                                else:
                                    time.sleep(self.mainThreadTimeInterval)
#                                     pass
                            # Here if we got a crawlingElement, we throw it to the thread crawl
                            # But here we just add the element to processing, we throw it below because we need
                            # to unlock:
                            if crawlingElement is not None:
                                # We add the url in processing:
                                self.processing.append(crawlingElement)
                                # We None the tt because we got an url:
                                self.tt = None
                except Exception as e:
                    if isinstance(e, Empty):
                        pass
                    else:
                        logError("Exception location: Crawler.run():", self)
                        logError(str(e), self)
                    with self.cacheLock:
                        # Here if the user want to stop when we have no url for stopCrawlerAfterSecond
                        # We also have to check if there are url currently in a crawling process:
                        if self.stopCrawlerAfterSeconds is not None \
                            and self.stopCrawlerAfterSeconds > 0 \
                            and len(self.processing) == 0:
                            if self.tt is None:
                                # We init the TicToc to watch if the queue is empty for stopCrawlerAfterSeconds
                                self.tt = TicToc()
                                self.tt.tic(display=False)
                            # We check if the total duration since the first fail is > stopCrawlerAfterSecond and we stop:
                            elif self.tt.toc(display=False) > self.stopCrawlerAfterSeconds:
                                self.tt = None
                                stopperThread = self.stopInThread()
                # We crawl only if we got an url, otherwise we retry to fill the queue:
                if crawlingElement is not None:
                    self.crawl(crawlingElement)

    def pipedMessageInProcessingCount(self):
        count = 0
        for current in self.processing:
            if current.type == CrawlingElement.TYPE.pipedMessage:
                count += 1
        return count

    def stopInThread(self):
#         print("stopInThread")
        stopperThread = Thread(target=self.stop)
        stopperThread.start()
        return stopperThread

    def pauseInThread(self):
#         print("pauseInThread")
        pauserThread = Thread(target=self.pause)
        pauserThread.start()
        return pauserThread

    def stop(self):
        """
            public function
            The second list returned in terminatedCallback is urls which failed maxRetryFailed times
            The first one failed < maxRetryFailed : in most case this list is empty. You can start the
            crawler again if you want to
        """
#         print("stop")
        self.pause()
        # Now we purge and save duplicates:
#         Browser.duplicates.purgeAndSave() # Deprecated
        # Here we can display all url which failed:
#         if len(self.failedUrls) > 0:
#             logWarning("These urls failed:\n" + listToStr(self.failedUrls), self)
        # And we can display url count:
        logInfo(str(len(self.alreadyCrawled)) + " unique urls were crawled during this session", self)
        # We can add all failed urls in mongodb (an other collection):
        if self.terminatedCallback is not None:
            urlsFailedEnough = []
            urlsFailedNotEnough = []
            for key, value in self.failedUrls.items():
                if value == self.maxRetryFailed:
                    urlsFailedEnough.append(key)
                else:
                    urlsFailedNotEnough.append(key)
            self.terminatedCallback(urlsFailedNotEnough, urlsFailedEnough)

    def pause(self, display=True):
        """
            public function
        """
#         print("pause")
#         with self.cacheLock: # cacheLock en conflict avec cacheLock de start et fillQueue
        # We stop the start method:
        self.paused = True
        # And stop the timer:
        if self.timer is not None:
            self.timer.stop()
        self.initTimer()
        # Finally we join all threads:
        for thread in self.threads:
            thread.join()
        self.threads = []
        # Finally we join the main thread:
        self.mainThread.join()

#     def putCrawlingElement(self, crawlingElement):
#         """
#             public function
#             crawlingElement can be an url or a crawlingElement
#             {"data": "<url>", "type": <CRAWLING_ELEMENT_TYPE>}
#         """
#         # We convert the url:
#         crawlingElement = urlToCrawlingElement(crawlingElement)
#         with self.cacheLock:
#             if self.paused:
#                 return False
#             self.put(crawlingElement["data"])
#         return True

    def put(self, crawlingElement):
        """
            You can use this function if you want to put new url when receiving html in the callback funct
        """
        # We convert the url:
        crawlingElement = tryUrlToCrawlingElement(crawlingElement)
#         print("put")
        # We check if the url is to crawl (not in mongo, arlready crawled or already failed...):
        with self.queueLock:
#             print("3>>>>>>>>>>>>>>>>>>>>>> paused: " + str(self.paused))
            if self.isCrawlingElementToCrawl(crawlingElement):
                self.queue.put(crawlingElement)

    def putFail(self, crawlingElement):
        # We convert the url:
        crawlingElement = tryUrlToCrawlingElement(crawlingElement)
        log("We add this url to failedUrls and remove it from alreadyCrawled: " + str(crawlingElement), self)
        with self.queueLock:
            if crawlingElement not in self.failedUrls:
                self.failedUrls[crawlingElement] = 0
            self.failedUrls[crawlingElement] += 1
            # Now we add the url in alreadyCrawled to not crawl it again in this session:
            if crawlingElement in self.alreadyCrawled:
                self.alreadyCrawled.remove(crawlingElement)

    def fillQueue(self):
        log("fillQueue", self)
        log("queueSize: " + str(self.queue.size()), self)
        with self.cacheLock:
            with self.queueLock:
                queueSize = self.queue.size()
                log("queueSize: " + str(queueSize), self)
            # If the queue is too small:
            if queueSize < self.queueMinSize:
                log("a", self)
                # We first add failed urls to the queue:
                # We retry all url which failed:
                for key, value in self.failedUrls.items():
                    # We apply a max failed count and we check if the url is not actually "in retrying":
                    log("b", self)
                    if value < self.maxRetryFailed:
                        log("put", self)
                        # So we add this url to to tryingFailed:
                        self.put(key)
                # Then we add urls from self.startUrls:
                for i in range(self.queueFillCount):
                    log("c", self)
                    try:
                        crawlingElement = next(self.startUrls)
                        crawlingElement = tryUrlToCrawlingElement(crawlingElement)
                        log("d", self)
                        self.put(crawlingElement)
                    except Exception as e:
                        if isinstance(e, StopIteration):
                            log("e", self)
                            pass
                            break
                        else:
                            logException(e, self, location="Crawler.fillQueue()")
#                             logError("Exception location: :", self)
#                             logError(str(e), self)
#                             print(str(type(e)))

#     def normalizeParamsDomain(self):
#         """
#             This method will set paramsDomain['browserCount'] to value > max(paramsDomain['parallelRequests'])
#         """
#         maxRIP = max(self.paramsDomain['parallelRequests'])
#         newBrowserCount = []
#         for current in self.paramsDomain['browserCount']:
#             if current >= maxRIP:
#                 newBrowserCount.append(current)
#         self.paramsDomain['browserCount'] = newBrowserCount

    def initProxiesScores(self):
        # We init allScores to all ip with the timeout duration:
        allScores = {}
        if self.proxies is not None and self.useProxies:
            for current in self.proxies:
                # 0.0 request duration to take this proxy at least one time:
                allScores[current["ip"]] = [0.0]
        self.proxiesScores = allScores

    def getScores(self):
        """
=            This function takes all scores for each proxy ip (2 browsers can have the same ip)
            and average the scre on all durations.
        """
#         random.seed(0)
#         theDict = {}
#         for i in range(100):
#             theDict[getRandomInt(1, 10000)] = getRandomFloat(1.5, 3.0)
#         return theDict

        # We return a fake score if we don't use proxies:
        if not self.useProxies:
            return {"0.0.0.0": 0.0}

        # First we reset all scores of browser we just used in this round
        # All others proxies not used at this round will keep previous scores:
        browserList = queueToList(self.browsers)
        for b in browserList:
            if b.durationHistory is not None:
                if len(removeNone(list(b.durationHistory))) > 0:
                    self.proxiesScores[b.getProxy()["ip"]] = [0.0]
        # Then we update score according to already used browsers (several browser per proxy):
        for b in browserList:
            # We check if the history of this brwoser is None:
            if b.durationHistory is not None:
                # Then we check if there are values in:
                durationHistoryWithoutNone = removeNone(list(b.durationHistory))
                if durationHistoryWithoutNone is not None and len(durationHistoryWithoutNone) > 0:
                    # Then we can update self.proxiesScores:
                    self.proxiesScores[b.getProxy()["ip"]] += durationHistoryWithoutNone
        allScores = {}
        # Finally we compute means of all proxies:
        for ip, scoreList in self.proxiesScores.items():
            if scoreList is not None and len(scoreList) > 0:
                allScores[ip] = sum(scoreList) / len(scoreList)
            else:
                logError("This ip has no score list!", self)
                exit()

        return allScores


    def getProxyInstanciation(self, params, correctRound=True, display=True):
        """
            The instanciation is a list of ip with a number of browser according to his score
            (the mean time duration of requests)
        """
        def instanciationSameOrder(scores, instanciation):
            newInstanciation = []
            if isinstance(instanciation, list):
                instanciation = tuplesToDict(instanciation)
            for ip, score in scores:
                newInstanciation.append((ip, instanciation[ip]))
            return newInstanciation

        if self.proxies is None or not self.useProxies:
            return {}

        # We get params:
        proxyInstanciationRate = params["proxyInstanciationRate"]
        alpha = float(proxyInstanciationRate["alpha"])
        beta = proxyInstanciationRate["beta"]
        browserCount = params["browserCount"]
        # We get scores, min, max...
        scores = self.getScores()
        scores = sortBy(scores, desc=False)
        # We generate the instanciation according to normalizedLaw, normalized numbers
        # for example 0.6, 0.1, 0.1, 0.1, 0.1 which mean the best proxy will have 60% of all
        # browser etc:
        instanciationList = [normalizedLaw(x / len(scores), alpha=alpha, beta=beta) for x in range(len(scores))]
        instanciationList = normalize(instanciationList)
        instanciation = list(scores)
        instanciation = sortBy(instanciation, desc=False)
        noChanceMemory = [] # We use this to retain float number association to correct the browserCount...
        i = 0
        newInstanciation = []
        for ip, score in instanciation:
            rate = instanciationList[i] * browserCount
            noChanceMemory.append((ip, rate))
            newInstanciation.append((ip, round(rate)))
            i += 1
        instanciation = newInstanciation
        # Here we have:
        #  * instanciation which contains ip and a number of browser
        #  * noChanceMemory which contains ip with a number of browser (float value)
        #  * scores which contains ip with each score (lower the score is, better the proxy is)
        # And if we have not the correct sum of browser, we find which element
        # was unlucky : for exemple if an ip have 5.45 browsers, he got 5 browser -> unlucky
        # The same but inverse if we have too much browsers. If
        if correctRound:
            theSum = sum(nbBrowser for ip, nbBrowser in instanciation)
            def getNoChance(noChanceMemory):
                noChance = []
                for ip, instanciationFloat in noChanceMemory:
                    currentNoChance = instanciationFloat - math.floor(instanciationFloat)
                    if currentNoChance < 0.5:
                        currentNoChance += 1.0
                    noChance.append((ip, currentNoChance))
                return noChance
            if theSum == browserCount:
                pass
            elif theSum < browserCount:
                diff = browserCount - theSum
                noChance = getNoChance(noChanceMemory)
                noChance = sortBy(noChance, index=1, desc=True)
                instanciation = tuplesToDict(instanciation)
                for i in range(diff):
                    ip = noChance[i][0]
                    instanciation[ip] += 1
                instanciation = dictToTuples(instanciation)
                instanciation = instanciationSameOrder(scores, instanciation)
            elif theSum > browserCount:
                diff = theSum - browserCount
                noChance = getNoChance(noChanceMemory)
                # The first is the one who had the most luck:
                noChance = sortBy(noChance, index=1, desc=False)
                instanciation = tuplesToDict(instanciation)
                for i in range(diff):
                    ip = noChance[i][0]
                    instanciation[ip] -= 1
                instanciation = dictToTuples(instanciation)
                instanciation = instanciationSameOrder(scores, instanciation)

        if display:
            u = 0
            noChanceMemoryDict = tuplesToDict(noChanceMemory)
            currentScores = self.getScores()
            strLarge = "Proxies instanciation (score (mean duration in seconds), ip, instanciation):\n"
            for key, value in instanciation:
                strLarge += str(int(currentScores[key])) + "\t"
                strLarge += str(key) + "\t"
                for i in range(value):
                    strLarge += "-"
                strLarge += "\n"
                u += 1
            logInfo(strLarge, self)

#             somme = 0
#
#             for key, value in instanciation:
#                 somme += value
#             if somme < browserCount:
#                 print(alpha)
#                 print(somme)
#             logInfo("proxyInstanciationRate=" + str(proxyInstanciationRate), self)
#             print("browserCount=" + str(browserCount))
#             print("somme=" + str(somme))
#             print("\n\n")

        instanciation = tuplesToDict(instanciation)
        return instanciation


    def isCrawlingElementToCrawl(self, crawlingElement):
        """
            The caller have to cacheLock
        """
        if crawlingElement.type != CrawlingElement.TYPE.uniqueUrl:
            return True
        # If the url is in mongo db, we don't crawl it again:
        if self.alreadyCrawledFunct is not None:
            if self.alreadyCrawledFunct(crawlingElement):
                return False
        if self.alreadyFailedFunct is not None:
            if self.alreadyFailedFunct(crawlingElement):
                return False
        # Or if the url is currently in processing, we don't add it:
        if crawlingElement in self.processing:
            return False
        # Or if this url is already crawled in the current session, we don't crawl it agani:
        if crawlingElement in self.alreadyCrawled:
            return False
        return True

    def addBrowser(self, proxyIp):
#         print("addBrowser")
        # We find the right proxy:
        theProxy = None
        if self.useProxies:
            if isinstance(proxyIp, dict):
                theProxy = proxyIp
            else:
                for current in self.proxies:
                    if current["ip"] == proxyIp:
                        theProxy = current
                        break
            if theProxy is None:
                logError("The proxy " + str(proxyIp) + " doesn't exist!", self)
                exit()
        if self.useHTTPBrowser:
            b = HTTPBrowser \
            (
                verbose=self.browsersVerbose,
                logger=self.logger,
                proxy=theProxy,
                pageLoadTimeout=self.pageLoadTimeout,
                htmlCallback=self.htmlCallback,
                maxDuplicatePerDomain=self.browserMaxDuplicatePerDomain,
                durationHistoryCount=self.browserDurationHistoryCount,
                **self.httpBrowserParams,
            )
        else:
            # Then we create the browser:
            b = Browser \
            (
                proxy=theProxy,
                headless=self.browsersHeadless,
                driverType=self.browsersDriverType,
                pageLoadTimeout=self.pageLoadTimeout,
                ajaxSleep=self.ajaxSleep,
                durationHistoryCount=self.browserDurationHistoryCount,
                verbose=self.browsersVerbose,
                logger=self.logger,
                htmlCallback=self.htmlCallback,
                beforeAjaxSleepCallback=self.beforeAjaxSleepCallback,
                afterAjaxSleepCallback=self.afterAjaxSleepCallback,
                maxDuplicatePerDomain=self.browserMaxDuplicatePerDomain,
                loadImages=self.loadImages,
                useFastError404Detection=self.browserUseFastError404Detection,
                **self.browserParams,
            )
            if self.checkProxy:
                if not b.checkProxy():
                    return False
        if b.driver is not None or self.useHTTPBrowser:
            self.browsers.put(b)
        return True

    def closeBrowser(self, b):
        return b.quit()

    def close(self):
        self.resetBrowsers()

    def resetBrowsers(self):
#         print("resetBrowsers")
        allClosed = True
        if self.browsers is not None:
            browsersList = queueToList(self.browsers)
            if browsersList is not None:
                for b in browsersList:
                    currentClosed = self.closeBrowser(b)
                    if not currentClosed:
                        allClosed = False
            self.browsers = OrderedSetQueue()
#         if not allClosed:
        if self.pipCallback is None:
            try:
                if not self.useHTTPBrowser:
                    # Because sometimes a phantomjs can't be stopped, so memory overflow...:
                    sh.pkill("-f", self.phantomjsKillPattern)
                    sh.pkill("-f", self.chromeKillPattern)
            except Exception as e:
                pass
#                 logException(e, self, location="crawler.resetBrowsers()")

    def nextBanditRound(self):
#         print("nextBanditRound")
#         # First we skip this bandit round if a browser is piped:
#         # we don't need to do this because piped browsers are protected in self.pipedBrowsers
#         with self.cacheLock:
#             if self.hasPipedBrowser():
#                 self.score = 0
#                 return
        # We have to pause the thread because some threads can remains and cacheLock
        # We do this only if we are runnning, i.e.:
        alreadyPaused = False
        if self.mainThread is not None:
            if self.paused:
                alreadyPaused = True
            pauserThread = self.pauseInThread()
            pauserThread.join()
#             print("2>>>>>>>>>>>>>>>>>>>>>> paused: " + str(self.paused))
        with self.cacheLock:
            # First we have the overall score
            # Warning, the score of a browser is the mean of all requests duration in the history
            # The score of the current param is the number of succeeded requests
            # Now we get next params given by the bandit, we give the current so he can retains
            # that the previous params succed to this score:
            if self.previousParams is None:
                newParams = self.bandit.nextParams()
#                 while True:
#                     newParams = self.bandit.nextParams()
#                     logInfo("These params are OK:", self)
#                     logInfo(listToStr(newParams), self)
#                     time.sleep(0.5)
            else:
                newParams = self.bandit.nextParams(self.score)
            # We restart the tor service:
            try:
                if torSingletonExists() and self.allowRestartTor:
                    getTorSingleton().restart()
            except Exception as e:
                logException(e, self, location="nextBanditRound")
            # We reset the score for this new round:
            self.score = 0
            # If we have same params, we just continue with same browsers:
            if newParams == self.previousParams:
                # WARNING : here we do not re-instanciate proxies
                # i.e. we do not re-calculate scores of each proxy and
                # do not choose a new instanciation (a new partitionning) of these
                # proxies for each browser...
                pass
            # If this is other params (explore), we reload all:
            else:
                # And we wait all threads finish utl requests:
#                 for currentThread in self.threads:
#                     currentThread.join()
                # We save newParams as previousParams:
                self.previousParams = newParams
                # We first init the parallel semaphore:
                self.parallelSemaphore = BoundedSemaphore(newParams["parallelRequests"])
                # Now we instanciate all browsers:
                proxiesInstanciation = self.getProxyInstanciation(newParams)
                self.resetBrowsers()
#                 if self.mainThread is not None:
#                     time.sleep(1000) # TODO delete
                instanciationThreads = []
                # We define a function which take a list of thread and launch it, the wait all:
                def launchAllThread(currentInstanciationThreads):
                    for current in currentInstanciationThreads:
                        current.start()
                    for current in currentInstanciationThreads:
                        current.join()
                if self.useProxies:
                    # While we still have browsers :
                    parallelBrowserInit = newParams["parallelRequests"]
                    if not self.checkProxy:
                        parallelBrowserInit = newParams["browserCount"]
                    while len(proxiesInstanciation) > 0:
                        # We get the first browser we found in proxiesInstanciation:
                        currentInstan = dictRandomElement(proxiesInstanciation)
                        currentBrowserIp = currentInstan[0]
                        currentBrowserCount = currentInstan[1]
                        # And if the current instanciation row is 0, we pop it and continue the while loop:
                        if currentBrowserCount == 0:
                            proxiesInstanciation.pop(currentBrowserIp)
                        else:
                            # We decrement the browser amount for this ip:
                            proxiesInstanciation[currentBrowserIp] -= 1
                            # Here we create one thread for this browser:
                            theThread = Thread(target=self.addBrowser, args=(currentBrowserIp,))
                            instanciationThreads.append(theThread)
                            # And if we have a number of threads equals to the number of requete in parallel:
                            if len(instanciationThreads) == parallelBrowserInit:
                                # We lanch all and wait:
                                launchAllThread(instanciationThreads)
                                # Then we have to reset the thread list:
                                instanciationThreads = []
                    # Now maybe some threads not started remain, so we have to launch all of them:
                    launchAllThread(instanciationThreads)
                else:
                    for i in range(newParams["browserCount"]):
                        theThread = Thread(target=self.addBrowser, args=(None,))
                        instanciationThreads.append(theThread)
                    instanciationThreadsChunks = chunks(instanciationThreads, cpuCount() * 4)
                    for currentThreads in instanciationThreadsChunks:
                        launchAllThread(currentThreads)

            # Here the we are in the case we first execute nextBanditRound to get
            # first params, so we will start after, we just need to start the timer
            # of the bandit:
            if not alreadyPaused and self.mainThread is None:
                # We start the timer which will call the nextBanditRound method again:
                self.startTimer()
            # Here it's the timer which call nextBanditRound, and we paused before,
            # So we need to restart the crawling and start the timer again,
            # But if the crawler was already paused by a queue timeout, we don't restart it
            elif not alreadyPaused:
                # We start the timer which will call the nextBanditRound method again:
                self.startTimer()
                # Finally we restart the crawler:
                self.start()

    def startTimer(self):
        if self.banditRoundDuration > 0:
            self.timer.start()

    def acquire(self):
#         self.semaphoreCount -= 1
#         print(">>>>>>> Trying to acquire " + str(self.semaphoreCount))
        self.parallelSemaphore.acquire()
#         print(">>>>>>> Acquired ")


    def release(self):
        try:
#         self.semaphoreCount += 1
#         print(">>>>>>> Trying to release " + str(self.semaphoreCount))
            self.parallelSemaphore.release()
#         print(">>>>>>> Released")
        except Exception as e:
            logError("Exception location: crawler.release()\n" + str(e), self)

# Attention, les règles à respecter pour les locks : ne jamais imbriquer lock1 dans lock2 alors que c'est l'inverse autre part dans le code.
# Toujours vérifier que le code qui doit etre parallélisé ne lock rien (typiquement le download)
# Sinon ça ne produit rien de parralèle au final
# toujours regarder la fin d'un with: on doit sortir sans avoir executer de code long.
# Si on a du code long il faut lancer des thread à la fin du with pour que le lock soit libéré


    def crawl(self, crawlingElement):
        """
            Private method
        """
#         print("crawl")
        # We take authorization to launch a new thread:
#         print("tentative d'acquire dans le crawl")
        self.acquire()
        browser = None
        with self.cacheLock:
            if crawlingElement.type == CrawlingElement.TYPE.pipedMessage:
                browser = self.popPipedBrowser(crawlingElement.data)
        # Block here until a brwser is added
        if browser is None:
            browser = self.browsers.get()
#             logInfo("\t==> " + browser.name + " taken! <==", self)


        # Then we take a random browser:
        with self.cacheLock:
            if browser is None:
                logError("The start method can't take a random browsers in self.browsers list!", self)
                exit()
            # Now we start a new thread which have to call html
            # The callback have to release the semaphore and add a point to score if the request suceeded
            # Then this callback also have to store the result in mongodb (with mongodbLock)
            # add the url in self.alreadyCrawled...
            theThread = Thread(target=self.threadedCrawl, args=(crawlingElement, browser,))
            # Now we add the url directly in the run method:
#             # We add the url in processing:
#             self.processing.add(url)
            # We add the thread:
            theThread.start()
            self.threads.append(theThread)

#     def browserCount(self):
#         browserCount = self.browsers.size()
#         for current in self.pipedBrowsers:
#             browserCount += 1


    def threadedCrawl(self, crawlingElement, browser):
        """
            Private method
        """
        # If it is the first time we use this browser,
        # we sleep to not send a lot a request at the same time:
        if browser.name not in self.startedBrowsers or not self.startedBrowsers[browser.name]:
            sleepDuration = randomSleep(self.firstRequestSleepMin, self.firstRequestSleepMax)
            # log(browser.name + " just slept " + str(sleepDuration) + " seconds because it's the first request for this browser.", self)
            self.startedBrowsers[browser.name] = True
        # Then we sleep for each request:
        if self.allRequestsSleepMax > 0.0:
            sleepDuration = randomSleep(self.allRequestsSleepMin, self.allRequestsSleepMax)
            # log(browser.name + " just slept " + str(sleepDuration) + " seconds before requesting " + crawlingElement.toString(), self)

        # First we check if this is a piped browser:
        pipCallback = None
        if crawlingElement.type == CrawlingElement.TYPE.pipedMessage:
            # The we get the pip callback, the user of the class will do some things
            # on the browser instead of a simple get of an url:
            pipCallback = self.pipCallback
        # Here this will be executed in parallel, so we don't cacheLock anything
        if self.beforeGetCallback is not None:
            self.beforeGetCallback(browser)
        ok = browser.get(crawlingElement, pipCallback=pipCallback)
        # Finally we release semaphore:
        self.release()

#     def getPipedBrowser(self, currentCrawlingElement):
#         """
#             The caller have to cacheLock cacheLock
#         """
#         for pipedBrowser, crawlingElement in self.pipedBrowsers:
#             if currentCrawlingElement is crawlingElement:
#                 return pipedBrowser
#         return None

    def hasPipedBrowser(self):
        """
            The caller have to cacheLock cacheLock
        """
        return len(self.pipedBrowsers) > 0

#     def isPipedBrowser(self, browser):
#         """
#             The caller have to cacheLock cacheLock
#         """
#         for pipedBrowser, crawlingElement in self.pipedBrowsers.items():
#             if pipedBrowser is browser:
#                 return True
#         return False

#     def getPipedMessage(self, browser):
#         """
#             The caller have to cacheLock cacheLock
#         """
#         for pipedBrowser, pipedMessage in self.pipedBrowsers:
#             if pipedBrowser is browser:
#                 return pipedMessage
#         return None

#     def popPipedMessage(self, browser):
#         """
#             The caller have to cacheLock cacheLock
#         """
#         newPipedBrowsers = []
#         pipedMessageToReturn = None
#         for pipedBrowser, pipedMessage in self.pipedBrowsers:
#             if pipedBrowser is browser:
#                 pipedMessageToReturn = pipedMessage
#             else:
#                 newPipedBrowsers.append((pipedBrowser, pipedMessage))
#         self.pipedBrowsers = newPipedBrowsers
#         return pipedMessageToReturn

    def popPipedBrowser(self, currentPipedMessage):
        """
            The caller have to cacheLock cacheLock
        """
        newPipedBrowsers = []
        desiredPipedBrowser = None
        for pipedBrowser, pipedMessage in self.pipedBrowsers:
            if pipedMessage is currentPipedMessage:
                desiredPipedBrowser = pipedBrowser
            else:
                newPipedBrowsers.append((pipedBrowser, pipedMessage))
        self.pipedBrowsers = newPipedBrowsers
        return desiredPipedBrowser

    def addPipedBrowser(self, browser, pipedMessage):
        """
            The caller have to cacheLock cacheLock
        """
        if pipedMessage is not None:
            self.pipedBrowsers.append((browser, pipedMessage))

    def removeOneFromProcessing(self, crawlingElement):
        if crawlingElement is not None:
            alreadyPassed = False
            newProcessing = []
            for current in self.processing:
                if not alreadyPassed and crawlingElement is current:
                    alreadyPassed = True
                else:
                    newProcessing.append(current)
            self.processing = newProcessing

    def htmlCallback(self, data, browser):
        """
            Private method
        """
        browserToClone = False
        browserToPut = True
        # Now we got the data, we cacheLock browsers:
        with self.cacheLock:
            # Get the url:
            crawlingElement = data["crawlingElement"]
            status = data["status"]
#             data["crawler"] = browser.getCrawlerName()
            # First we remove the crawled url from processing:
            self.removeOneFromProcessing(crawlingElement)
            # Then we process data:
            if data is not None:
                # And if we got html:
                if status.name in "success error404 timeoutWithContent".split(" "):
                    if crawlingElement.type == CrawlingElement.TYPE.uniqueUrl:
                        # If this was a previous failed url, we remove it
                        self.failedUrls.pop(crawlingElement, None)
                        # Now we add the url in alreadyCrawled to not crawl it again in this session:
                        self.alreadyCrawled.add(crawlingElement)
                    # And finally we store this data in mongodb (for example):
                    try:
                        if self.deleteCrawlingElement and "crawlingElement" in data:
                            del data["crawlingElement"]
                        pipedMessage = self.crawlingCallback(data, browser=browser)
                    except Exception as e:
                        logException(e, self, location="Crawler.htmlCallback")
                        pipedMessage = None

                    # 4 possibilités
                    # 1. On a pas de piped message et ce n'est pas une reprise de pipedMessage
                    #     * On ajoute juste le browser dans la queue
                    # 2. On a un pipedMessage et on en avait un aussi avant
                    #     * On ne l'ajoute pas dans la queue
                    #     * On l'ajoute dans les piped browsers
                    # 3. On a un pipedMessage et on en avait pas avant:
                    #     * On doit cloner le browser et ajouter le clone dans la queue
                    #     * On doit ajouter le browser dans les piped browsers
                    # 4. On a pas de piped message mais on en avait un avant
                    #     * On doit close le browser puisqu'on ne l'utilisera plus
                    #     * On ne l'ajoute pas dans la queue
                    if pipedMessage is None: # 1 and 4
                        if crawlingElement.type != CrawlingElement.TYPE.pipedMessage: # 1
                            browserToClone = False
                            browserToPut = True
                        else: # 4
                            self.closeBrowser(browser)
                            browserToClone = False
                            browserToPut = False
                    else: # 2 and 3
                        if crawlingElement.type != CrawlingElement.TYPE.pipedMessage: # 3
                            browserToClone = True
                            browserToPut = True
                            self.addPipedBrowser(browser, pipedMessage)
                        else: # 2
                            browserToClone = False
                            browserToPut = False
                            self.addPipedBrowser(browser, pipedMessage)
                    # The request succeded so we add a point:
                    if status == REQUEST_STATUS.timeoutWithContent:
                        self.score += 0.8
                    else:
                        self.score += 1
                else:
#                     printLTS(data)
                    if self.failedCallback is not None:
                        if self.deleteCrawlingElement and "crawlingElement" in data:
                            del data["crawlingElement"]
                        self.failedCallback(data)
                    if crawlingElement.type == CrawlingElement.TYPE.uniqueUrl:
                        if self.maxRetryFailed > 0:
                            # Here the crawling failed:
                            # So if the url failed the first time, we add it in failedUrls:
                            if crawlingElement not in self.failedUrls:
                                self.failedUrls[crawlingElement] = 1
                            # Else we inc the counter:
                            else:
                                self.failedUrls[crawlingElement] += 1
                    self.score = self.score - 0.1
#                     if self.score < 0.0:
#                         self.score = 0.0
        # Now all is finished with this browser, so we can re-add it in the list
        # Or it can be a new clone:
        if browserToClone:
            browser = browser.clone()
        if browserToPut:
#             logInfo("\t==> " + browser.name + " released! <==", self)
            self.browsers.put(browser)


def funct1(data):
    pass
def funct2(urlsFailedNotEnough, urlsFailedEnough):
    print("urlsFailedNotEnough:")
    printLTS(urlsFailedNotEnough)
    print("urlsFailedEnough:")
    printLTS(urlsFailedEnough)
    tt.toc()


def printCountThread():
#     for i in range(50):
    print(">>>>>>>>>>>>>>> " + str(active_count()))


if __name__ == '__main__':

    countGlobal = 0

    tt = TicToc()
    tt.tic()

    mb = Crawler \
    (
        generateAjaxRandomURLs(100),
        paramsDomain = \
        {
            "proxyInstanciationRate":
            {
                "alpha": [0.99],
                "beta": [NormalizedLawBeta.EXP]
            },
            "browserCount": [10],
            "parallelRequests": [10], # [2, 3, 4, 5, 6, 50]
        },
        pageLoadTimeout=5.0, # 2.1
        crawlingCallback=funct1,
        terminatedCallback=funct2,
        browsersVerbose=True,
        banditRoundDuration=8,
        stopCrawlerAfterSeconds=5,
        queueMinSize=30,
        maxRetryFailed=2,
        ajaxSleep=2,
        browserMaxDuplicatePerDomain=2,
        useProxies=False,
    )


#     timerCount = Timer(printCountThread, 0.1)
#     timerCount.start()

    mb.start()

    def test():
        print("-------" + str(active_count()))
    timer = Timer(test, 1)
#     timer.start()

    mb.mainThread.join()

#     tt.toc()



# Warning: if a proxy doesn't work, it will doesn't work even on localhost with selenium...



#     time.sleep(40)
#
#     mb.pause()
#
#     time.sleep(3)
#
#     mb.fillQueue()
#
#     mb.start()


#     time.sleep(20)
#     printLTS(mb.browsers[0].getUserAgent())
#     printLTS(mb.browsers[0].getScrapedHeader())


#     allProxies = getProxies()
#     random.shuffle(allProxies)
#     allProxies = allProxies[0:3]
#     for current in allProxies:
#         print(current["ip"])
#         print(mb.addBrowser(current["ip"]))
#     printLTS(mb.browsers)








