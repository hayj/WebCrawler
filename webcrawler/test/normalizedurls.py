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
from webcrawler.utils import *
import pymongo


def getRandomUrls(collection, count):
    # First we get a list of exp urls:
    urls = []
    idToTake = getRandomInt(0, 10)
    i = 0
    for current in collection.find():
        if i == idToTake:
            urls.append(current["expanded_url"])
            idToTake = i + 1 + getRandomInt(0, 2)
        i += 1
        if len(urls) > count:
            break
    for i in range(count):
        urls.append(getRandomStr())
    random.shuffle(urls)
    return urls

def indexBenchmark():
    (user, password, host) = getMongoAuth(isJamy=True)
    collection = MongoCollection \
    (
        "test",
        "benchmark",
        user=user,
        password=password,
        host=host,
#         indexNotUniqueOn="last_url_domain",
#         indexOn=["expanded_url", "twitter_url"],
    )
    
    
#     collection.dropAllIndexes()
#     
#     collection.createIndex("expanded_url", type=pymongo.ASCENDING, unique=True)
    
#     for i in range(500000):
#         collection.insert({"expanded_url": getRandomStr(), "text": getRandomStr()})
# #     
    print(collection.size())
#     
#     
#     print(collection.toDataFrame())
#     exit()

    collection.dropAllIndexes()
    
    for index in [None, pymongo.ASCENDING, pymongo.DESCENDING, pymongo.HASHED]:
        if index is not None:
            unique = True
            if index == pymongo.HASHED or index == pymongo.TEXT:
                unique = False
            tt = TicToc()
            tt.tic(display=False)
            collection.createIndex("expanded_url", type=index, unique=unique)
            tt.toc("Index " + str(index) + " created")
        urls = getRandomUrls(collection, 10000)
        tt = TicToc(maxDecimal=10)
        tt.tic(display=False)
        result = ""
        for url in urls:
            content = collection.collection.find({"expanded_url": url})
            result += str(content)[0:3]
        print(result[0])
        tt.toc("Index: " + str(index))
#         printLTS(collection.getInfos())
        collection.dropAllIndexes()
        
    
    

def test1():
    (user, password, host) = getMongoAuth(isJamy=True)
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
    
    print("Starting...")
    countDiff = 0
    countTotal = 0
    urlParser = URLParser()
    for current in collection.find():
        expandedUrl = current["expanded_url"]
        normalizedUrl = urlParser.normalize(expandedUrl)
        if expandedUrl != normalizedUrl:
            print("expanded = " + expandedUrl)
            print("normaliz = " + normalizedUrl)
            print("\n" * 3)
            countDiff += 1
        countTotal += 1
        if countTotal % 100 == 0:
            print(countTotal)
    print(str(countDiff / countTotal * 100) + "%")

    # Conclusion : on peut se fier aux normilzed urls
    # Il y a 1.8% d'urls différentes

def askContinue():
    toContinue = input("Continue ?\n")
    toContinue = toContinue.lower().strip()
    if toContinue != "" and toContinue != "y":
        exit()

def printCollection():
    (user, password, host) = getMongoAuth(isJamy=False)
    collection = MongoCollection \
    (
        "crawling",
        "taonews",
        user=user,
        password=password,
        host=host,
#         indexNotUniqueOn=["last_url_domain", "normalized_url"],
#         indexOn=["expanded_url", "twitter_url"],
    )
    printLTS(collection.getInfos())
    print(collection.toDataFrame())
    
def createIndexes():
    (user, password, host) = getMongoAuth(isJamy=False)
    collection = MongoCollection \
    (
        "crawling",
        "taonews",
        user=user,
        password=password,
        host=host,
    )
    collection.dropAllIndexes()
    collection.createIndex("normalized_url", unique=True)
    collection.createIndex("normalized_url_domain", unique=False)
    collection.createIndex("last_url_domain", unique=False)

def convert():
    # 1 : on met un indexNotUnique sur normalized_url
    (user, password, host) = getMongoAuth(isJamy=False)
    collection = MongoCollection \
    (
        "crawling",
        "taonews",
        user=user,
        password=password,
        host=host,
#         indexNotUniqueOn=["last_url_domain", "normalized_url"],
#         indexOn=["expanded_url", "twitter_url"],
    )
    
    
    print("Starting...")
    urlMapping = {}
    toDelete = []
    toNotDelete = []
    urlParser = URLParser()
    for current in collection.find():
        expandedUrl = current["expanded_url"]
        normalizedUrl = urlParser.normalize(expandedUrl)
        if expandedUrl != normalizedUrl:
            if current["status"] != "success":
                toDelete.append(expandedUrl)
            else:
                toNotDelete.append(expandedUrl)
        urlMapping[expandedUrl] = normalizedUrl
      
    print("len(toDelete) = " + str(len(toDelete)))
    print("len(toNotDelete) = " + str(len(toNotDelete)))
    print("On supprime les mauvais expandedUrl qui ne sont pas success")
    askContinue()
    for expandedUrl in toDelete:
        collection.collection.delete_one({'expanded_url': expandedUrl})
      
    print("On ajoute les normalized_url")
    askContinue()
    for expandedUrl, normalizedUrl in urlMapping.items():
        collection.updateOne({'expanded_url': expandedUrl}, {'$set': {'normalized_url': normalizedUrl}})
    print(collection.toDataFrame())
      
    print("Ensuite on supprime tous les index")
    askContinue()
    collection.dropAllIndexes()
      
    print("Ensuite on rename expanded_url en twitter_expanded_url")
    askContinue()
    collection.update({}, {'$rename': {'expanded_url': "twitter_expanded_url"}})
    print(collection.toDataFrame())
      
    print("Ensuite on rename expanded_url_domain en twitter_expanded_url_domain")
    askContinue()
    collection.update({}, {'$rename': {'expanded_url_domain': "twitter_expanded_url_domain"}})
    print(collection.toDataFrame())
      
    print("Ensuite on ajoute normalized_url_domain")
    askContinue()
    collection.createIndex("normalized_url", unique=False)
    normalizedUrlDomainMapping = {}
    tt = TicToc()
    tt.tic(display=False)
    print("Starting convert all normalizedUrl to normalizedUrlDomain")
    for current in collection.find():
        normalizedUrl = current["normalized_url"]
        normalizedUrlDomain = urlParser.getDomain(normalizedUrl)
        normalizedUrlDomainMapping[normalizedUrl] = normalizedUrlDomain
    tt.tic()
    print("Starting update all")
    for normalizedUrl, normalizedUrlDomain in normalizedUrlDomainMapping.items():
        collection.update({'normalized_url': normalizedUrl}, {'$set': {'normalized_url_domain': normalizedUrlDomain}})
    tt.tic()
    print(collection.toDataFrame())
    collection.dropAllIndexes()
    
    print("On get les doublons normalized_url")
    askContinue()
    normalizedUrlCount = {}
    for current in collection.find():
        normalizedUrl = current["normalized_url"]
        if normalizedUrl not in normalizedUrlCount:
            normalizedUrlCount[normalizedUrl] = 1
        else:
            normalizedUrlCount[normalizedUrl] += 1
    toDelete = []
    for normalizedUrl, count in normalizedUrlCount.items():
        if count > 1:
            toDelete.append(normalizedUrl)
    
    print("On delete les doublons normalized_url")
    print("len(toDelete) = " + str(len(toDelete)))
    askContinue()
    for normalizedUrl in toDelete:
        print(normalizedUrl + " was not unique !!!! DELETION")
        collection.delete({"normalized_url": normalizedUrl})
        
    print("Ensuite on créé tous les indexes")
    askContinue()
    collection.createIndex("normalized_url", unique=True)
    collection.createIndex("normalized_url_domain", unique=False)
    collection.createIndex("last_url_domain", unique=False)
    
    print("DONE!")
    
if __name__ == '__main__':
#     createIndexes()
    printCollection()

