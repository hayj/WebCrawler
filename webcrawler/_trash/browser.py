# coding: utf-8

# import splinter
from requests import get
import ipgetter
import re
import selenium
# from selenium import *
from selenium import webdriver
from selenium.webdriver.common.proxy import *
from utils.system import enum
# from status.ip import setProxy
from systemtools.duration import *
from systemtools.system import *

BrowserEnum = enum\
(
    "BrowserEnum",
    "PHANTOMJS", # TODO faire des sous-browser SPLINTER_FIREFOX
    "SCRAPY", # différent ???
    "FIREFOX",
)


# TODO faire un check ip qui check juste si l'ip avec phantomjs réglé en proxy est différente de l'ip de base qu'on obtient...


"""
# TODO https://stackoverflow.com/questions/14699718/how-do-i-set-a-proxy-for-phantomjs-ghostdriver-in-python-webdriver
# Les proxies pour phantomjs :

--proxy=address:port specifies the proxy server to use (e.g. --proxy=192.168.1.42:8080).
--proxy-type=[http|socks5|none] specifies the type of the proxy server (default is http).
--proxy-auth specifies the authentication information for the proxy, e.g. --proxy-auth=username:password).

"""


class HJBrowser(object):
    def __init__(self,
                 browserId=BrowserEnum.PHANTOMJS,
                 proxy=None,
                 port="80",
                 user="octopeek",
                 password="librepost",
                 verbose=True):
#         self.browser = splinter.Browser('phantomjs')
#         self.browser = splinter.Browser('firefox')

        
        self.tt = TicToc()
        self.tt.tic("Initialisating HJBrowser...")
        self.port = port
        self.password = password
        self.user = user
        self.verbose = verbose
        self.browserId = browserId
        self.proxy = proxy
        
#         if self.proxy is not None:
#             setProxy(self.proxy)
        
        if self.browserId == BrowserEnum.FIREFOX:
            if self.proxy is None:
                self.browser = webdriver.Firefox()
            else:
#                 proxyString = self.user + ":" + self.password + ":" + self.proxy + ":" + self.port
#                 proxy = Proxy\
#                 ({
#                     'proxyType': ProxyType.MANUAL,
#                     'httpProxy': proxyString,
# #                     'httpsProxy': proxyString,
#                     'ftpProxy': proxyString,
#                     'sslProxy': proxyString,
#                     'noProxy': '' # set this value as desired
#                 })
#                 self.browser = webdriver.Firefox(proxy=proxy)


#                 profile = webdriver.FirefoxProfile() 
#                 profile.set_preference("network.proxy.type", 1)
#                 profile.set_preference("network.proxy.http", self.user + ':' + self.password + '@' + self.proxy)
#                 profile.set_preference("network.proxy.http_port", self.port)
#                 profile.update_preferences()
#                 self.browser = webdriver.Firefox(firefox_profile=profile)

                proxyString = self.proxy + ":" + self.port
                proxy = Proxy\
                ({
                    'proxyType': ProxyType.MANUAL,
                    'httpProxy': proxyString,
#                     'httpsProxy': proxyString,
                    'ftpProxy': proxyString,
                    'sslProxy': proxyString,
                    'noProxy': '', # set this value as desired
                    'socksUsername': self.user,
                    'socksPassword': self.password,
                })
                self.browser = webdriver.Firefox(proxy=proxy)
                
                raise Exception("firefox proxy doesn't work, see http://stackoverflow.com/questions/38304253/how-to-set-proxy-authentication-user-password-using-python-selenium")
                
        elif self.browserId == BrowserEnum.PHANTOMJS:
            if self.proxy is None:
                self.browser = webdriver.PhantomJS()
            else:
                service_args = \
                [
                    '--proxy=' + self.proxy + ':' + self.port,
                    '--proxy-type=http', # http|socks5|none
                    '--proxy-auth=' + self.user + ':' + self.password,
                ]
                self.browser = webdriver.PhantomJS(service_args=service_args) #service_args=service_args
        else:
            raise Exception("Not yet implemented")
        
    def browserName(self):
        return BrowserEnum.dictReverse[self.browserId]

    
    

    
    
    
    def visit(self, url):
        self.browser.get(url)

def test1():
    # Test FIREFOX with no proxy :
    browser = HJBrowser(browserId=BrowserEnum.FIREFOX)
    browser.checkIP(testCount=4)
    browser.quit()

    # Test PHANTOMJS with no proxy :
    browser = HJBrowser(browserId=BrowserEnum.PHANTOMJS)
    browser.checkIP(testCount=4)
    browser.quit()
    
    # Test PHANTOMJS with proxy :
    browser = HJBrowser(browserId=BrowserEnum.PHANTOMJS, proxy="181.214.212.10")
#     browser = HJBrowser(browserId=BrowserEnum.PHANTOMJS, proxy="185.158.121.138")
    browser.checkIP(testCount=4)
    browser.quit()

if __name__ == '__main__':
    """
    To use this account opuire.malaire@tutanota.com 753êµ$UfD5 pls use
    this proxy 191.101.123.206:80:octopeek:librepost located in Frankfurt
    or Santiago Chile
    """
    print "Start"
#     test1()
#     browser = HJBrowser(browserId=BrowserEnum.PHANTOMJS, proxy="191.101.123.206") # 191.101.123.206
    browser = HJBrowser(browserId=BrowserEnum.PHANTOMJS, proxy="181.214.212.10")
#     browser.checkIP(testCount=1)
    

    browser.visit("https://www.linkedin.com")
    
    
    browser.linkedInConnexion()
    
    
    print browser.html("https://www.linkedin.com/in/neill-fawcett-44b02b135/")
    
    

    
#     print browser.html("https://www.linkedin.com/in/neill-fawcett-44b02b135/") # Un compte au hasard
#     print browser.html("https://ir.linkedin.com/in/ebrahim-abadi/de/") # Un compte au hasard
    
    print "End"












