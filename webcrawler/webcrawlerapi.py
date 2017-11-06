# coding: utf-8

from systemtools.logger import *
from systemtools.location import *

from flask import Flask
from flask import request
from flask import jsonify
app = Flask(__name__)
logger = Logger(getExecDirectory(__file__) + "/webcrawler.log")


@app.route('/crawl', methods=['POST', 'GET'])
def crawl():
    if request.method == 'POST':
        jsonData = request.get_json()
        jsonData["response"] = "OK"
        response = jsonData
        return jsonify(response)
    elif request.method == 'GET':
        return "Hello world!"

# if __name__ == "__main__":
#     app.run()



# import webcrawler
# name = "WebCrawler" + webcrawler.__version__
# print(name)