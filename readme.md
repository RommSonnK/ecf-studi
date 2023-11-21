> [!info] Prerequis
> 
><font color="#4bacc6"> **<u>Installer Docker</u>**</font>
> 
> Windows : 
> 	[https://welovedevs.com/fr/articles/install-docker-windows/](https://welovedevs.com/fr/articles/install-docker-windows/)
> Mac :
[https://www.ionos.fr/digitalguide/serveur/configuration/docker-compose-sur-mac/](https://www.ionos.fr/digitalguide/serveur/configuration/docker-compose-sur-mac/)
> Ubuntu : 
> [https://www.ionos.fr/digitalguide/serveur/configuration/docker-compose-sur-mac/](https://www.ionos.fr/digitalguide/serveur/configuration/docker-compose-sur-mac/)
>
><font color="#4bacc6">**<u>Installer npm / node.js / Angular </u>**</font>
.[https://www.knowledgehut.com/blog/web-development/install-angular-on-windows](https://www.knowledgehut.com/blog/web-development/install-angular-on-windows)
>
><font color="#4bacc6">** <u>Installer Java </u>**</font>
>
>https://unogeeks.com/install-java-17/


## **<u>Comment installer le code ?</u>**

  

#### Partie 1 : base de données

- Git clone du projet 
    
- Sortir le dossier Docker 
    
- cd dans le dossier et cmd : docker-compose up -d
    
- vérification du run dans Docker desktop
    
- Connection a la DB par un logiciel (type HeidiSql )
    

- ip local / port 5494 / mdp : test / user : test / db : ecf
    

- Exécution des script fournis en 5.2 for CREATE and ALTER sur chaque table
    

#### Partie 2 : Back

- Rdv dans le dossier Serveur du projet
    
- ouvrez le avec un éditeur pour java (Type inteliji)
    
- run en cm : maven clean install -DskipTests
    
- Run projet profile : Default 
    

#### Partie 3 : Front 

- Rdv à la racine du projet 
    
- Ouvrez avec un éditeur pour le web (type webstorm )
    
- Run en cmd : npm install
    
- Run en cmd : Ionic serve
    


## <u>Comment cree un Employer ? </u>

- Connecter vous avec un compte administrateur sur le site web 
	- Mail : vincentparrot@gmail.com
	- Mdp : vincentMdp


- Rendez vous sur Ajouter un employer
- Saisissez votre ajout 
- Valider 

- Félicitation le nouvelle employer est crée 
- Il pourra s'identifier avec le mail/mdp saisie lors de la création 


## <u>Comment cree un service ? </u>

- Connecter vous avec un compte administrateur sur le site web 
	- Mail : vincentparrot@gmail.com
	- Mdp : vincentMdp


- Rendez vous sur Ajouter un service
- Saisissez votre ajout 
- Valider 

- Félicitation votre nouveau service est publier
## <u>Comment modérer un commentaire ? </u>

- Connecter vous avec un compte administrateur ou employer

- Rendez vous sur approuver un commentaire
- Dans le tableau des commentaire en attente qui s'est ouvert 
sélectionner celui qui vous intéresse, appuyer sur le bouton vert pour l'approuver et 
le bouton rouge pour le refuser.
- Valider 

- Félicitation vos commentaires on était modérer 

*C Romain Fleuriot* 
*ECF Novembre 2023 
Studi - Graduate Flutter*