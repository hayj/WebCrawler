# coding: utf-8

from webcrawler.browser import *
from threading import *

def beforeAjaxSleepCallback(browser):
    print("I'm scrolling before sleeping!!!")
    browser.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
def afterAjaxSleepCallback(browser):
    print("I'm scrolling after sleeping!!!")
    browser.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

def htmlCallback(data, browser):
    printLTS(data)

def test1(url):
    b = Browser(htmlCallback=htmlCallback, **browserParams)
    b.get(url)
    
def test2(url):
    b = Browser(**browserParams)
    data = b.html(url)
    printLTS(data)

def threadedCall(url):
    test2(url)

browserParams = \
{
    "ajaxSleep": 0.0,
    "beforeAjaxSleepCallback": beforeAjaxSleepCallback,
    "afterAjaxSleepCallback": afterAjaxSleepCallback,
}

if __name__ == '__main__':
    urls = \
    [
        "http://localhost/testajax/demo.php?id=ANYNV7U65T-15089318960699472#page1",
        "http://localhost/testajax/demo.php?id=ANYNV7U5T-15089318960699472#page1",
        "http://localhost/testajax/demo.php?id=ANYV765T-15089318960699472#page1",
        "http://localhost/testajax/demo.php?id=ANYNV65T-150893960699472#page1",
        "http://localhost/testajax/demo.php?id=ANNV7U6T-150893189699472#page1",
        "http://localhost/testajax/demo.php?id=ANNV7U6T-1508930699472#page1",
        "http://localhost/testajax/demo.php?id=ANNV7U6T-150893160699472#page1",
        "http://localhost/testajax/demo.php?id=ANNV7U6T-15089318960699472#page1",
        "http://localhost/testajax/demo.php?id=ANNV7U6T-0893896069472#page1",
        "http://localhost/testajax/demo.php?id=ANNV7U6T-150318960699472#page1",
    ]
    allThreads = []
    for url in urls:
        thread = Thread(target=threadedCall, args=(url,))
        thread.start()
        allThreads.append(thread)
    
    
    for currentThread in allThreads:
        currentThread.join()
    
    print("END")
        
        














