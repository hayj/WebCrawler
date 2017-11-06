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
from twitterarchiveorg.utils import *

def itemTest():
    
    # Ici on iter dans la base ded onnée mongo et on regarde si
    # certains elements sont des items
    
    if isHostname("datasc"):
        host = "localhost"
    else:
        host = "212.129.44.40"
    taonewsCollection = MongoCollection \
    (
        "crawling",
        "taonews",
        user="student",
        password="CScas21ù",
        host=host,
        databaseRoot="crawling",
    )
    
    itemHandler = ItemHandler()
    
    toWatch = [10, 11, 12, 13, 23, 102]
    i = 0
    for current in taonewsCollection.find():
        if i in toWatch:
            print("This scrap is an item ?")
            print(current["title"])
            print(current["status"])
            print(current["expanded_url"])
            print(current["scrap"]["boilerpipe"]["text"])
            thisIsAnItem = itemHandler.isItem(current["expanded_url"])
            print(thisIsAnItem)
            print("\n" * 5)
        if i > toWatch[-1]:
            break
        i += 1

    input("APPUYER SUR ENTREE")
    
    # ICI on va itérer sur tous les tweets et on regarde lesquels ont des items
    
    doShuffle = False
    dataPattern = "/home/hayj/Data/TwitterArchiveOrg/Converted2/*.bz2"
    # On prend tous les fichiers du dataset :
    # Peut-être bientot Converted3 !!!!
    allFiles = sortedGlob(dataPattern)
    # On mélange :
    if doShuffle:
        random.shuffle(allFiles)
    # On les met dans un JsonReader :
    jr = JsonReader(allFiles)
    # On iter sur tous les objets :
    i = 0
    iMax = 5
    for current in jr:
        printLTS(current) # Cette fonction permet de faire un beautiful print
        if itemHandler.hasItem(current):
            print(itemHandler.getItems(current))
            i += 1
            input("APPUYER SUR ENTREE")
            if i > iMax:
                break

if __name__ == '__main__':
    itemTest()
