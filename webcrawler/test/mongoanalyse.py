# coding: utf-8

########## WORSPACE IN PYTHON PATH ##########
# Include all Paths :
# TODO faire un include de tous les sous dossiers du Workspace en remontant 4 dossiers
# TODO (mettre une variable pour le nombre de dossier a remonter).
# TODO mettre aussi le changement en utf-8
# TODO Et mettre le os.chdir("??") aussi
# TODO Faire une sorte d'entete pour chaque fichier python
# Updated 09/03/17
workspaceName = "WebCrawler" # Set the name of the Workspace in all ancestors folders
onlyInit = False # TODO
import sys
import os
import re
def dirsHasRegex(dirs, regex):
    if not isinstance(dirs, list):
        dirs = [dirs]
    # for all subdirs:
    for currentDir in dirs:
        # We get all files:
        files = getFileNames(currentDir)
        # We check if there .py or __init__.py:
        for fname in files:
            if re.search(regex, fname) is not None:
                return True
    return False

def getFileNames(currentFolder):
    files = [item for item in os.listdir(currentFolder) if os.path.isfile(os.path.join(currentFolder, item))]
    return files

def getSubdirsPaths(currentFolder):
    dirs = [currentFolder + item + "/" for item in os.listdir(currentFolder) if os.path.isdir(os.path.join(currentFolder, item))]
    return dirs

# We get the Workspace dir:
currentFolder = os.path.dirname(os.path.abspath(__file__))
workspace = currentFolder.split(workspaceName)[0] + workspaceName + "/"
# And while there are folders to watch:
penddingFolderList = [workspace]
pathsToAdd = []
while len(penddingFolderList) != 0:
    # We pop the current folder in in the pending queue:
    currentFolder = penddingFolderList.pop(0)
    if not currentFolder.split("/")[-2].startswith("."):
        hasPy = dirsHasRegex(currentFolder, ".py$")
        atLeastOneSubDirHasInit = dirsHasRegex(getSubdirsPaths(currentFolder), "__init__.py")
        # We add it in the path list:
        if hasPy or atLeastOneSubDirHasInit:
            pathsToAdd.append(currentFolder)
        # And We add the subfolders in the pending queue if there is no __init__.py:
        if not atLeastOneSubDirHasInit:
            subDirs = getSubdirsPaths(currentFolder)
            penddingFolderList += subDirs
# We add all paths in the python path:
print(pathsToAdd)
for path in pathsToAdd:
    sys.path.append(path)
#     print path
#############################################




from datatools.json import *
from datatools.url import *
from machinelearning.bandit import *
from datastructuretools.basics import *
from datastructuretools.setqueue import *
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
from threading import Thread, Lock, Semaphore, active_count
import math
import numpy
from webcrawler.crawler import *
from webcrawler.utils import *
from webcrawler.browser import *
from queue import *
from databasetools.mongo import *
from webcrawler.honeypot import *
from databasetools.mongo import *
from webcrawler.newsscraper import *
from datatools.newstools import *
from twitterarchiveorg.urlgenerator import *
from webcrawler.sample import __version__

def displayDatabase():
    print("size=" + str(mongoConnector.collection.size()))
    for current in mongoConnector.collection.find():
        for key, value in current.items():
            print(value)
            print(key)
            input()
    exit()

def displayDatabaseOne():
    print("size=" + str(mongoConnector.collection.size()))
    for current in mongoConnector.collection.find():
        for key, value in current.items():
            print(value)
            print(key)
            input()
        break
    exit()
def deleteTwitterNone():
    noneCount = len(list(mongoConnector.collection.find({"twitter_url": None})))
    print(noneCount)
    mongoConnector.collection.collection.delete_one({"twitter_url": None})
    noneCount = len(list(mongoConnector.collection.find({"twitter_url": None})))
    print(noneCount)
    exit()
def displaySize():
    print("size=" + str(mongoConnector.collection.size()))
    exit()

def resetDb():
    mongoConnector.collection.resetCollection(security=True)
    exit()

def printSize():
    print(collection.size())

def find404(collection):
    url = "https://www.thesun.co.uk/news/2342261/futuristic-warheads-laced-with-diseases-such-as-zika-virus-or-ebola-could-wipe-out-swathes-of-humanity-if-they-fall-into-terrorists-hands/"
    
    for current in collection.find({"status": "error404"}):
        print(current["expanded_url"])
        print(len(current["scrap"]["boilerpipe"]["text"]))
        print(current["scrap"]["boilerpipe"]["text"])
#         path = strToTmpFile(current["html"])
#         sh.firefox(path)
#         input()



def displayBoilerpipe(url):
    for current in collection.find({"expanded_url": url}):
        printLTS(current["scrap"]["boilerpipe"])


def countNews():
    dataPath = "/home/hayj/Data/TwitterArchiveOrg/Converted2/*.bz2"
    nug = NewsUrlGenerator(dataPath)
    count = 0
    for current in nug:
        print(count)
        count += 1
    print("DONE !!!!!!")


def iterOnDatabase():
    i = 0
    nextToDisplay = getRandomInt(2, 100)
    for current in collection.find():
        if i == nextToDisplay:
            expandedUrl = current["expanded_url"]
            lastUrl = current["last_url"] 
            scrap = current["scrap"]["boilerpipe"]["text"]
            print(current["status"])
            input()
            print(expandedUrl)
            input()
            print(lastUrl)
            input()
            print(scrap)
            input()
            print("\n" * 10)
            nextToDisplay = i + getRandomInt(2, 100)
        i += 1


if __name__ == '__main__':
    (user, password, host) = getMongoAuth()
    collection = MongoCollection \
    (
        "crawling",
        "taonews",
        user=user,
        password=password,
        host=host,
        indexNotUniqueOn="last_url_domain",
        indexOn=["expanded_url", "twitter_url"],
    )
    
    printSize()

    

    