# Requirements

    pew in webcrawler-venv pip install https://github.com/misja/python-boilerpipe/zipball/master#egg=python-boilerpipe
    pew in webcrawler-venv pip install newspaper3k
    pew in webcrawler-venv pip install news-please

newspaper3k and news-please doesn't work in requirements.txt, produce bad marshall data
So you need to install it manually


# Phantomjs deprecation

If phantomjs doesn't works, you can go back to selenium==3.8.0 and phantomjs==2.1.1