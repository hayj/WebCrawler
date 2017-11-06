# coding: utf-8

from systemtools.basics import *
from systemtools.system import *
from systemtools.location import *
from datatools.json import *
from twitterarchiveorg.urlgenerator import *

def iterOnDataset():
    
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
    iMax = 3
    for current in jr:
        printLTS(current) # Cette fonction permet de faire un beautiful print
        i += 1
        if i > iMax:
            break
    
    # Maintenant on itere et on prend tous les liens :
    i = 0
    iMax = 10
    for current in jr:
        allUrls = getFormatedUrlsFromTweet(current)
        printLTS(allUrls)
        i += 1
        if i > iMax:
            break
    
    # On itere sur tous les liens qui sont des "news"
    nug = NewsUrlGenerator(dataPattern, doShuffle=doShuffle)
    i = 0
    iMax = 10
    for current in nug:
        print(current["expanded_url"])
        i += 1
        if i > iMax:
            break
    
    
    
    
if __name__ == '__main__':
    iterOnDataset()