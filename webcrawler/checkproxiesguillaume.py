
# Execution:
# nn pew in webcrawler-venv python /home/hayj/wm-dist-tmp/WebCrawler/webcrawler/checkproxiesguillaume.py

# Mise à jour sur hjlat et partout:
# rsync -avhu -e "ssh -p 2222" hayj@212.129.44.40:~/checkproxiesguillaume-logs/*.csv ~

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
import time


urls = \
[
    "https://stackoverflow.com/questions/48141771/bootstrap-doesnt-affect-typography-when-only-imported-to-some-components-in-ang",
    "https://stackoverflow.com/questions/48141873/add-custom-js-scripts-to-angular-5-mean-index-html-file",
    "https://stackoverflow.com/questions/48140520/why-is-image-not-shown-properly-as-a-button-background-in-kivy",
    "https://www.societe.com/societe/electricite-de-france-552081317.html",
    "https://www.societe.com/etablissements/electricite-de-france-552081317.html",
    "https://dirigeant.societe.com/dirigeant/Xavier.NIEL.59467820.html",
    "https://www.societe.com/societe/octopeek-519279095.html",
    "https://dirigeant.societe.com/dirigeant/Abdelkrim.TALHAOUI.35776020.html",
    "https://www.societe.com/societe/hello-shuttle-798530895.html",
    "https://www.societe.com/societe/jer1611-825105158.html",
    "https://dirigeant.societe.com/dirigeant/Jeremy.NAIM.45269222.html",
]


logger = Logger("checkproxiesguillaume.log")

log("STARTING...", logger)

ports = ["80", "55555"]
proxies = getProxies(dataDir() + "/Misc/crawling/proxies/proxies-renew.txt")

# proxies = [proxies[0]]

data = []

pageLoadTimeout = 60 * 5
ajaxSleep = 0.5

totalCount = 0
for port in ports:
    for url in urls:
        for loadImages in [True, False]:
            for proxy in proxies:
                totalCount += 1



tt = TicToc(logger=logger)
tt.tic("number of get requests to do : " + str(totalCount))
count = 0
for loadImages in [True, False]:
    for url in urls:
        for port in ports:
            for proxy in proxies:
                row = \
                {
                    "timestamp": time.time(),
                    "status": None,
                    "duration": None,
                    "url": url,
                    "ip": proxy["ip"],
                    "port": port,
                    "url": url,
                    "loadImages": loadImages,
                    "ajaxSleep": ajaxSleep,
                    "pageLoadTimeout": pageLoadTimeout,
                }
                try:
                    proxy["port"] = port
                    b = Browser(proxy=proxy,
                                driverType=DRIVER_TYPE.chrome,
                                verbose=False,
                                ajaxSleep=0.5,
                                pageLoadTimeout=pageLoadTimeout,
                                useFastError404Detection=True,
                                loadImages=loadImages,
                                headless=True)
                    tt = TicToc()
                    tt.tic(display=False)
                    result = b.html(url)
                    duration = tt.tic(display=False)
                    row["duration"] = duration
                    row["status"] = result["status"].name
                except Exception as e:
                    logException(e, logger)
                    row["status"] = "Exception !!!!!!"
                try:
                    b.close()
                except Exception as e:
                    logException(e, logger)
                data.append(row)
                log(listToStr(row) + "\n\n", logger)

                count += 1

                if getRandomFloat() > 0.5:
                    ratioCount = count / totalCount * 100
                    log(str(ratioCount) + "% Done.", logger)
                    tt.tic()
                    tt.toc()

tt.toc()


dictOrListToCSV("checkproxiesguillaume-" + getRandomStr(), data, folder=homeDir() + "/checkproxiesguillaume-logs")

log("END!", logger)



