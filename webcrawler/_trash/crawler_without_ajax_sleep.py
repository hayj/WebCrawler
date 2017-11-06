# coding: utf-8

from datatools.text import *
from datatools.json import *
from datatools.url import *
from machinelearning.bandit import *
from datastructuretools.setqueue import OrderedSetQueue
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
from threading import Thread, Lock, Semaphore
import math
import numpy
from webcrawler.utils import *
from webcrawler.browser import *
from queue import *

class Crawler:
    """
        The ajaxSleep param for all browser is important : you need to choose
        a long sleep (5 seconds for instance) to allow a full ajax completion
        BUT the Bandit will automatically increase the parallelRequests parameter
        to crawl more urls while some browser are waiting for Ajax. So we don't
        have to care about if there are ajax requests or not because tuhe crawling
        speed will automticaly fit the ajaxSleep param.
    """
    def __init__(\
                    self,
                    startUrls,
                    paramsDomain = \
                    {
                        "proxyInstanciationRate":
                        {
                            # 0.99 will choose all proxies uniformly, it's important to keep this param because
                            # proxies can fall down in the performance classement (mistake) and we will not use
                            # it again...
                            "alpha": [0.0, 0.05, 0.2, 0.5, 0.5, 0.95, 0.99], # [0.0, 0.05, 0.2, 0.5, 0.5, 0.95, 0.99]
                            "beta": [NormalizedLawBeta.LOG, NormalizedLawBeta.EXP]
                        },
                        "browserCount": [100, 150, 200],
                        "parallelRequests": [20, 50, 100, 150],
                    },
                    banditRoundDuration=120, # in seconds
                    verbose=True,
                    logger=None,
                    alreadyCrawledFunct=None, # For example a mongo funct
                    alreadyFailedFunct=None, # For example a mongo funct
                    proxiesPath=None,
                    maxRetryFailed=20, # 20 is a good choice
                    ajaxSleep=1, # > 3.0 for production crawl task, you need to set a lot of browsers
                    pageLoadTimeout=25,
                    browserDurationHistoryCount=60, # The better choice is 60
                    checkProxy=False, # This feature doesn't work
                    queueMinSize=1000, # A good choice is 1000
                    failedUrlCallback=None, # To get failed urls when the crawler stop
                    crawlingCallback=None,
                    browsersVerbose=True,
                    banditVerbose=True,
                    banditParamHistoryCount=30, # Depends on the number of possible params combinason
                    stopCrawlerAfterSeconds=10, # best is 1000
                 ):
        """
            startUrls can be a list, an iterator or a generator
        """
        # Callback and functions:
        self.crawlingCallback = crawlingCallback
        self.failedUrlCallback = failedUrlCallback
        self.alreadyCrawledFunct = alreadyCrawledFunct
        self.alreadyFailedFunct = alreadyFailedFunct
        
        # Memory:
        self.processing = set()
        self.browsers = []
        self.threads = []
        self.alreadyCrawled = set()
        self.failedUrls = dict()
        
        # Others:
        self.proxies = getProxies(proxiesPath)
        self.browserDurationHistoryCount = browserDurationHistoryCount
        self.banditRoundDuration = banditRoundDuration
        self.paramsDomain = paramsDomain
        self.normalizeParamsDomain()
        self.pageLoadTimeout = pageLoadTimeout
        self.ajaxSleep = ajaxSleep
        self.logger = logger
        self.maxRetryFailed = maxRetryFailed        
        self.verbose = verbose
        self.checkProxy = checkProxy
        self.previousParams = None
        self.stopCrawlerAfterSeconds = stopCrawlerAfterSeconds
        self.score = 0
        self.banditVerbose = banditVerbose
        self.paused = False
        self.browsersVerbose = browsersVerbose
        self.initTimer()
        self.initProxiesScores()
        self.tt = None
        self.banditParamHistoryCount = banditParamHistoryCount
        self.bandit = Bandit(paramsDomain=self.paramsDomain, verbose=self.banditVerbose, logger=self.logger, paramHistoryCount=self.banditParamHistoryCount)
        
        # Locks:
        self.lock = Lock() # with self.lock:
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
        
    
    def initTimer(self):
        self.timer = Timer(self.nextBanditRound, self.banditRoundDuration, sleepFirst=True)
    
    def start(self):
        # This call will start the crawling, so we set stopped as False
        self.paused = False
        # Now we can start:
        self.mainThread = Thread(target=self.run)
        self.mainThread.start()
    
    def run(self):
        # Now for each url:
        while True:
            # We add elements to the queue if necessary:
            self.fillQueue()
            # We stop if requested by the user of this class:
            if self.paused:
                break
            else:
#                 # TODO delete
#                 if len(self.failedUrls) > 0:
#                     printLTS(self.failedUrls)
                # We get the next url:
                url = None
                try:
                    # But if there are no url more, we timeout and retry fillQueue:
                    with self.lock:
                        with self.queueLock:
                            # We getthe url:
                            # ici quand je get je dois pas lacher le lock sinon
                            # un thread va appeler filleQueue et ajouter la meme url dans la queue
                            # puisqu'ici on ne l'a toujours pas mise dans self.processing...
                            url = self.queue.get(True, 0.5) 
                            # We add the url in processing:
                            self.processing.add(url)
                            # We None the tt because we got an url:
                            self.tt = None
                except:
                    with self.lock:
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
                                stopperThread = self.stopInThread()
#                                 stopperThread.join()
                # We crawl only if we got an url, otherwise we retry to fill the queue:
                if url is not None:
                    self.crawl(url)
    
    def stopInThread(self):
        stopperThread = Thread(target=self.stop)
        stopperThread.start()
        return stopperThread
        
    def pauseInThread(self):
        pauserThread = Thread(target=self.pause)
        pauserThread.start()
        return pauserThread
    
    def stop(self):
        """
            public function
            The second list returned in failedUrlCallback is urls which failed maxRetryFailed times
            The first one failed < maxRetryFailed : in most case this list is empty. You can start the
            crawler again if you want to 
        """
        self.pause()
        # Here we can display all url which failed:
        if len(self.failedUrls) > 0:
            logWarning("These urls failed:\n" + listToStr(self.failedUrls), self)
        # And we can display url count:
        logInfo(str(len(self.alreadyCrawled)) + " urls were crawled during this session", self)
        # We can add all failed urls in mongodb (an other collection):
        if self.failedUrlCallback is not None:
            urlsFailedEnough = []
            urlsFailedNotEnough = []
            for key, value in self.failedUrls.items():
                if value == self.maxRetryFailed:
                    urlsFailedEnough.append(key)
                else:
                    urlsFailedNotEnough.append(key)
            self.failedUrlCallback(urlsFailedNotEnough, urlsFailedEnough)
    
    def pause(self, display=True):
        """
            TODO test
            public function
        """
#         with self.lock: # lock en conflict avec lock de start et fillQueue
        # We stop the start method:
        self.paused = True
        # And stop the timer:
        self.timer.stop()
        self.initTimer()
        # Finally we join all threads:
        for thread in self.threads:
            thread.join()
        # Finally we join the main thread:
        self.mainThread.join()

    def put(self, url):
        """
            public function
            You can use this function if you want to put new url when receiving html in the callback funct
        """
        # We check if the url is to crawl (not in mongo, arlready crawled or already failed...):
        with self.queueLock:
            if self.isUrlToCrawl(url):
                self.queue.put(url)
    
    def fillQueue(self):
        with self.lock:
            with self.queueLock:
                queueSize = self.queue.size()
            # If the queue is too small:
            if queueSize < self.queueMinSize:
                # We first add failed urls to the queue:
                # We retry all url which failed:
                for key, value in self.failedUrls.items():
                    # We apply a max failed count and we check if the url is not actually "in retrying":
                    if value < self.maxRetryFailed:
                        # So we add this url to to tryingFailed:
                        self.put(key)
                # Then we add urls from self.startUrls:
                for i in range(self.queueFillCount):
                    try:
                        url = next(self.startUrls)
                        self.put(url)
                    except:
                        break        
            
    def normalizeParamsDomain(self):
        """
            This method will set paramsDomain['browserCount'] to value > max(paramsDomain['parallelRequests'])
        """
        maxRIP = max(self.paramsDomain['parallelRequests'])
        newBrowserCount = []
        for current in self.paramsDomain['browserCount']:
            if current >= maxRIP:
                newBrowserCount.append(current)
        self.paramsDomain['browserCount'] = newBrowserCount
    
    def initProxiesScores(self):
        # We init allScores to all ip with the timeout duration:
        allScores = {}
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
        
        # First we reset all scores of browser we just used in this round
        # All others proxies not used at this round will keep previous scores:
        for b in self.browsers:
            if b.durationHistory is not None:
                if len(removeNone(list(b.durationHistory))) > 0:
                    self.proxiesScores[b.getProxy()["ip"]] = [0.0]
        # Then we update score according to already used browsers (several browser per proxy):
        for b in self.browsers:
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


    def getProxyInstanciation(self, params, correctRound=True, display=False):
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
            for key, value in instanciation:
                strLarge = str(key)
#                 strLarge = str(0)
                for i in range(value):
                    strLarge += "-"
                print(strLarge)
#                 print(noChanceMemoryDict[key])
                u += 1
             
            somme = 0
             
            for key, value in instanciation:
                somme += value
            if somme < browserCount:
                print(alpha)
                print(somme)
            print("proxyInstanciationRate=" + str(proxyInstanciationRate))
#             print("browserCount=" + str(browserCount))
#             print("somme=" + str(somme))
            print("\n\n")
        
        instanciation = tuplesToDict(instanciation)
        return instanciation
        

    def isUrlToCrawl(self, url):
        """
            The caller have to lock
        """
        # If the url is in mongo db, we don't crawl it again:
        if self.alreadyCrawledFunct is not None:
            if self.alreadyCrawledFunct(url):
                return False
        if self.alreadyFailedFunct is not None:
            if self.alreadyFailedFunct(url):
                return False
        # Or if the url is currently in processing, we don't add it:
        if url in self.processing:
            return False
        # Or if this url is already crawled in the current session, we don't crawl it agani:
        if url in self.alreadyCrawled:
            return False
        return True
    
    def addBrowser(self, proxyIp):
        # We find the right proxy:
        theProxy = None
        if isinstance(proxyIp, dict):
            theProxy = proxyIp
        else:
            for current in self.proxies:
                if current["ip"] == proxyIp:
                    theProxy = current
                    break
        if theProxy is None:
            logError("Thie proxy " + str(proxyIp) + " doesn't exist!")
            exit()
        # Then we create the browser:
        b = Browser(proxy=theProxy,
                    pageLoadTimeout=self.pageLoadTimeout,
                    ajaxSleep=self.ajaxSleep,
                    durationHistoryCount=self.browserDurationHistoryCount,
                    verbose=self.browsersVerbose,
                    logger=self.logger)
        if self.checkProxy:
            if not b.checkProxy():
                return False
        if b.driver is not None:
            self.browsers.append(b)
        return True
    
    def nextBanditRound(self):
        # We have to pause the thread because some threads can remains and lock
        # We do this only if we are runnning, i.e.:
        alreadyPaused = False
        if self.mainThread is not None:
            if self.paused:
                alreadyPaused = True
            pauserThread = self.pauseInThread()
            pauserThread.join()
        with self.lock:
            # First we have the overall score
            # Warning, the score of a browser is the mean of all requests duration in the history
            # The score of the current param is the number of succeeded requests
            # Now we get next params given by the bandit, we give the current so he can retains
            # that the previous params succed to this score:
            if self.previousParams is None:
                newParams = self.bandit.nextParams()
            else:
                newParams = self.bandit.nextParams(self.score)
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
                self.parallelSemaphore = Semaphore(newParams["parallelRequests"])
                # Now we instanciate all browsers:
                proxiesInstanciation = self.getProxyInstanciation(newParams)
                self.browsers = []
                instanciationThreads = []
                # We define a function which take a list of thread and launch it, the wait all:
                def launchAllThread(currentInstanciationThreads):
                    for current in currentInstanciationThreads:
                        current.start()
                    for current in currentInstanciationThreads:
                        current.join()
                
                # While we still have browsers :
                parallelBrowserInit = newParams["parallelRequests"]
                if not self.checkProxy:
                    parallelBrowserInit = newParams["browserCount"]
                while len(proxiesInstanciation) > 0:
                    # We get the first browser we found in proxiesInstanciation:
                    currentInstan = dictFirstElement(proxiesInstanciation)
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
            
            # Here the timer send us a request to get new params
            # So we paused the crawler to apply these new params and init browsers etc
            # BUT if the crawler was already paused, we don't have to re-run it...
            if not alreadyPaused:
                # We start the timer which will call the nextBanditRound method again:
                self.timer.start()
                # Finally we restart the crawler:
                self.start()




# Attention, les règles à respecter pour les locks : ne jamais imbriquer lock1 dans lock2 alors que c'est l'inverse autre part dans le code.
# Toujours vérifier que le code qui doit etre parallélisé ne lock rien (typiquement le download)
# Sinon ça ne produit rien de parralèle au final
# toujours regarder la fin d'un with: on doit sortir sans avoir executer de code long.
# Si on a du code long il faut lancer des thread à la fin du with pour que le lock soit libéré


    def crawl(self, url):
        """
            Private method
        """
        # We take authorization to launch a new thread:
        self.parallelSemaphore.acquire()
        # Then we take a random browser:
        with self.lock:
            # If the browser list is empty, it is a bad design of the code...
            if not (len(self.browsers) > 0):
                logError("self.browsers is empty!", self)
                exit()
            random.shuffle(self.browsers) # in place
            aRandomBrowser = self.browsers.pop()
            if aRandomBrowser is None:
                logError("The start method can't take a random browsers in self.browsers list!", self)
                exit()
            # Now we start a new thread which have to call html
            # The callback have to release the semaphore and add a point to score if the request suceeded
            # Then this callback also have to store the result in mongodb (with mongodbLock)
            # add the url in self.alreadyCrawled...
            theThread = Thread(target=self.threadedCrawl, args=(url, aRandomBrowser,))
            # Now we add the url directly in the run method:
#             # We add the url in processing:
#             self.processing.add(url)
            # We add the thread:
            theThread.start()
            self.threads.append(theThread)

    
    def threadedCrawl(self, url, browser):
        """
            Private method
        """
        data = browser.html(url) # Here this will be executed in parralel, so we don't lock anything
        # Now we got the data, we lock browsers:
        with self.lock:
            # First we remove the crawled url from processing:
            self.processing.remove(url)
            # Then we process data:
            if data is not None:
                # And if we got html:
                if data["status"] == Browser.REQUEST_STATUS.error404 or \
                    data["status"] == Browser.REQUEST_STATUS.success:
                    # If this was a previous failed url, we remove it
                    self.failedUrls.pop(url, None)
                    # Now we add the url in alreadyCrawled to not crawl it again in this session:
                    self.alreadyCrawled.add(data["url"])
                    # And finally we store this data in mongodb:
                    self.storeData(data)
                    # The request succeded so we add a point:
                    self.score += 1
                elif data["status"] == Browser.REQUEST_STATUS.timeout or \
                     data["status"] == Browser.REQUEST_STATUS.refused:
                    # Here the crawling failed: 
                    # So if the url failed the first time, we add it in failedUrls:
                    if not data["url"] in self.failedUrls:
                        self.failedUrls[data["url"]] = 1
                    # Else we inc the counter:
                    else:
                        self.failedUrls[data["url"]] += 1
                else:
                    logError("No status found!", self)
                    exit()
            else:
                logError("Data is None!", self)
                exit()
            # Now all is finished with this browser, so we can re-add it in the list:
            self.browsers.append(browser)
        # Finally we release semaphore:
        self.parallelSemaphore.release()
        # Finally we fill the queue:
        # Here we don't need to call fillQueue because we timeout the get method of the queue in "run"
#         self.fillQueue()
                
    
    def storeData(self, data):
        """
            Private method
            This method is called by threadedCrawl. So don't lock...
        """
        # TODO delete:
        global countGlobal
        if data["html"] is not None:
            data["html"] = data["html"][0:30]
        countGlobal += 1
#         print(countGlobal)
        # We send data to the callback:
        self.crawlingCallback(data)

countGlobal = 0


def funct1(data):
    pass
def funct2(urlsFailedNotEnough, urlsFailedEnough):
    print("urlsFailedNotEnough:")
    printLTS(urlsFailedNotEnough)
    print("urlsFailedEnough:")
    printLTS(urlsFailedEnough)

if __name__ == '__main__':
    mb = Crawler \
    (
        generateAjaxRandomURLs(400),
        paramsDomain = \
        {
            "proxyInstanciationRate":
            {
                "alpha": [0.02, 0.5, 0.99],
                "beta": [NormalizedLawBeta.EXP]
            },
            "browserCount": [50],
            "parallelRequests": [50, 1, 2, 3], # [2, 3, 4, 5, 6, 50]
        },
        pageLoadTimeout=1.8,
        crawlingCallback=funct1,
        failedUrlCallback=funct2,
        browsersVerbose=True,
        banditRoundDuration=10,
        queueMinSize=30,
        maxRetryFailed=20,
        ajaxSleep=20,
    )
    
    mb.start()
    
    
    
    
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


    
    
    



