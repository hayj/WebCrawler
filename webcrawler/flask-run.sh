 
# pew in webcrawler-venv FLASK_APP=webcrawlerapi.py flask run


# pew in webcrawler-venv python webcrawlerapi.py

source ~/.hjbashrc
killbill "python -m flask run"
killbill "pew in webcrawler-venv python -m flask run"
killbill "flask-run.sh"
export FLASK_APP=webcrawlerapi.py
nohup nice -n 10 pew in webcrawler-venv python -m flask run --host=0.0.0.0 &
