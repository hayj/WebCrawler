# coding: utf-8

import os
import sys
sys.path.append('../')

import unittest
import doctest
from webcrawler import utils
from webcrawler.utils import *
from datastructuretools.setqueue import *

# The level allow the unit test execution to choose only the top level test 
min = 0
max = 1
assert min <= max

print("==============\nStarting unit tests...")

if min <= 0 <= max:
    class DocTest(unittest.TestCase):
        def testDoctests(self):
            """Run doctests"""
            doctest.testmod(utils)

if min <= 1 <= max:
    class Test1(unittest.TestCase):
        def testSet(self):
                        
            c1 = CrawlingElement("http://truc.fr", type=CrawlingElement.TYPE.uniqueUrl)
            c2 = CrawlingElement("http://truc2.fr", type=CrawlingElement.TYPE.uniqueUrl)
            c3 = CrawlingElement("http://truc.fr", type=CrawlingElement.TYPE.notUniqueUrl)
            c4 = CrawlingElement("http://truc.fr", type=CrawlingElement.TYPE.notUniqueUrl)
            c5 = CrawlingElement("http://truc3.fr", type=CrawlingElement.TYPE.notUniqueUrl)
            
            self.assertTrue(c1 < c2)
            self.assertTrue(c1 == c3)
            self.assertTrue(c1 == c4)
            self.assertTrue(c1 != c2)
            
            structure = []
            structure.append(c1)
            structure.append(c2)
            structure.append(c3)
            structure.append(c4)
            
            self.assertTrue(c1 in structure)
            self.assertTrue(c4 in structure)
            
            structure = set()
            structure.add(c1)
            structure.add(c2)
            structure.add(c3)
            structure.add(c4)
            structure.add(c5)
            
            self.assertTrue(len(structure) == 3)
            self.assertTrue(c4 in structure)
            self.assertTrue(c1 in structure)
            self.assertTrue(c2 in structure)
            self.assertTrue(c3 in structure)
            self.assertTrue(c5 in structure)
            
            structure = dict()
            structure[c4] = 4
            structure[c1] = 2
            self.assertTrue(structure[c4] == 2)
            
            
            structure = OrderedSetQueue()
            structure.put(c1)
            structure.put(c2)
            structure.put(c3)
            self.assertTrue(structure.size() == 2)
            self.assertTrue(structure.get().type == CrawlingElement.TYPE.uniqueUrl)
            self.assertTrue(structure.get().type == CrawlingElement.TYPE.uniqueUrl)
            

if __name__ == '__main__':
    unittest.main() # Or execute as Python unit-test in eclipse


print("Unit tests done.\n==============")