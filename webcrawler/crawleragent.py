"""

DomainDuplicate, avec MongoDB ou sans

404 detector...

Un sd qui retient les fail avec mongodb ou sans

des enums pour les metodes (proxies, selnium ou pas, headers...) avec mongodb ou sans


Des parametre de lancement de script
 --> prioratitaire sur la config
 --> sinon on va chercher dans config
 --> sinon on va chercher dans dataencryptor (les proxies, identifiant rabbitmq, identifiant mongo)

Si pas mongo, alors on a des param de SD different en mode fichiers

Nombre de thread en paralelle (PAS PROCESS car http req ou selenium fonctionne très bien en multi thread), nombre de retry, est ce qu'on utilise  tor ou pas

Dans la queue rabbit mq on a des priorité, on a des méthodes forcées, proxies forcées
On peut prendre une sorte de type d'url (news ou autres) qui implique une methode differente de verif  du html pour voir si c'est valide...

En reponse on donne tous les fails
"""




class CrawlerAgent