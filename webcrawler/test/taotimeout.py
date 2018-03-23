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
from webcrawler.newstools import *
from twitterarchiveorg.urlgenerator import *
from webcrawler.sample.taonews import *



urls = []
dataPath = "/home/hayj/Data/TwitterArchiveOrg/Converted2/*.bz2"
tnug = TaoNewsUrlGenerator(dataPath, doShuffle=False)
i = 0
for current in tnug:
    urls.append(current)
    i += 1
    if i > 10000:
        break

successCount = 0
timeoutCount = 0
error404Count = 0
def htmlCallback(data, browser=None):
    global successCount
    global timeoutCount
    global error404Count
    status = data["status"]
    if status == Browser.REQUEST_STATUS.success:
        successCount += 1
    if status == Browser.REQUEST_STATUS.timeout:
        timeoutCount += 1
    if status == Browser.REQUEST_STATUS.error404:
        error404Count += 1
    
    print("successCount=" + str(successCount) + ", " + \
          "timeoutCount=" + str(timeoutCount) + ", " + \
          "error404Count=" + str(error404Count))
        

proxies = getProxies()
browsers = []
for i in range(3):
    p = proxies[i + 12]
    b = Browser(proxy=getRandomProxy(), htmlCallback=htmlCallback, pageLoadTimeout=10, ajaxSleep=6)
    browsers.append(b)

exit()



# Pour savoir si le problem vient des proxies ou de la bande passante:

for i in range(15):
    url = random.choice(urls)
    for b in browsers:
        b.get(url)



# CONCLUSION : en séquentiel il y a à peu près 1.5 fois plus de timeout
# successCount=171, timeoutCount=265, error404Count=0




















