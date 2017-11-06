# coding: utf-8


from systemtools.basics import *
from datatools.json import *
from datatools.url import *
from datatools.csvreader import *
from systemtools.file import *
from systemtools.location import *
from systemtools.duration import *
from systemtools.system import *
import selenium
from selenium import webdriver
import sh
import random
from docutils.parsers.rst.directives.tables import ListTable
if isHostname("datas"):
    from newstools import *
    from newsscraper import *
    from crawler import *
    from browser import *
else:
    from webcrawler.newstools import *
    from webcrawler.newsscraper import *
    from webcrawler.crawler import *
    from webcrawler.browser import *
    
from twitterarchiveorg.urlgenerator import *
import time



dataPath = "/home/hayj/Data/TwitterArchiveOrg/Converted2/*.bz2"

def executeAll():
    taoUrlGenerator = UrlGenerator(dataPath)
    mongoConnector = MongoConnector()
    multipleCrawler = MultipleCrawler(crawlerCallback=mongoConnector.crawlerCallback)
    multipleCrawler.launch(taoUrlGenerator)    

def test1():
    taoUrlGenerator = UrlGenerator(dataPath)
    i = 0
    for theDict in taoUrlGenerator:
        if i % 5000 == 0:
            print(listToStr(theDict))
            print(getDomainFromUrl(theDict["url"]))
        i += 1
    print(i)

def test2():
    taoUrlGenerator = UrlGenerator(dataPath)
    for theDict in taoUrlGenerator:
        print(theDict)
        input()
        
def test3():
    for current in getAllEnWebsites():
        print(current)
        
        
def test4():
    nuf = NewsURLFilter()
    taoUrlGenerator = UrlGenerator(dataPath)
    falseCount = 0
    trueCount = 0
    for theDict in taoUrlGenerator:
        url = theDict["url"]
        isNews = nuf.isNews(url)
        if isNews:
            print(url)
            print(isNews)
            print()
        if not isNews:
            falseCount += 1
        else:
            trueCount += 1
        if falseCount > 1000:
            break
    print("falseCount=" + str(falseCount))
    print("trueCount=" + str(trueCount))
    print("ratio=" + str(trueCount / (falseCount+trueCount) * 100) + "%")
    
#     falseCount=100001
# trueCount=2972
# ratio=2.8861934681906907
        
def test5():
    pattern="/home/hayj/Dashboard/Notes/Recherche/news-website-list/*goo*.csv"
    allFiles = sortedGlob(pattern)
    urlParser = URLParser()
    for filePath in allFiles:
        cr = CsvReader(filePath)
        for row in cr:
            if  "lang" in row and row["lang"] == "en":
                currentSmartDomain = urlParser.getDomain(row["url"], urlLevel=URLLEVEL.SMART)
                print(currentSmartDomain)

def test6():
    # We remove all previous files:
    tmpDir = getExecDirectory() + "/tmp"
    removeFiles(sortedGlob(tmpDir + "/*.txt"))
    # We get link objects:
    nuf = NewsURLFilter()
    taoUrlGenerator = UrlGenerator(dataPath)
    # Some init:
    start = getRandomInt(0, 1000)
    print(start)
    count = 0
    saw = 0
    # Init a phantomjs :
    proxie = MultipleCrawler.getRandomProxy(getExecDirectory() + "/proxies.txt")
    crawler = Crawler(proxie=proxie)    
    # We iterate over all url starting with "start" count:
    for theDict in taoUrlGenerator:
        if count > start:
            url = theDict["url"]
            isNews = nuf.isNews(url)
            if isNews:
                url = "http://www.bbc.com/news/world-europe-41606943"
                print(url)
                print(isNews)
                # Open in firefox :
                sh.firefox(url)
                # Scrap datas :
                html = crawler.launch(url)
                scraper = Extractor(extractor='ArticleExtractor', html=html)
                scrap = scraper.getText()
                # Create the file :
                fileName = getRandomStr() + ".txt"
                filePath = tmpDir + "/" + fileName
                mkdirIfNotExists(tmpDir)
                strToFile(scrap, filePath)
                # Open in kate :
                sh.gedit(filePath)
                print()
                input()
                saw += 1
        count += 1
        if saw > 50:
            break

def test7():
    # We remove all previous files:
    tmpDir = getExecDirectory() + "/tmp"
    removeFiles(sortedGlob(tmpDir + "/*.html"))
    # Init a phantomjs :
#     proxie = MultipleCrawler.getProxies(getExecDirectory() + "/proxies.txt")[0]
    proxie = MultipleCrawler.getRandomProxy(getExecDirectory() + "/proxies.txt")
#     crawler = Crawler(proxie=proxie)   
    crawler = Crawler()   
    for url in fileToStrList(getExecDirectory() + "/bbcnews.txt"):
        print(url)
        # Open in firefox :
#         sh.firefox(url)
        # Scrap datas :
#         crawler.driver.set_page_load_timeout(1) #  Renvoie une erreur : Screenshot: available via screen
        crawler.driver.implicitly_wait(10)
        html = crawler.driver.get(url)
        for i in range(3):
            html = crawler.driver.page_source
            html = fileToStr(getExecDirectory() + "/bbc-cookie.html")
            scraper = Extractor(extractor='ArticleExtractor', html=html)
            scrap = scraper.getText()
            
            print(scrap)
            letter = input()
            if letter == "y":
                # Create the file :
                fileName = getRandomStr() + ".html"
                filePath = tmpDir + "/" + fileName
                mkdirIfNotExists(tmpDir)
                strToFile(html, filePath)
                # Open in kate :
                sh.kate(filePath)




def test8():
    crawler = Crawler()
    crawler.driver.get("http://localhost/testajax/demo.html#page1")
#     crawler.driver.implicitly_wait(3)
#     crawler.driver.find_element_by_css_selector('div')
    crawler.driver.manage().timeouts().pageLoadTimeout(10);
#     time.sleep(3)
    print(crawler.driver.page_source)

def test9():
    print("Start...")
    crawler = Crawler()
    for i in range(10):
        crawler.driver.get(generateAjaxRandomURL())
#         crawler.driver.manage().timeouts().pageLoadTimeout(10);
#         time.sleep(5)
        print(crawler.driver.page_source)






if __name__ == '__main__':
#     test1()
#     test2()
#     test3()
#     test4()
#     test5()
#     test6()
#     test7()
#     test8()
#     test9()
#     print(list(generateAjaxRandomURLs()))
    
    import time
    from threading import Thread
    
    
    
    
    
    def myfunc1():
        proxiesPath = getExecDirectory(__file__) + "/proxies.txt"
#         proxy = getProxies()[2]
        proxy = getRandomProxy(proxiesPath=proxiesPath)
        b = Browser(pageLoadTimeout=3, proxy=proxy)
        allBrowsers.append(b)
    
    def myfunc2(b):
        tt = TicToc()
        tt.tic(display=False)
        html = b.html("http://www.youporn.com")
        timeDuration = str(tt.tic(display=False)) + "s"
        title = None
        if html is not None:
            ns = NewsScraper(html)
            theDict = ns.scrap()
            theDict = theDict["newspaper"]
            if "title" in theDict:
                title = theDict["title"]
        if html is not None and "Error: 'timeout" not in html and len(html) > 100:
            print(listToStr(\
            {
                "title": title,
                "timeDuration": timeDuration ,
                "message": "OK !!!!!!!",
                "name": b.name,
            }))
        else:
            print(listToStr(\
            {
                "title": title,
                "timeDuration": timeDuration / 1000,
                "message": "NOT OK!",
                "name": b.name,
            }))
    
    allThreads = []
    nbBrowser = 25
    allBrowsers = []
    
    tt1 = TicToc()
    tt1.tic()
    
    for i in range(nbBrowser):
        t = Thread(target=myfunc1)
        t.start()
        allThreads.append(t)
    
    for current in allThreads:
        current.join()
    
    tt1.tic("All browser generated!")
    
    allThreads = []
     
    for b in allBrowsers:
        t = Thread(target=myfunc2, args=(b,))
        t.start()
        allThreads.append(t)

    for current in allThreads:
        current.join()
        
    tt1.tic("All requests done!")
    
    for b in allBrowsers:
        b.quit()
    
    print("END")
    
    
#     print(cr.getUserAgent())
#     print(b.getScrapedHeader())
     
        
    


