# coding: utf-8


import pymongo
from databasetools.mongo import *
from systemtools.file import *
from systemtools.location import *
from systemtools.basics import *
from webcrawler.utils import *



if __name__ == '__main__':
    allFiles = sortedGlob("../data-sample/404_*.html")
    for current in allFiles:
        print(current)
        
        html = fileToStr(current)
        print(is404Error(html))