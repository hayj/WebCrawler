# coding: utf-8

# print('To enable your free eval account and get CUSTOMER, YOURZONE and ' + \
#     'YOURPASS, please contact sales@luminati.io')
# import urllib.request
# import random
# username = 'lum-customer-hl_28ae19d2-zone-static'
# password = 'abrhul0mfhmm'
# port = 22225
# session_id = random.random()
# super_proxy_url = ('http://%s-session-%s:%s@zproxy.luminati.io:%d' %
#     (username, session_id, password, port))
# proxy_handler = urllib.request.ProxyHandler({
#     'http': super_proxy_url,
#     'https': super_proxy_url,
# })
# opener = urllib.request.build_opener(proxy_handler)
# opener.addheaders = \
#     [('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko')]
# print('Performing request')
# print(opener.open('http://lumtest.com/myip.json').read())

from systemtools.basics import *
from systemtools.duration import *
from systemtools.file import *
from systemtools.logger import log, logInfo, logWarning, logWarning, logError, Logger
from systemtools.location import *
from systemtools.system import *

if __name__ == '__main__':
    ip = "436.76.76.432"
    ip = ip.replace(".", "_")
    numbers = getAllNumbers(ip)
    print(ip)