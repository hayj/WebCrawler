# coding: utf-8


from systemtools.basics import *
from systemtools.location import *
from systemtools.file import *
import html2text


if __name__ == '__main__':
    
#     for current in sortedGlob(execDir(__file__) + "/../data-sample/*block*"):
    for current in sortedGlob("/home/hayj/Workspace/Python/Crawling/WebCrawler/webcrawler/tmp/*.html"):
        print(html2text.html2text(fileToStr(current)))
#         print("\n\n")
#         print("------------------------------")
#         print("\n\n")
        input()
        
#         html2text.html2text(doc.content())
