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



from webcrawler.browser import *
from webcrawler.utils import *
from selenium import webdriver
from datatools.url import *
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import random
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import zipfile
from systemtools.file import *
from systemtools.location import *
from systemtools.basics import *

def test1():
    
    
    b = Browser(phantomjsPath=None)
    html = b.html(url)["html"]
    
    print(html)

def test2():
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('window-size=1200x600')
#     options.add_argument('--proxy-server=%s:%s' + getProxies[0])
    
    driver = webdriver.Chrome(chrome_options=options)
    driver.get(url)
    source = driver.page_source
    print(source)

def test3():
    """
     DOESNT WORK
    """
    proxy = random.choice(getProxies())
    capabilities = dict(DesiredCapabilities.CHROME)
    capabilities['proxy'] = {'proxyType': 'MANUAL',
                             'httpProxy': proxy['ip'],
                             'ftpProxy': proxy['ip'],
                             'sslProxy': proxy['ip'],
                             'noProxy': '',
                             'class': "org.openqa.selenium.Proxy",
                             'autodetect': False}
    
    capabilities['proxy']['socksUsername'] = proxy['user']
    capabilities['proxy']['socksPassword'] = proxy['password']
    
#     driver = webdriver.Chrome(desired_capabilities=capabilities)
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('window-size=1200x600')
#     options.add_argument('--proxy-server=%s:%s' + getProxies()[0])
    
    driver = webdriver.Chrome(chrome_options=options, desired_capabilities=capabilities)
    
    driver.set_window_size(800, 800)
    driver.set_page_load_timeout(30.0)
    driver.get(url)
    source = driver.page_source
    print(source)
    
    driver.close()
    driver.quit()
    


def test4():
    b = Browser(driverType=Browser.DRIVER_TYPE.chrome, proxy=getRandomProxy())
    html = b.html(url)["html"]
    print(html[0:50])
    
#     print(b.checkProxy())


def test5():

    
    manifest_json = """
    {
        "version": "1.0.0",
        "manifest_version": 2,
        "name": "Chrome Proxy",
        "permissions": [
            "proxy",
            "tabs",
            "unlimitedStorage",
            "storage",
            "<all_urls>",
            "webRequest",
            "webRequestBlocking"
        ],
        "background": {
            "scripts": ["background.js"]
        },
        "minimum_chrome_version":"22.0.0"
    }
    """
    
    background_js = """
    var config = {
            mode: "fixed_servers",
            rules: {
              singleProxy: {
                scheme: "http",
                host: "165.231.108.152",
                port: parseInt(80)
              },
              bypassList: ["foobar.com"]
            }
          };
    
    chrome.proxy.settings.set({value: config, scope: "regular"}, function() {});
    
    function callbackFn(details) {
        return {
            authCredentials: {
                username: "octopeek",
                password: "librepost"
            }
        };
    }
    
    chrome.webRequest.onAuthRequired.addListener(
                callbackFn,
                {urls: ["<all_urls>"]},
                ['blocking']
    );
    """
    
    proxyPluginName = "proxy_auth_plugin"
    pluginTmpDir = tmpDir(subDir=proxyPluginName)    
    purgeOldFiles(pluginTmpDir + "/" + proxyPluginName + "*.zip", 10.0)
    pluginfile = pluginTmpDir + '/' + proxyPluginName + '_' + getRandomStr() + '.zip'
     
    with zipfile.ZipFile(pluginfile, 'w') as zp:
        zp.writestr("manifest.json", manifest_json)
        zp.writestr("background.js", background_js)
     
    co = Options()
    co.add_argument("--start-maximized")
    co.add_extension(pluginfile)
#     co.add_argument('headless')
    co.add_argument('window-size=1200x600')
     
     
    driver = webdriver.Chrome(chrome_options=co)
     
     
    driver.set_window_size(800, 800)
    driver.set_page_load_timeout(30.0)
    driver.get(url)
    source = driver.page_source
    print(source)
     
    driver.close()
    driver.quit()
    
def test6():
    b = Browser(driverType=DRIVER_TYPE.chrome,
                proxy=getRandomProxy(),
                headless=isHostname("datas"))
    html = b.html(url)
    print(html)


if __name__ == '__main__':
    urlParser = URLParser()
    url = "https://www.google.fr/"
    url = "https://api.ipify.org/?format=json"
#     url = "http://www.deezer.com/us"
    url = urlParser.normalize(url)
    phantomjsPath = "/home/hayj/Programs/headlessbrowsers/phantomjs-2.1.1-linux-x86_64/bin/phantomjs"
    test6()
    

