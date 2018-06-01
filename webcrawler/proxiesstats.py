


from systemtools.basics import *
from systemtools.location import *
from hjwebbrowser.httpbrowser import *



for current in fileToStrList(homeDir() + "/tmp/newsfr.txt"):
    print("fr\t" + current.split()[2])