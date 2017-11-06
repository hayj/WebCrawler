# coding: utf-8

    
#     for alpha in np.arange(0.0, 0.999, 0.001):
#         alpha = float(alpha)
#         mb.getProxyInstanciation({
#                             "proxyInstanciationRate": {"alpha": alpha, "beta": NormalizedLawBeta.LOG},
#                             "browserCount": 120,
#                             "requestInParallel": 100,
#                         })
#     for alpha in np.arange(0.0, 1.0001, 0.05):
#     for alpha in alphas:
#         mb.getProxyInstanciation({
#                             "proxyInstanciationRate": {"alpha": alpha, "beta": NormalizedLawBeta.LOG},
#                             "browserCount": int(150),
#                             "requestInParallel": 100,
#                         })
#     mb.getProxyInstanciation({
#                         "proxyInstanciationRate": {"alpha": 0.5, "beta": NormalizedLawBeta.EXP},
#                         "browserCount": 150,
#                         "requestInParallel": 150,
#                     })
#     mb.getProxyInstanciation({
#                         "proxyInstanciationRate": {"alpha": 0.2, "beta": NormalizedLawBeta.LOG},
#                         "browserCount": 150,
#                         "requestInParallel": 150,
#                     })
#     mb.getProxyInstanciation({
#                         "proxyInstanciationRate": {"alpha": 0.2, "beta": NormalizedLawBeta.EXP},
#                         "browserCount": 150,
#                         "requestInParallel": 150,
#                     })
#     mb.getProxyInstanciation({
#                         "proxyInstanciationRate": {"alpha": 0.8, "beta": NormalizedLawBeta.LOG},
#                         "browserCount": 150,
#                         "requestInParallel": 150,
#                     })
#     mb.getProxyInstanciation({
#                         "proxyInstanciationRate": {"alpha": 0.8, "beta": NormalizedLawBeta.EXP},
#                         "browserCount": 150,
#                         "requestInParallel": 150,
#                     })
#     mb.getProxyInstanciation({
#                         "proxyInstanciationRate": {"alpha": 0.95, "beta": NormalizedLawBeta.LOG},
#                         "browserCount": 150,
#                         "requestInParallel": 150,
#                     })
#     mb.getProxyInstanciation({
#                         "proxyInstanciationRate": {"alpha": 0.05, "beta": NormalizedLawBeta.EXP},
#                         "browserCount": 150,
#                         "requestInParallel": 150,
#                     })
#     mb.getProxyInstanciation({
#                         "proxyInstanciationRate": {"alpha": 0.0, "beta": NormalizedLawBeta.LOG},
#                         "browserCount": 150,
#                         "requestInParallel": 150,
#                     })
#     mb.getProxyInstanciation({
#                         "proxyInstanciationRate": {"alpha": 1.0, "beta": NormalizedLawBeta.EXP},
#                         "browserCount": 150,
#                         "requestInParallel": 150,
#                     })
    
    
    
#     mb.start()

    def getProxyInstanciation_old(self, params):
        """
            You can see example for proxyInstanciationRate in proxy-instanciation-rate-examples.txt
            Warning : we don't normalized the instanciation according to the proxies count
        """
        # We get params:
        proxyInstanciationRate = params["proxyInstanciationRate"]
        browserCount = params["browserCount"]
        # We get scores, min, max...
        scores = self.getScores()
        # We create the instanciation dict:
        instanciation = dict(scores)
        for key, value in instanciation.items():
            instanciation[key] = 0
        # We get min, max...
#         minScoreIp = getMinDict(scores)
#         minScore = scores[minScoreIp]
#         maxScoreIp = getMaxDict(scores)
#         maxScore = scores[maxScoreIp]
#         # To prevent divide by 0:
#         if minScore == maxScore:
#             maxScore = maxScore + 1
#         # We normalize all scores:
#         for key, value in scores:
#             scores[key] = (value - minScore) / (maxScore - minScore)
        # We sort the score list:
        sortedIPs = sortDictByValue(scores) # the best one is the first (lttle time duration)
        browserCountRemain = browserCount
        
        i = 0
        for ip, score in sortedIPs:
            if browserCountRemain > 0:
                currentCount = math.ceil(proxyInstanciationRate * browserCountRemain)
                minInstanciationToPut = math.ceil(browserCountRemain / (len(sortedIPs) - i))
                if currentCount < minInstanciationToPut:
                    currentCount = minInstanciationToPut
                instanciation[ip] = currentCount
                browserCountRemain = browserCountRemain - currentCount
            i += 1
        
        
        # TODO delete:
        instanciation = sortDictByValue(instanciation, desc=True)
        u = 0
        for key, value in instanciation:
            strLarge = str(u)
            for i in range(value):
                strLarge += "-"
            print(strLarge)
            u += 1
        
        somme = 0
        for key, value in instanciation:
            somme += value
        print("proxyInstanciationRate=" + str(proxyInstanciationRate))
        print("browserCount=" + str(browserCount))
        print("somme=" + str(somme))
        print("\n\n")

if __name__ == '__main__':
    pass







from queue import *
q = Queue(maxsize=3)

theInt = 0

def addToQueue():
    global q
    global theInt
    theInt += 1
    q.put(theInt)

def printEl():
    time.sleep(0.2)
    print(q.get())


if __name__ == '__main__':
    addToQueue()
    addToQueue()
    addToQueue()
    printEl()
    printEl()
    printEl()
#     printEl()
    print("END")



    
#     print([1] + [2])
#     status = REQUEST_STATUS.error404
#     print(status)
#     timer = Timer(test, 1)
#     timer.start()
#     time.sleep(10)
#     timer.stop()
#     time.sleep(5)
#     timer.start()
    
    
#     lock = Lock()
#      
#     def myfunct():
#             randomInt = getRandomInt(0, 100)
#             print(str(randomInt))
#             time.sleep(1)
#             print(str(randomInt))
#             time.sleep(1)
#             print(str(randomInt))
#          
#  
#     for i in range(100):
#         t = Thread(target=myfunct)
#         t.start()


testList = range(100)

class TestGenerator:
    def __init__(self):
        pass
    
    def __iter__(self):
        for i in range(100):
            yield i

def testIterator():
    for i in range(100):
        yield i


if __name__ == '__main__':
#     tg = iter(testList)
#     tg = iter(TestGenerator())
    tg = iter(testIterator())
    for i in range(10):
        print(next(tg))
    print("yo")
    for i in range(10):
        print(next(tg))
    print("ya")
        













def test():
    """
        This function return True if the html contains
        striped text + a DOM element in its children
    """

    broken_html = "<a href=""><img /> </a>"
#     broken_html = "<a href=""><img /> toto</a>"
#     broken_html = "<div>y<div>x<a href=""><img /> toto<p>tutu</p></a></div>w</div>"
#     broken_html = \
#     """
#         <html>
#             <head>
#             </head>
#             <body>
#                 <div>
#                     xxxxxxxxx
#                     <div>
#                         y
#                         <a href="">
#                             <img/>
#                             toto
#                             <p>
#                                 tutu
#                             </p>
#                         </a>
#                     </div>
#                     wwww
#                 </div>
#             </body>
#         </html>
#     """
#     broken_html = "<a href=""><p> toto</p></a>"
#     broken_html = "<a href=""><p><img src=\"titi\">toto</p></a>"
#     broken_html = "<a href=""><p>p</p>toto</a>"

    parser = etree.HTMLParser()
    tree   = etree.parse(StringIO(broken_html), parser)
#     div = tree.findall("//body//*")
#     div = div[0]
#     div = list(div)[0]
    
    root = tree.find("//body/*")
    print(hasTextPlusNodeRecursive(root))
    exit()


    for current in list(div):
#         print(current.tag)
#         text = str(current.text).strip()
        print(current.tag)
        print(getText(current))
        print()
        print()
        print()
        
    
    exit()
    print(hasTextPlusNode(div))
    
#     print(isinstance(div, etree._Element))
    exit()
    
#     print(div.text)
    for current in list(div):
        print(current.tag)
        print(current.text)
        for current2 in list(current):
            
            print(current2.tag)
            print(current2.text)
            for current3 in list(current2):
                print(current3.tag)
                print(current3.text)
    
    exit()
    div.remove(div.find("a"))
    for el1 in tree.findall('*'):
        el1.remove(el1.find("p"))
    
    result = etree.tostring(tree.getroot(), pretty_print=True, method="html")
    print(result)
#         for el2 in el1.findall('*'):
#             print(el1)

#     result = etree.tostring(tree.getroot(), pretty_print=True, method="html")
# 
#     html = element.get_attribute('innerHTML')
#     xml = '<a xmlns="test"><b xmlns="test"/></a>'
# 
#     root = etree.fromstring(xml)
#     etree.tostring(root)


# test()
# exit()
    











def localhost11(driver):
    divs = driver.find_elements_by_css_selector("#localhost11")
    for currentDiv in divs:
        
        print(isBigEnough(currentDiv))
        print(hasBigEnoughChild(currentDiv))
        exit()
        
        links = currentDiv.find_elements_by_css_selector("a")
        
#         
#         print()
#         
#         for div in divs:
#             print(div.text)
#             exit()
    
        for currentLink in links:
            spans = currentLink.find_elements_by_css_selector("span")
            for currentSpan in spans:
                print(currentSpan.get_attribute("style"))
                print(currentSpan)
                print(currentSpan.text)
#             for span in a.find_elements_by_css_selector("*"):

    exit()



    displayedLinks = \
    [
        "localhost9/",
        "localhost20/",
        "localhost15/",
        "localhost4/",
        "localhost10/",
        "localhost12/",
        "localhost13/",
    ]
    
    notDisplayedLinks = \
    [
        "localhost5/",
        "localhost6/",
        "localhost7/",
        "localhost8/",
        "localhost1/",
        "localhost2/",
        "localhost3/",
        "localhost11/",
        "localhost14/",
        "localhost16/",
        "localhost17/",
        "localhost18/",
        "localhost19/",
        "localhost21/",
    ]


#     b.get("http://localhost/testajax/demo.php?id=H6JGEERKZR-15090974840485392#page1")
#     print(b.driver.page_source[0:30])

#     localhost11(b.driver)
    

    
    
#     (safeLinks, honeypotLinks) = getLinks(b.driver)
    links = b.driver.find_elements_by_css_selector("a")
    x = []
    for link in links:
        href = link.get_attribute("href")
        if re.match("^.*host[0-9].*$", href) is not None:
            currentX = []
            currentX = getHoneypotFeatures(link)
            href = href[7:]
#             if href in notDisplayedLinks:
#                 currentX.insert(0, True)
#             elif href in displayedLinks:
#                 currentX.insert(0, False)
#             else:
#                 print("error")
#                 exit()
            
#             print(href)
            print(str(currentX) + ",")
    
            
#             x.append(currentX)
        
    x = sorted(x)
    printLTS(x)
    
    exit()
    
#     X = [[0, 0], [1, 1]]
#     Y = [0, 1]
#     clf = tree.DecisionTreeClassifier()
#     clf = clf.fit(X, Y)
    
    
#     (safeLinks, honeypotLinks) = getLinks(b.driver)
#     print("displayedLinks")
#     printLTS(displayedLinks)
#     print("safeLinks")
#     printLTS(safeLinks)
#     print("honeypotLinks")
#     printLTS(honeypotLinks)
# 
#     
#     for current in displayedLinks:
#         if current in " ".join(safeLinks):
#             print(current + " OK")
#         else:
#             print(current + " NOT OK")
#         if current in " ".join(honeypotLinks):
#             print(current + " NOT OK")
#         else:
#             print(current + " OK")
#     for current in notDisplayedLinks:
#         if current in " ".join(safeLinks):
#             print(current + " NOT OK")
#         else:
#             print(current + " OK")
#         if current in " ".join(honeypotLinks):
#             print(current + " OK")
#         else:
#             print(current + " NOT OK")



def isHoneypot(link, logger=None):
#     if link.is_displayed() or hasDisplayedChild(link):
#         return False
#     return True

#     if "11" in link.get_attribute("href"):
#         print(link.text)
#         print(link.size)

    try:
#         print(link.is_displayed())
#         print(hasText(link))
#         print(hasDisplayedChild(link))
#         exit()
        
        if not link.is_displayed():
            return True
        else:
            if not hasText(link) or not hasDisplayedChild(link):
                return True
        
#         if link.is_displayed() or \
#         (not link.is_displayed() and (hasText(link) or hasDisplayedChild(link))):
#             return False
    except Exception as e:
        logError(str(e), logger=logger)
    return False
#     for current in link.find_elements_by_css_selector("*"):
#         print("yo")
#     if "11" in link.get_attribute("href"):
#         print(link.text)
#         print(link.size)
#     return False





































