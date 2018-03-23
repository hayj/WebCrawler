# coding: utf-8
# pew in systemtools-venv python ./test/basics.py

import os
import sys
sys.path.append('../../')

import unittest
import doctest
from webcrawler.sample import koreusbrowse
from webcrawler.sample.koreusbrowse import *

# The level allow the unit test execution to choose only the top level test
min = 0
max = 2
assert min <= max

print("==============\nStarting unit tests...")

if min <= 0 <= max:
    class DocTest(unittest.TestCase):
        def testDoctests(self):
            """Run doctests"""
            doctest.testmod(koreusbrowse)

if __name__ == '__main__':
    unittest.main() # Or execute as Python unit-test in eclipse


print("Unit tests done.\n==============")