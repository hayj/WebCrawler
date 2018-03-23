# coding: utf-8
# pew in webcrawler-venv python ./test/domainduplicate.py

import os
import sys
sys.path.append('../')

import unittest
import doctest
from webcrawler import domainduplicate
from webcrawler.domainduplicate import *
from systemtools.basics import *

# The level allow the unit test execution to choose only the top level test 
min = 0
max = 3
assert min <= max

print("==============\nStarting unit tests...")

def removeTmp():
    globPattern = getExecDirectory(__file__) + "/tmp/*.pickle"
    print(globPattern)
    globRemove(globPattern)

if min <= 0 <= max:
    class DocTest(unittest.TestCase):
        def testDoctests(self):
            """Run doctests"""
            doctest.testmod(domainduplicate)

if min <= 1 <= max:
    class Test1(unittest.TestCase):
        def test1(self):
            print("Start test1")
            removeTmp()
            cache = DomainDuplicateCache \
            (
                maxHashCount=10,
                purgeAndSaveEachAdd=0,
                fileId="test1",
                dataDirPath=getExecDirectory(__file__) + "/tmp",
            )
            cache.add("http://test.com/564651", "test", "contenu")
            cache.add("http://test2.com/8949841", "test2", "contenu2")
            cache.add("http://test2.com/89468541", "test2", "contenu2")
            cache.add("http://test2.com/8941", "test3", "contenu3")
            cache.add("http://test2.com/8941", "te3", "contnu3")
            cache.add("http://test2.com/8941", "te3", "contnu3")
            
            printLTS(cache.data)
            
            self.assertTrue(cache.size() == 5)
            self.assertTrue(cache.count("http://test2.com/894rfegfg68541", "test2", "contenu2") == 2)
            
            
            print("End test1")

if min <= 2 <= max:
    class Test2(unittest.TestCase):
        def test2(self):
            print("Start test2")
            removeTmp()
            cache = DomainDuplicateCache \
            (
                maxHashCount=3,
                purgeAndSaveEachAdd=8,
                fileId="test2",
                dataDirPath=getExecDirectory(__file__) + "/tmp",
            )
            cache.add("http://test.com/" + getRandomStr(), "test", "contenu")
            cache.add("http://test.com/" + getRandomStr(), "test", "contenu")
            cache.add("http://test.com/" + getRandomStr(), "test", "contenu")
            cache.add("http://test.com/" + getRandomStr(), "testa", "contenua")
            cache.add("http://test.com/" + getRandomStr(), "testb", "contenub")
            self.assertTrue(cache.count("http://test.com/" + getRandomStr(), "testa", "contenua") == 1)
            cache.add("http://test.com/" + getRandomStr(), "testc", "contenuc")
            cache.add("http://test.com/" + getRandomStr(), "test", "contenu")
            cache.add("http://test.com/" + getRandomStr(), "test", "contenu")
            cache.add("http://test.com/" + getRandomStr(), "test", "contenu")
  
  
            printLTS(cache.data)
              
            self.assertTrue(cache.size() == 8)
            self.assertTrue(cache.count("http://test.com/" + getRandomStr(), "testa", "contenua") == 0)
            self.assertTrue(cache.count("http://test.com/" + getRandomStr(), "testb", "contenub") == 1)
            self.assertTrue(cache.count("http://test.com/" + getRandomStr(), "test", "contenu") == 6)
              
            print("End test2")

if min <= 3 <= max:
    class Test3(unittest.TestCase):
        def test3(self):
            print("Start test3")
            removeTmp()
            cache = DomainDuplicateCache \
            (
                maxHashCount=3,
                purgeAndSaveEachAdd=8,
                fileId="test3",
                dataDirPath=getExecDirectory(__file__) + "/tmp",
            )
            cache.add("http://test1.com/" + getRandomStr(), "test", "contenu")
            cache.add("http://test2.com/" + getRandomStr(), "test", "contenu")
            cache.add("http://test3.com/" + getRandomStr(), "test", "contenu")
            cache.add("http://test4.com/" + getRandomStr(), "testa", "contenua")
            cache.add("http://test5.com/" + getRandomStr(), "testb", "contenub")
            cache.add("http://test6.com/" + getRandomStr(), "testc", "contenuc")
            cache.add("http://test7.com/" + getRandomStr(), "test", "contenu")
            cache.add("http://test8.com/" + getRandomStr(), "test", "contenu")
  
            self.assertTrue(cache.size() == 3)
  
            printLTS(cache.data)
              
              
            print("End test3")

if __name__ == '__main__':
    unittest.main() # Or execute as Python unit-test in eclipse

print("Unit tests done.\n==============")





    
    
    
    
    





