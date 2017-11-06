# coding: utf-8

from threading import Thread, Lock
from systemtools.basics import *
from systemtools.system import *
from systemtools.duration import *
import time
from queue import *





testList = range(100)


def testIterator():
    for i in range(100):
        yield i


if __name__ == '__main__':
#     tg = iter(testList)
#     tg = iter(TestGenerator())
    tg = iter(testIterator())
    for i in range(10):
        print(next(tg))
    print("yo")
    for i in range(10):
        print(next(tg))
    print("ya")
    for i in range(100):
        try:
            print(next(tg))
        except: pass
    print("END")
        
    