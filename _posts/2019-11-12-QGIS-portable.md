---
title: Utiliser QGIS sans internet
permalink: portablegis
published: true
---

Imaginez : toute la cartographie de votre plan d'urgence tient sur une clé USB, tout comme le programme qui permet de créer et de modifier des cartes. Grâce à cela, vous pouvez consulter votre cartographie et l'éditer sur n'importe quel ordinateur Windows...

De nombreux outils de cartographie sont très simples à utiliser ([Google My Maps](https://www.google.com/maps/d/), [UMap](https://umap.openstreetmap.fr/nl/), [SarTopo](https://sartopo.com/map.html), ...) et peuvent suffire pour notre usage, mais ne sont disponibles que sur le web. 

Or, en situation de crise, on ne peut pas toujours compter sur un accès à internet : connexion fixe indisponible, réseau mobile saturé, ... Il existe des moyens de garantir un accès prioritaire à l'internet mobile (ex: cartes SIM ["Astrid Blue Light Mobile"](https://www.astrid.be/fr/services/blue-light-mobile) en Belgique), mais ceux-ci ont également leurs limites (ex: si le relais GSM est lui-même en panne), et il est prudent de prévoir des outils qui fonctionnent hors réseau également.

[QGIS](https://www.qgis.org/)  permet exactement cela. QGIS est un [système d'information géographique](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27information_g%C3%A9ographique) (SIG) professionnel et open source. C'est un peu le couteau suisse de la cartographie. Grâce à lui, vous pouvez **créer les cartes dont vous avez besoin** en planification d'urgence et en gestion de crise. Son caractère **open-source** signifie que vous pouvez le télécharger gratuitement (le modèle économique ne repose pas sur des coûts de licence, mais plutôt sur le service), et qu'il peut s'adapter à vos besoins.

Par exemple, [@archaeogeek](https://gitlab.com/archaeogeek) a "emballé" QGIS 3.4 pour pouvoir être utilisé sous Windows **à partir d'une simple clé USB**. C'est le projet "[**portableGIS**](https://portablegis.xyz/post/get/)".

Voici comment vous y prendre :

1. Prévoyez une clé USB de **8 Gb ou plus** (choisissez une clé assez rapide - si vous devez en acheter une, les modèles présentés [ici](https://www.01net.com/actualites/le-top-10-des-meilleures-cles-usb-3-0-de-32-go-636582.html) semblent des bons candidats) ;
2. rendez-vous sur [**download.astuntechnology.com/home**](http://download.astuntechnology.com/home/) (login : pgis, mot de passe : pgis) ;
3. **téléchargez** le fichier "portablegis_setup_v60.zip" (2 Gb) ;
4. déplacez-le sur votre clé USB ;
5. **décompressez**-le dans le dossier portablegis_setup_v60 ;
6. effacez le fichier .zip ;
7. allez dans le folder **portablegis_setup_v60** ;
8. exécutez QGIS en double-cliquant sur **portablegis.exe** ;
9. cliquez sur "**Desktop Modules**", puis "**QGIS**" ;
10. configurez ensuite QGIS comme vous le souhaitez, en ajoutant par exemple les plugins dont vous avez besoin, ou encore des fonds de carte hors-ligne (ex, ceux de la [Région Wallonne](https://geoportail.wallonie.be/telecharger), de Bruxelles ([Urbis](http://urbisdownload.gis.irisnet.be/fr/temporality/)) ou de la Région Flamande ([Geopunt](http://www.geopunt.be/))).
	
Vous pouvez même utiliser QGIS **au quotidien** à partir de cette clé USB (conservez votre clé en sécurité pour éviter des accès malveillants, et, si possible, chiffrez-là).

Si, en gestion de crise, vous n'avez pas besoin d'un système d'information géographique complet, la prochaine mise à jour de QGIS (3.10.1) vous permettra d'[exporter vos cartes en geoPDF](https://blog.my-poppy.eu/qgis3_10), permettant de sélectionner et désélectionner les couches comme dans un vrai SIG.

Voulez-vous en savoir plus ? Venez [suivre une formation](https://blog.my-poppy.eu/workshops/) ou [contactez-nous](info@my-poppy.eu) pour des conseils personnalisés.


