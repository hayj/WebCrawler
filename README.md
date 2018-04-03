# WebCrawler

The `WebCrawler` class


## Installation (Python 3)

	git clone https://github.com/hayj/WebCrawler.git
	pip install ./WebCrawler/wm-dist/*.tar.gz

## Features

 * Use concurrency to request web pages in parallel.
 * Easy usage through callback functions (for events when the page is loaded, when an url failed...)
 * Auto page checking (take care of pages duplicates (with [`DomainDuplicate`](https://github.com/hayj/DomainDuplicate)) across pages of a same domain to detect "captcha pages" or invalid pages). It exploit all features of the [`WebBrowser`](https://github.com/hayj/WebBrowser) library.
 * Exploit *Selenium* (instead of `requests` for most crawler libraries like [Scrapy](https://scrapy.org/)). It makes it slower but we can execute javascript and use all *Selenium* features. *Chrome* and *PhantomJS* are both compatible.
 * Exploit also `requests` but normalize the generated data with the [`WebBrowser`](https://github.com/hayj/WebBrowser) library.
 * Allows the use of several proxies.
 * Real time proxies scoring and selection.
 * Retry failed URLs a number of times.
 * Randomize the browser header and window size according to the used proxy.
 * Use the [`Multi-armed bandit`](https://en.wikipedia.org/wiki/Multi-armed_bandit) to automatically adjusts the settings.
 * Automatically kill dead Selenium process on Linux (Selenium is sometimes unstable).


## Disadvantages of classic crawling libraries

Some libraries ([Scrapy](https://scrapy.org/)) do Crawling well but doesn't exploit Selenium (or you need to [requests 2 times](https://stackoverflow.com/questions/17975471/selenium-with-scrapy-for-dynamic-page)). You can not easily [exploit multiple proxies](https://stackoverflow.com/questions/4710483/scrapy-and-proxies). And moreover it's most often not "callback" oriented but "inheritance" oriented which can be hard to separate your scrapinp / indexing code from the crawler library.


## Usage

	>>> from webcrawler.crawler import *
	>>> crawler = Crawler(["https://github.com/hayj/WebCrawler"],
					crawlingCallback=crawlingCallback)
	>>> crawler.start()


## Callbacks

Each callback functions has to be passed in init parameters like we saw above.

**crawlingCallback**: This is the main callback, you receive crawled data and the browser (which can be a [hjwebbrowser.httpbrowser.Browser](https://github.com/hayj/WebBrowser/blob/master/hjwebbrowser/browser.py) or a [hjwebbrowser.httpbrowser.HTTPBrowser](https://github.com/hayj/WebBrowser/blob/master/hjwebbrowser/httpbrowser.py)) at end of *Ajax sleep* after a page was loaded. See [WebBrowser](https://github.com/hayj/WebBrowser/) for more informations about `REQUEST_STATUS` and `data`:

	def crawlingCallback(data, browser=None):
		global logger
		try:
			url = data["html"]
			status = data["status"]
			# If the request succeeded, we store it in a database:
			if status in [REQUEST_STATUS.success,
							REQUEST_STATUS.timeoutWithContent]:
				addToTheDatabaserawl(data)
			# Else if the request succeeded but we got a 404:
			elif status in [REQUEST_STATUS.error404]:
				logError(url + " is a 404...", logger)
		except Exception as e:
			logException(e, logger, location="crawlingCallback")

**failedCallback**: In this callback, we receive data from failed urls (`REQUEST_STATUS.<timeout|refused|duplicate|invalid|exception>`). In this example, we use a `SerializableDict` from [DataStructureTools](https://github.com/hayj/DataStructureTools) to retain all failed urls so you can synchronize failed urls accross several servers via MongoDB (see `alreadyFailedFunct` below):

	failsSD = None
	def failedCallback(data):
		global failsSD
		global logger
		# We init the SD with a MongoDB on the localhost (set user, password and host):
		if failsSD is None:
			failsSD = SerializableDict("newscrawlfails", useMongodb=True)
		try:
			# We get the url:
			url = data["url"]
			if failsSD.has(url):
				failsSD[url] += 1
			else:
				failsSD[url] = 1
		except Exception as e:
			logException(e, logger, location="failedCallback")

**alreadyFailedFunct**: This function take a `CrawlingElement` (the url) and return True if url failed enough (i.e. you don't want to retry it):

	def alreadyFailedFunct(crawlingElement):
		global logger
		try:
			url = crawlingElement.data
			if failsSD.has(url) and failsSD[url] > crawler.maxRetryFailed:
				log("Failed enough in failsSD: " + url, logger)
				return True
		except Exception as e:
			logException(e, logger, location="alreadyFailedFunct")
		return False

**alreadyCrawledFunct**: This function works the same but you have to return `True` in the case you already downloaded this url. For example, you can check if the url exists in the database:


	def alreadyCrawledFunct(crawlingElement):
		global logger
		try:
			url = crawlingElement.data
			if crawlingDatabaseHas(url):
				log("This data of this url is already in the database: " + url, logger)
				return True
		except Exception as e:
			logException(e, logger, location="alreadyCrawledFunct")
		return False


**terminatedCallback**: In this function you receive url that have failed enough in `urlsFailedEnough` and those which don't failed enough in `urlsFailedNotEnough` in the case you stopped the crawler:

	def terminatedCallback(urlsFailedNotEnough, urlsFailedEnough):
		global logger
		for text, currentFailed in [("urlsFailedNotEnough", urlsFailedNotEnough),
									("urlsFailedEnough", urlsFailedEnough)]:
			currentFailedText = ""
			for current in currentFailed:
				currentFailedText += str(current.data) + "\n"
			logInfo(text + ":\n" + currentFailedText, logger)

## Main init parameters:

 * **startUrls**: The first param is mandatory, it is a list of urls, or a generator (i.e. a function which yield urls) / iterator. Duplicates urls will automatically be skipped.
 * **useHTTPBrowser**: Indicate the usage of an [hjwebbrowser.httpbrowser.HTTPBrowser](https://github.com/hayj/WebBrowser/blob/master/hjwebbrowser/httpbrowser.py). If set as `False` (default), the crawler will use a [hjwebbrowser.httpbrowser.Browser](https://github.com/hayj/WebBrowser/blob/master/hjwebbrowser/browser.py).
 * **httpBrowserParams**: This is a dict of args for [hjwebbrowser.httpbrowser.HTTPBrowser](https://github.com/hayj/WebBrowser/blob/master/hjwebbrowser/httpbrowser.py).
 * **maxRetryFailed**: The meximum number of retries the crawler has to do for failed urls.
 * **banditRoundDuration**: The duration of a round for the bandit. At each round, the bandit will choose new params (explore or exploit).
 * **proxies**: A list of proxies. See [WebBrowser](https://github.com/hayj/WebBrowser/) for more information, section *Proxies*.
 * **browsersDriverType**: Default is `DRIVER_TYPE.chrome`, see [WebBrowser](https://github.com/hayj/WebBrowser/) for more information (don't forget to set *Chrome* and *PhantomJS* driver in the `PATH` env var). Prefer *PhantomJS* to crawl with a lot of parallel browsers, it take less CPU, but is deprecated (it works with `selenium==3.8.0` and `phantomjs==2.1.1`).
 * **browsersHeadless**: Boolean, choose headless or not for the Chrome driver.


## Multi-armed bandit parameters:

You have to set the *multi-armed bandit* parameters in 3 parameters so the bandit can optimize these parameters for the crawler. It will explore random parameters and exploit best parameters in most cases. Each param has to be a list of values (for the bandit to choose):

	alpha=[0.99],
	parallelRequests=[5, 20, 50],
	browserCount=[50, 100],

 * **alpha**: Is a number between 0.0 and 1.0 which determine the proxy pattern allocation. If near to 0.0, it will allocate only best proxies to all browsers, if near to 1.0, it will allocate uniformly all proxies to all browser, you will see the allocation in logs at each *multi-armed bandit* round.
 * **parallelRequests**: The number of parallel for the bandit to choose
 * **browserCount**: The number of browsers for the bandit to choose (must be greater than *parallelRequests*)

## Time init parameters

You can adjust the duration of certain events, all in seconds:

 * **ajaxSleep**: The duration to sleep when the page is loaded. It allow to wait for Ajax elements to appear.
 * **pageLoadTimeout**: The timeout duration for each page load
 * **firstRequestSleepMin and firstRequestSleepMax**: The sleep duration of the first request of a Browser (a random value between min and max). It is useful to do not send a lot of requests in parallel when the crawler starts.
 * **allRequestsSleepMin and allRequestsSleepMax**: The same but for all requests.

## Others parameters

 * **browserMaxDuplicatePerDomain**: See [DomainDuplicate](https://github.com/hayj/DomainDuplicate)) for more information.
 * **allowRestartTor**: if set as `True`, the crawling is authorized to restart Tor services for [hjwebbrowser.httpbrowser.HTTPBrowser](https://github.com/hayj/WebBrowser/blob/master/hjwebbrowser/httpbrowser.py).
 * **sameBrowsersParallelRequestsCount**: If set as `True`, the crawler is not authorized to set different number of parallel requests vs parallel browsers in activity. You can use this if you set *useHTTPBrowser* as `True`. See the *Ajax sleep is not a bottleneck* section for more information.
 * **loadImages**: Boolean.
 * **useProxies**: Default is `True`. Set it as `False` if you don't want to use proxies even you  gave ones in *proxies*.
 * **stopCrawlerAfterSeconds**: To stop the crawler the crawler after n seconds if he didn't receive other urls from the url generator.
 * **queueMinSize**: The number of urls from *stratUrls* to keep in the queue (default 1000).
 * **banditExploreRate**: The bandit exploration rate (default `0.2`). The first 30 requests, the bandit will explore.
 * **browserUseFastError404Detection**: Set it as `True` if you don't want to use [404Detector](https://github.com/hayj/404Detector) to speed up treatment.
 * **logger**: A logger from `systemtools.logger` (see [SystemTools](https://github.com/hayj/SystemTools)).
 * **verbose**: To set the verbose (`True` or `False`).

## Ajax sleep is not a bottleneck

We consider 3 bottleneck:

 * The proxy bandwidth: so we automatically select best proxies at each *multi-armed bandit* round
 * Your computer bandwidth: so the *multi-armed bandit* will adjust the number of parallel requests and other parameters

But we consider an *Ajax sleep* (when we wait for *Ajax* loading when a page was loaded) not to be a bottleneck. The main advantage of this hypothesis (which is right in most cases because you sometimes have no *Ajax* load, or it's a lot less bandwidth consumer) is that an *Ajax sleep* do not reduce the total amount of actual parallel requests (total amount of parallel requests != total amount of parallel browser in activity).

## CrawlingElement

This class handle elements to crawl, basically URLs, but also piped messages (beta). To access the url, you have to get `ceInstance.data` like in the `alreadyFailedFunct` example.

## Others callbacks

 * **beforeAjaxSleepCallback and afterAjaxSleepCallback**: See `hjwebbrowser.browser.Browser` from [WebBrowser](https://github.com/hayj/WebBrowser/) for more information.
 * **pipCallback**: This callback is useful to use piped Browser when your returned values in *crawlingCallback*. It allow you to keep a browser across multiple pages. It is actually in beta. With piped browser you can also set *notUniqueUrlsGetter* to give not unique url (for example in the case you start on a "search page" and you want to continue browsing, or when you want to log in...
 * **beforeGetCallback**: Receive the browser, do something with it before the `get` of the url.

## Others

 * You can integrate [`HoneypotDetector`](https://github.com/hayj/HoneypotDetector) in your crawler.

## Complete example

