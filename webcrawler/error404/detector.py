# coding: utf-8

import pymongo
from databasetools.mongo import *
from systemtools.file import *
from systemtools.location import *
from systemtools.basics import *
from webcrawler.utils import *
import sh
from webcrawler.error404.urls import *

def annotAll():
    global urlError404
    global urlNotError404
    notFinished = False
    print(len(list(collection.find({"status": "error404"}))))
    for current in collection.find({"status": "error404"}):
        url = current["expanded_url"]
        if url not in urlError404 and url not in urlNotError404:
            print(url)
            print(len(current["scrap"]["boilerpipe"]["text"]))
            print(current["scrap"]["boilerpipe"]["text"])
            path = strToTmpFile(current["html"], ext="html")
            sh.firefox(path)
            answer = input()
            if answer == "y":
                urlError404.append(url)
            elif answer == "n":
                urlNotError404.append(url)
            else:
                notFinished = True
                break
    if notFinished:
        print("notFinished")
    print("error404")
    print(urlError404)
    print("noError404")
    print(urlNotError404)

def test():
    urls = \
    [
        "http://www.nytimes.com/2016/12/24/world/asia/pakistan-israel-khawaja-asif-fake-news-nuclear.html",
        "http://www.latimes.com/la-pol-ca-essential-politics-updates-sen-elect-kamala-harris-picks-her-1482848666-htmlstory.html?utm_source=dlvr.it&utm_medium=twitter",
        "https://www.rt.com/document/58625f3fc3618821668b45a6/amp",
        "http://www.city-journal.org/html/ferguson-effect-lives-14919.html",
    ]
    
    for current in urls:
        for data in collection.find({"expanded_url": current}):
            globRemove(tmpDir() + "/*")
            strToTmpFile(data["scrap"]["boilerpipe"]["text"], ext="txt")
            strToTmpFile(data["html"], ext="html")
            strToTmpFile(data["title"], ext="txt")
            input()

def indiatimes():
    for current in collection.find():
        if "indiatimes.com" in current["expanded_url"] \
        or "indiatimes.com" in current["last_url"]:
            print(current["expanded_url"])
            print(current["last_url"])
            print(current["title"])
            print(current["status"])

def cnn():
    for current in collection.find():
        if "cnn" in current["expanded_url"] \
        or "cnn" in current["last_url"]:
            print(current["expanded_url"])
            print(current["last_url"])
            print(current["title"])
            print(current["status"])

if __name__ == '__main__':
    collection = MongoCollection \
    (
        "crawling",
        "taonews",
        password="K5Tv9G4191IfapG327Pnd6ft8IE49Igamv",
        user="hayj",
        host="212.129.44.40",
    )
    
    cnn()