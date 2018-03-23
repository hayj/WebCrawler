# nn pew in webcrawler-venv python /home/hayj/wm-dist-tmp/WebCrawler/webcrawler/sample/update404.py


import sys, os; sys.path.append("/".join(os.path.abspath(__file__).split("/")[0:-3]))


from datatools.url import *
from systemtools.basics import *
from systemtools.duration import *
from systemtools.file import *
from systemtools.logger import *
from systemtools.location import *
from systemtools.hayj import *
from systemtools.system import *
import sh
import random
import re
from webcrawler.newsscraper import *
from queue import *
from databasetools.mongo import *
from datatools.newstools import *
from twitterarchiveorg.urlgenerator import *
from error404detector import __version__ as Error404DetectorVersion
from error404detector.detector import *


# Init:
logger = Logger("update404.log", remove=True)
(user, password, host) = getMongoAuth(user="hayj", hostname="datascience01")
collection = MongoCollection \
(
    "crawling",
    "taonews",
    user=user,
    password=password,
    host=host,
    indexNotUniqueOn=["last_url_domain", "normalized_url_domain", "status", "crawler"],
    indexOn=["normalized_url"],
)

# Print informations:
def countError(collection):
    log("error404: " + str(collection.count({"status": "error404"})), logger)
    log("success: " + str(collection.count({"status": "success"})), logger)
collection.show(limit=1, onlyFirstLevel=True)
countError(collection.collection)


# Print some element:
# ids = ["59ff1fba0cef436464010131"]
# ids = ["http://www.newsmax.com/MichaelReagan/democrats-russia-ronald-reagan/2016/12/13/id/763730/"]
# for id in ids:
# #     current = collection.findOne({"_id": id})
#     current = collection.findOne({"normalized_url": id})
#     strToFile(current["html"], tmpDir() + "/example.html")
#     strToFile(str(current["scrap"]["boilerpipe"]), tmpDir() + "/example2.html")
# exit()

# rsync -avhu -e "ssh -p 2222" hayj@212.129.44.40:~/tmp/example*.html ./
# http://wgntv.com/2017/01/14/ringling-brothers-closing-circus/


# set crawler as "selenium"
# collection.update({}, {'$set': {'crawler': "selenium"}})
# collection.show(limit=3, onlyFirstLevel=True)



# + maj les 404 si crawler = "chrome" ou selenium ou phantomjs
i = 0
error404Detector = Error404Detector()
succeddedCount = 0
error404edCount = 0
for current in collection.find():
    if current["crawler"] in ["selenium", "chrome", "phantomjs"]:
        if "404detector_version" not in current or current["404detector_version"] != Error404DetectorVersion:
            thisIsA404 = error404Detector.is404(current["html"])
            setObject = {}
            if thisIsA404 and current["status"] != "error404":
                setObject["status"] = "error404"
                setObject["404detector_version"] = Error404DetectorVersion
                error404edCount += 1
            elif current["status"] == "error404" and not thisIsA404:
                setObject["status"] = "success"
                setObject["404detector_version"] = Error404DetectorVersion
                succeddedCount += 1
            if len(setObject) > 0:
    #             if thisIsA404:
    #                 log("------ thisIsA404 ------", logger)
    #             log(listToStr(reduceDictStr(current, max=100)))
    #             log(listToStr(setObject))
                collection.updateSet({"_id": current["_id"]}, setObject)
    #             input()
print("succeddedCount: " + str(succeddedCount))
print("error404edCount: " + str(error404edCount))
print("modifiedCount: " + str(error404edCount + succeddedCount))

# Print informations:
collection.show(limit=1, onlyFirstLevel=True)
countError(collection.collection)



# + refaire les scraping pour tous en mettant la version





