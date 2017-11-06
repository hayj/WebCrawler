rm webcrawler-*.tar.gz
rsync -avh -e "ssh -p 2222" ./*.gz student@212.129.44.40:~/python-packages/
