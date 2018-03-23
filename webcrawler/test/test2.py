# coding: utf-8

from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

proxy = {'address': '165.231.108.152:80',
         'username': 'octopeek',
         'password': 'librepost'}


capabilities = dict(DesiredCapabilities.CHROME)
capabilities['proxy'] = {'proxyType': 'MANUAL',
                         'httpProxy': proxy['address'],
                         'ftpProxy': proxy['address'],
                         'sslProxy': proxy['address'],
                         'noProxy': '',
                         'class': "org.openqa.selenium.Proxy",
                         'autodetect': False}

capabilities['proxy']['socksUsername'] = proxy['username']
capabilities['proxy']['socksPassword'] = proxy['password']

driver = webdriver.Chrome(desired_capabilities=capabilities)

url = "https://api.ipify.org/?format=json"
url = "http://www.deezer.com/us"
driver.get(url)
source = driver.page_source
print(source)
driver.close()
driver.quit()

if __name__ == '__main__':
    pass