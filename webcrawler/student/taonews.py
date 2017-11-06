# coding: utf-8

from datatools.url import *
from datatools.csvreader import *
from systemtools.basics import *
from systemtools.duration import *
from systemtools.file import *
from systemtools.logger import log, logInfo, logWarning, logWarning, logError, Logger
from systemtools.location import *
import random
import re
from databasetools.mongo import *
from twitterarchiveorg.urlgenerator import *

def getOne():
    if isHostname("datasc"):
        host = "localhost"
    else:
        host = "212.129.44.40"
        
    collectionCrawling = MongoCollection \
    (
        "crawling",
        "taonews",
        user="student",
        password="CScas21ù",
        host=host,
        databaseRoot="crawling",
    )

    url = "https://thinkprogress.org/pence-defends-trump-john-lewis-9b66a7a9303a#.w7y6jqtvx"
    print(collectionCrawling.findOne({"expanded_url": url})["scrap"]["boilerpipe"]["text"])
    
    # Si vous utilisez find(<requete>) il faudra utiliser une boucle "for" puisqu'il y a potentiellement plusieurs éléments

def iterOnDatabase():
    if isHostname("datasc"):
        host = "localhost"
    else:
        host = "212.129.44.40"
        
    collectionCrawling = MongoCollection \
    (
        "crawling",
        "taonews",
        user="student",
        password="CScas21ù",
        host=host,
        databaseRoot="crawling",
    )

    print(collectionCrawling.size())
    
    for current in collectionCrawling.find():
        # Le plus important :
        title = current["title"]
        url = current["expanded_url"]
        scrap = current["scrap"]["boilerpipe"]["text"] # Le text scrapé
        
        # Autres :
        status = current["status"]
        lastUrlDomain = current["last_url_domain"]
        expandedUrlDomain = current["expanded_url_domain"]
        html = current["html"]
        
        # Affichage :
        print(url)
        print(title)
        print(scrap)
        input()
        print("\n" * 10)

if __name__ == '__main__':
    getOne()
    iterOnDatabase()
