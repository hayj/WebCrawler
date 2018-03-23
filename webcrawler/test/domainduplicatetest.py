# coding: utf-8

import os
import sys
sys.path.append('../')

import unittest
import doctest
from webcrawler import domainduplicate
from webcrawler.domainduplicate import *

# The level allow the unit test execution to choose only the top level test
min = 0
max = 1
assert min <= max

print("==============\nStarting unit tests...")

if min <= 0 <= max:
    class DocTest(unittest.TestCase):
        def testDoctests(self):
            """Run doctests"""
            doctest.testmod(domainduplicate)

if min <= 1 <= max:
    class Test1(unittest.TestCase):
        def test1(self):
            print("Test 1")
            # We test if it got multiple duplicates:
            dd = DomainDuplicate(host="localhost", limit=10000000, maxDuplicates=3, name="domainduplicatetest")
            dd.data.reset()
            self.assertTrue(not dd.isDuplicate("http://test.com/1", "", "test1"))
            self.assertTrue(not dd.isDuplicate("http://test.com/2", "", "test2"))
            self.assertTrue(not dd.isDuplicate("http://test.com/3", "", "test3"))
            self.assertTrue(not dd.isDuplicate("http://test.com/4", "", "test4"))
            self.assertTrue(not dd.isDuplicate("http://test.com/5", "", "test1"))
            self.assertTrue(not dd.isDuplicate("http://test.com/5", "", "test1"))
            self.assertTrue(not dd.isDuplicate("http://test.com/5", "", "test1"))
            self.assertTrue(not dd.isDuplicate("http://test.com/5", "", "test1"))
            self.assertTrue(not dd.isDuplicate("http://test.com/5", "", "test1"))
            self.assertTrue(not dd.isDuplicate("http://test.com/6", "", "test1"))
            self.assertTrue(not dd.isDuplicate("http://test.com/7", "", "test1"))
            self.assertTrue(dd.isDuplicate("http://test.com/8", "", "test1"))
            self.assertTrue(dd.isDuplicate("http://test.com/9", "", "test1"))
            self.assertTrue(not dd.isDuplicate("http://test.com/10", "a", "test10"))
            self.assertTrue(not dd.isDuplicate("http://test2.com/1", "a", "test11"))
            self.assertTrue(not dd.isDuplicate("http://test2.com/1", "a", "test11"))
            self.assertTrue(not dd.isDuplicate("http://test2.com/1", "a", "test11"))
            self.assertTrue(not dd.isDuplicate("http://test2.com/1", "b", "testb"))
            self.assertTrue(not dd.isDuplicate("http://test2.com/5", "b", "testb"))
            self.assertTrue(not dd.isDuplicate("http://test2.com/6", "b", "testb"))
            self.assertTrue(not dd.isDuplicate("http://test2.com/7", "b", "testb"))
            self.assertTrue(dd.isDuplicate("http://test2.com/8", "b", "testb"))

        def test2(self):
            print("Test 2")
            # We test the limit:
            for limit in [10, 100]:
                dd = DomainDuplicate(host="localhost", limit=limit, maxDuplicates=3,
                                     name="domainduplicatetest", cleanEachNAction=1)
                dd.data.reset()
                self.assertTrue(not dd.isDuplicate("http://test.com/1", "", "test1"))
                self.assertTrue(not dd.isDuplicate("http://test.com/5", "", "test1"))
                self.assertTrue(not dd.isDuplicate("http://test.com/6", "", "test1"))
                self.assertTrue(not dd.isDuplicate("http://test.com/60", "", "test1"))
                self.assertTrue(not dd.isDuplicate("http://test.com/2", "", "test2"))
                self.assertTrue(not dd.isDuplicate("http://test.com/3", "", "test3"))
                self.assertTrue(not dd.isDuplicate("http://test.com/4", "", "test4"))
                self.assertTrue(not dd.isDuplicate("http://test.com/8", "", "test8"))
                self.assertTrue(not dd.isDuplicate("http://test.com/9", "", "test9"))
                self.assertTrue(not dd.isDuplicate("http://test.com/10", "", "test10"))
                self.assertTrue(not dd.isDuplicate("http://test.com/11", "", "test11"))
                self.assertTrue(not dd.isDuplicate("http://test.com/12", "", "test12"))
                self.assertTrue(not dd.isDuplicate("http://test.com/13", "", "test13"))
                self.assertTrue(not dd.isDuplicate("http://test.com/14", "", "test14"))
                if limit == 100:
                    self.assertTrue(dd.isDuplicate("http://test.com/15", "", "test1"))
                else:
                    self.assertTrue(not dd.isDuplicate("http://test.com/15", "", "test1"))


                dd.data.reset()
            print("Test 2 DONE!!!")


if __name__ == '__main__':
    unittest.main() # Or execute as Python unit-test in eclipse


print("Unit tests done.\n==============")