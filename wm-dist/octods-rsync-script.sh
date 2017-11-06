ssh -t -p 2222 hayj@212.129.44.40 "/usr/bin/yes | pew in webcrawler-venv pip uninstall webcrawler"
rsync -e 'ssh -p 2222' -avh ../webcrawler/* hayj@212.129.44.40:~/wm-dist-tmp/WebCrawler/webcrawler/

# ssh -t -p 2222 hayj@212.129.44.40 pew in webcrawler-venv python ~/wm-dist-tmp/WebCrawler/test.py




# rm *tao*.log nohup.out ghos*.log
# source ~/.hjbashrc
# killbill webc
# killbill phantom
# nn pew in webcrawler-venv python /home/hayj/wm-dist-tmp/WebCrawler/webcrawler/sample/taonews.py


# cd ~ && nn pew in webcrawler-venv python /home/hayj/wm-dist-tmp/WebCrawler/webcrawler/leparisiencrawl.py

# cd ~ && nn pew in webcrawler-venv python /home/hayj/wm-dist-tmp/WebCrawler/webcrawler/sample/pagesjaunes.py

# nn pew in webcrawler-venv python /home/hayj/wm-dist-tmp/WebCrawler/webcrawler/test/mongoanalyse.py

# cd ~ && nn pew in webcrawler-venv python /home/hayj/wm-dist-tmp/WebCrawler/webcrawler/sample/taonews.py







