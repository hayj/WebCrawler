# coding: utf-8

from threading import *
import time

if __name__ == '__main__':
    def execThread():
        for i in range(10):
            time.sleep(0.05)
    
    theThread = Thread(target=execThread)
    
    theThread.start()
    
    theThread.join(3.0)
    
    if theThread.isAlive():
        print("alive")
        
    
    print('end')