
# Execution:
# nn pew in webcrawler-venv python /home/hayj/wm-dist-tmp/WebCrawler/webcrawler/checkproxies.py

# Mise à jour sur hjlat et partout:
# rsync -avhu -e "ssh -p 2222" hayj@212.129.44.40:~/Data/Misc/crawling/proxies/proxies-failed.txt ~/Data/Misc/crawling/proxies/ && ~/Data/magic.sh

import sys, os; sys.path.append("/".join(os.path.abspath(__file__).split("/")[0:-2]))

from datatools.url import *
from systemtools.basics import *
from systemtools.duration import *
from systemtools.file import *
from systemtools.logger import log, logInfo, logWarning, logError, Logger
from systemtools.location import *
from systemtools.hayj import *
from systemtools.system import *
import sh
import random
import re
from threading import Thread, Lock, Semaphore, active_count
from webcrawler.crawler import *
from webcrawler.utils import *
from webcrawler.browser import *
from webcrawler.newsscraper import *
from queue import *
from databasetools.mongo import *
from databasetools.mongo import *
from datatools.newstools import *
from twitterarchiveorg.urlgenerator import *
from webcrawler.sample import __version__

def manualTest():
    proxy = dict()
    proxy["ip"] = "154.16.43.126"
    proxy["port"] = "55555"
    proxy["user"] = "octopeek"
    proxy["password"] = "librepost"
    b = Browser(proxy=proxy)
    b.html("https://stackoverflow.com/questions/48141771/bootstrap-doesnt-affect-typography-when-only-imported-to-some-components-in-ang")
    exit()
# manualTest()

for i in range(100):

    urls = \
    [
        "https://stackoverflow.com/questions/48141771/bootstrap-doesnt-affect-typography-when-only-imported-to-some-components-in-ang",
        "https://stackoverflow.com/questions/48141873/add-custom-js-scripts-to-angular-5-mean-index-html-file",
        "https://stackoverflow.com/questions/48140520/why-is-image-not-shown-properly-as-a-button-background-in-kivy",
        "https://stackoverflow.com/questions/45992446/kotlin-build-cannot-get-classes-created-by-squiddatabase",
        "https://stackoverflow.com/questions/48141856/is-subtracting-a-char-by-0-to-convert-to-int-bad-practice",
        "https://stackoverflow.com/questions/48141744/golang-concatination-array-of-int",
        "https://stackoverflow.com/questions/48141844/extraneous-bullet-point-in-unordered-list",
        "https://stackoverflow.com/questions/48141841/what-is-w-c-doing",
        "https://stackoverflow.com/questions/48134404/improving-my-python-solution-for-csv-name-parsing-lastname-firstname-to-firstn",
        "https://stackoverflow.com/questions/45686090/how-to-set-default-bottomnavigationview-tab-in-kotlin",
        "https://stackoverflow.com/questions/48141324/tkinter-entry-box-value-doesnt-store-into-stringvar-object",
        "https://stackoverflow.com/questions/48136732/item-onclick-recyclerview-kotllin-android",
        "https://stackoverflow.com/questions/46943128/failing-to-run-unit-tests-on-a-new-android-kotlin-project",
        "https://stackoverflow.com/questions/48141826/angular-signalr-hubconnection-gives-protocol-error-unknown-transport",
        "https://stackoverflow.com/questions/47213006/databinding-error-in-android-spinner",
        "https://stackoverflow.com/questions/48141731/i-changed-python-exe-to-python3-exe-but-now-pip-returns-an-error-how-can-i",
    ]

    logger = Logger("checkproxies.log")

    bNoProxy = Browser(driverType=DRIVER_TYPE.phantomjs)
    for url in urls:
        result = bNoProxy.html(url)
        if result["status"] != REQUEST_STATUS.success:
            log("an url is not succedeed with no proxy !!!", logger)
            exit()
        else:
            log(url + " ok !!!", logger)
    bNoProxy.close()


    log("STARTING...", logger)

    proxiesFailed = ""


    tryOldProxies = False

    fileList = \
    [
        dataDir() + "/Misc/crawling/proxies/proxies-renew.txt",
        dataDir() + "/Misc/crawling/proxies/proxies-linkedin.txt",
    ]
    if tryOldProxies:
        fileList = \
        [
            dataDir() + "/Misc/crawling/proxies-renew_old.txt",
        ]

    for port in ["55555", "80"]:
        for proxiesPath in fileList:
            title = "==> " + proxiesPath.split("/")[-1] + " port " + port + " <==\n"
            log(title, logger)
            proxiesFailed += title
            proxies = getProxies(proxiesPath)
            for proxy in proxies:
                proxy["port"] = port
                b = Browser(proxy=proxy, driverType=DRIVER_TYPE.phantomjs, verbose=False, ajaxSleep=0.5)
                url1 = random.choice(urls)
                url2 = random.choice(urls)
                result1 = b.html(url1)
                result2 = b.html(url1)
                if result1["status"] != REQUEST_STATUS.success or result2["status"] != REQUEST_STATUS.success:
                    log(proxy["ip"] + ":" + port + " FAILED: " + str(result1["status"]) + " " + str(result2["status"]), logger)
                    proxiesFailed += proxy["ip"] + ":" + proxy["port"] + ":" + proxy["user"] + ":" + proxy["password"] + "\n"
                else:
                    log(proxy["ip"] + ":" + port + " OK: " + str(result1["status"]) + " " + str(result2["status"]), logger)
                b.close()

    if tryOldProxies:
        log(proxiesFailed, logger)
    else:
        strToFile(proxiesFailed, dataDir() + "/Misc/crawling/proxies/proxies-failed.txt")

    log("END!", logger)

    time.sleep(500)

