
# pew in webcrawler-venv python /home/hayj/wm-dist-tmp/WebCrawler/webcrawler/mongotest.py

import sys, os; sys.path.append("/".join(os.path.abspath(__file__).split("/")[0:-2]))

from databasetools.mongo import *
from webcrawler.utils import *



(user, password, host) = getMongoAuth(user="hayj", hostname="datascience01")
collection = MongoCollection \
(
    "koreus",
    "crawl",
    indexOn=["url"],
    user=user, host=host, password=password,
)


collection.showDbs()


collection.show()


