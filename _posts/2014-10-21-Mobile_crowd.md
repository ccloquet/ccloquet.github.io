---
title: Des données mobiles pour observer la foule
---

**Cet article examine différentes possibilités offertes aux organisateurs pour observer, voire anticiper, la foule et son état d'esprit. Nous abordons successivement les réseaux sociaux, les données de téléphonie mobile, les capteurs Bluetooth et Wifi, et les applications smartphone.**

Qu'on organise les Jeux Olympiques ou un concert local, un rassemblement de foule s'accompagne de risques spécifiques. Souvent, la taille de la foule, sa densité et son comportement influencent le bon déroulement de l'évènement. Des erreurs dans la gestion de foules importantes conduisent parfois à des catastrophes, pesant à long terme sur les communautés locales, détruisant vies, espoirs et réputations [1-8].


<img src='https://upload.wikimedia.org/wikipedia/commons/c/c6/2010_07_24_arne_mueseler_0223.jpg'>

<center>
Love Parade de Duisburg, 2010 © Arne Müseler
</center><br>

Les exemples de catastrophes ne manquent pas. En 2010, la Love Parade de Duisburg (Allemagne) a rassemblé plus d'un million de participants sur un site prévu pour le quart, sans qu'un tel afflux n'ait pu être anticipé par les autorités [2, 9]. Un mouvement de foule s'en est suivi causant 21 morts et 510 blessés.

Les évènements de moyenne ampleur ne sont pas épargnés. À Lille, France (2004), un concert a dû être annulé car la police a été débordée par l'afflux massif de 60 000 personnes au lieu des 25 000 annoncées [10]. Une situation similaire s'est produite à Bruxelles, Belgique, lors des Fêtes de la Musique en juin 2011 [11]. L'évènement a attiré plus de 50 000 personnes sur une place qui pouvait en contenir 22 000. De nombreux malaises et accidents ont été constatés, prenant de court le personnel et les moyens policiers et médicaux qui avaient été prévus.

Il ne faut pas attendre la catastrophe pour gâcher la fête. Annuler un concert ou un évènement mécontente les participants et coûte de l'argent. Et un évènement à hauts risques s'expose à des primes d'assurances plus élevées qu'un évènement sous contrôle, ou pour lequel les risques peuvent être anticipés.

Une catastrophe a souvent des causes multiples, notamment organisationnelles [9], si bien qu'améliorer la sécurité passe en priorité par une bonne évaluation des risques, des procédures établies mais souples et une culture de la qualité [12-16].

Que faire cependant quand le risque résiduel évolue ? Comment gère-t-on un évènement organisé pour la première fois, ou dont le contenu diffère de celui de l'an passé ? Des outils d'observation de foule et, si possible, d'anticipation sont nécessaires.

Observer et anticiper la foule peut prendre plusieurs formes. Outre les moyens d'observation directe sur site (observateurs, comptages manuels, hélicoptères et, plus récemment, drones) --  qui doivent malgré tout être interprétés [17-20] -- et les méthodes traditionnelles de prévision [21] on peut faire appel à des observations indirectes. L'objectif de cet article est de présenter, sans prétendre être exhaustif, quelques alternatives qui s'offrent aux organisateurs.

Nous aborderons brièvement l'utilité des réseaux sociaux, du monitoring du réseau GSM, de la détection d'appareils utilisant des capteurs Bluetooth^i^ et Wifi et des applications smartphone.

**Réseaux sociaux**

Même si Facebook permet aux internautes de signaler qu'ils participent à un évènement, les estimations ainsi obtenues ne sont pas toujours correctes. Ainsi, 1000 personnes avaient annoncé leur participation à une *rave party* à Bruxelles, alors qu'une [centaine seulement y a pris part](https://facebook.com/events/245720722156275,%20dhnet.be/s/art/51b7703de4b0de6db97c6e3c). À l'inverse, le concert « Taratata » organisé en 2011 à Bruxelles a drainé 50 000 personnes, alors que seules [29 000 avaient déclaré y participer](https://www.facebook.com/events/152778158125774).

Autre source d'information possible : les tweets [22-23]. La plupart d'entre eux sont publics et certains sont géolocalisés, permettant d'observer l'évolution du nombre de tweets au cours du temps dans une région donnée.

Certains *checkins* Foursquare sont par ailleurs publiés sur Twitter, et l'on peut souvent les extraire en filtrant les tweets au moyen du nom de l'évènement ou du lieu, et du mot-clé '4sq.com'. Comme tout le monde n'est pas actif sur Twitter ou Foursquare, il reste à déterminer un facteur d'échelle pour convertir le nombre de micro-messages en nombre de personnes présentes. L'expérience acquise en Belgique nous apprend que ce facteur oscille autour de 1000, mais varie selon l'évènement, voire pour différentes éditions du même évènement. Enfin, la prudence est de mise si l'on souhaite utiliser les réseaux sociaux dans un but prédictif [24].

**D'une manière générale, les messages relayés sur les réseaux sociaux sont donc difficilement utilisables pour quantifier précisément l'évènement. Par contre, comme leur contenu est public, ils donnent une idée de l'état d'esprit des participants.**

En pratique, on peut acquérir des tweets soi-même en temps réel, via [l'API *streaming* de Twitter](https://dev.twitter.com/streaming/overview), mais cela requiert quelques connaissances techniques. Le contenu des messages collectés peut alors être analysé au moyen d'un des [analyseurs de sentiments](https://sentistrength.wlv.ac.uk) [disponibles](https://liwc.net/tryonline.php) afin de mieux comprendre l'état d'esprit des participants. On peut également choisir d'utiliser une interface existante comme [Twitcident](https://wis.ewi.tudelft.nl//twitcident) :

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/CF6avObWiF0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
</center>



**Mesures à grande échelle : GSM**

Si l'évènement s'étend sur une ville entière, on peut considérer l'utilisation de données de téléphonie mobile en temps réel. Illustrée pour la première fois en 2006 par des chercheurs du [Senseable City Lab](https://senseable.mit.edu/realtimerome/) du Massachussets Institude of Technology [25], cette technique permet d'observer le nombre de communications ou de messages textes, en temps réel ou différé, selon la technologie présente chez l'opérateur de téléphonie mobile.

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/RbhBz5UwRDQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

Real Time Rome (Senseable City Lab)

Plusieurs évènements ont ainsi été analysés, comme les Fêtes de la Musique à Paris [26], ou des matches de football au Brésil [27, 28].

L'exploitation commerciale de l'analyse de données de téléphonie mobile commence à peine. Par exemple, l'opérateur français Orange commercialise la solution « [Flux Vision](https://orange-business.com/fr/produits/flux-vision) [8] » pour visualiser des flux touristiques ou évènementiels en temps réel ou différé.

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZGDS2SjpjYI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

<center>
Fêtes de la Musique, Paris, 2008 (Orange & Faber Novel)
</center>

**Cette technologie est intéressante pour visualiser l'évènement à grande échelle. L'utiliser temps réel est parfois difficile, et la granularité des mesures est limitée par la taille des cellules GSM.**

D'autres solutions émergent, venant des mesures techniques sur le réseau, permettant une granularité plus fine et [mesurant même les appareils qui ne sont pas en communication](http://www.arieso.com/products/applications/geo-insights/).

**Mesures sur place :**

**capteurs Bluetooth, Wifi et GSM**

Si l'on s'intéresse à l'évènement à plus petite échelle, par exemple aux flux entre différentes zones, on pourra se tourner vers des capteurs spécifiques. Certains sont capables de détecter les interfaces Bluetooth et/ou Wifi des smartphones, tandis que d'autres permettent de compter le nombre d'appareils GSM.

Le groupe CartoGIS de l'Université de Gand (Belgique) a par exemple étudié en détail l'utilisation de capteurs Bluetooth pour observer la foule lors de grands évènements [29-30]. [Une expérience similaire a été menée au Paléofestival (Nyon, France) en 2010](http://actu.epfl.ch/news/le-bluetooth-revele-la-dynamique-des-foules-au-p-8/). D'autres sociétés commercialisent des [capteurs de GSM](https://dfrc.ch), indépendants des opérateurs de téléphonie mobile.

**Permettant une granularité aussi fine que le permet l'installation des détecteurs, le prix à payer se situera dans l'installation du matériel.**

**Apps**

Les applications smartphone permettent d'enregistrer non seulement la localisation de l'utilisateur, mais également les actions effectuées sur l'application.

Il est ainsi possible d'observer une augmentation du nombre de personnes demandant le trajet vers l'évènement, ou du nombre de personnes cherchant les parkings ou les points d'eau. On peut alors évaluer les flux, que ce soit entre zones de l'évènement, ou depuis l'extérieur vers l'évènement.

Enfin, une application permet de communiquer des messages de sécurité vers les participants, au moyen de notifications push par exemple.

Dans le cadre du projet « Socionical », une équipe menée par l'ETH (Zurich) a par exemple déployé une telle solution lors d'évènements majeurs à Londres et à Amsterdam [31].
<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/vrKLOGSOVYk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

London Mayor show : utilisation d'une application smartphone pour gérer les risques liés à la foule.

**Utiliser une application smartphone présente plusieurs avantages : seules les personnes intéressés par l'évènement sont observées, l'observation peut se faire depuis le point d'origine jusqu'à l'évènement. L'inconvénient est ici que l'utilisateur devra installer l'application sur un smartphone et qu'un réseau GSM ou Wifi (non saturé) est nécessaire pour transmettre les informations en temps réel.**

**Conclusion**\
On le voit, chaque technique a son champ d'application et ses inconvénients. Dépendant de l'évènement projeté, une ou plusieurs d'entre elles pourra être mise en œuvre pour assurer le divertissement de chacun en toute sécurité.

**Et vous ?**\
Quels problèmes rencontrez-vous ? Quelles solutions mettez-vous en place pour y répondre ? Avez-vous des besoins spécifiques ? N'hésitez pas à nous contacter pour en discuter par e-mail ou autour d'un café : <christophe@my-poppy.eu>.

Cet article a été publié originalement en 2014 sur guideorganisateur.com.

**Références**

[1] Hsieh, Y.-H., Ngai, K. M., Jr, F. M. B., Hsu, E. B., 2009. *Epidemiological characteristics of human stampedes*. Disaster Med. Pub. Health Prep. 3, 217-223.

[2] Johansson, A., Batty, M., Hayashi, K., Bar, O. A., Marcozzi, D., Memish, Z. A., 2012. *Crowd*

*and environmental management during mass gatherings*. Lancet Infect Dis 12, 150-156.

[3] Ngai, K. M., Burkle, F. M., Hsu, A., Hsu, E. B., 2009. *Human stampedes: A systematic review of historical and peer-reviewed sources*. Disaster Med. Pub. Health Prep 3, 191-195.

[4] Sanders, A. B., Criss, E., Steckl, P., Meislin, H. W., Raife, J., Allen, D., 1986. *An analysis of medical care at mass gatherings*. Ann Emerg Med. 15, 515-519.

[5] Soomaroo, L., Murray, V., 2012. *Disasters at mass gatherings: Lessons from history*. PLoS Curr Disasters 4

[6] Steffen, R., Bouchama, A., Johansson, A., Dvorak, J., Isla, N., Smallwood, C., Memish, Z. A., 2012. *Non-communicable health risks during mass gatherings*. Lancet Infect Dis 12, 142-149.

[7] Tam, J., 2012. *Research agenda for mass gatherings: a call to action*. Lancet Inf Dis 12, 231-239.

[8] US department of Homeland security, 2012. *Terrorists' interest in attacking theaters and similar mass gatherings*.

[9] Helbing, D., Mukerji, P., 2012. *Crowd disasters as systemic failures: Analysis of the Love Parade disaster*. EPJ Data Science 1 (7), 1-40.

[10] Centres de ressources du spectacle vivant, 2004. *Organiser un évènement artistique sur l'espace public : quelle liberté, quelles contraintes ?* compte rendu de la journée d'information des centres de ressources du spectacle vivant.

[11] Radio Télévision Belge Francophone, Journal Télévisé, 22 Juin 2011. Bruxelles: affluence record sur la place des Palais pour Taratata. http://www.rtbf.be/info/medias/detail fete-de-la-musique-affluence-record-sur-la-place-des-palais-pour-l-emission-taratata?id=6337053

[12] Health and Safety Executive , 2014, *Managing crowds safely , A guide for organisers at events and venues* http://www.hse.gov.uk/pubns/books/hsg154.htm

[13] Commonwealth of Australia, 1999. *Safe and Healthy Mass Gatherings*.  http://www.health.sa.gov.au/pehs/publications/ema-mass-gatherings-manual.pdf

[14] Government of Western Australia - Department of Health, 2009. *Guidelines for concerts, events and organized gatherings*. http://www.rgl.wa.gov.au/ResourceFiles/Publications/EventsGuide2009.pdf

[15] Interassociation de Sauvetage, 2003. *Directives pour l'organisation du service sanitaire lors de manifestations.\
*http://www.ivr-ias.ch/cms/upload/RL Veranstaltungen 03 F.pdf

[16] Ministère français de l'Intérieur, 2006. *Référentiel National Missions de sécurité Civile.* http://www.secourisme.net/IMG/pdf/RNMSC-DPS.pdf

[17] Watson, R., Yip, P., 2011. *How many were there when it mattered?* Significance 8, 104-107.

[18] de Grandpré, F., LeBlanc, M., 2010. *Veut-on d'une méthode précise d'évaluation des foules lors d'un défilé?* Conference of the travel and tourism research association

(Canada chapter). Québec

[19] Tyrrell, B. J., Ismail, J. A., 2005. *A methodology for estimating the attendance and economic impact of an open-gate festival*. Event Management 9, 111-118.

[20] Raybould, M., Mules, T., Fredline, E., Tomljenovic, R., 2000. *Counting the herd. using aerial photography to estimate attendance at open events*. Event Management 6, 25-32.

[21] O'Toole, W., 2010*. Events Feasibility and Development From Strategy to Operations*. Butterworth Heinemann, Ch. Crowd Number Forecasting for Special Events: discovering the industry standard.

[22] Georgiev, P., Noulas, A., Mascolo, C., 2014. *The call of the crowd: Event participation in location-based social services*. arXiv, 1403.7657.

[23] Liang, Y., Caverlee, J., Cheng, Z., Kamath, K. Y., 2013*.* *How big is the crowd? Event and location based population modeling in social media*. 24^ème^ ACM Conference on Hypertext and Social Media.

[24] Gayo-Avello, D., 2012. *I wanted to predict elections with Twitter and all i got was this lousy paper*. arXiv, 1204.6441.

[25] Calabrese, F., Colonna, M., Lovisolo, P., Parata, D., Ratti, C., 2011. *Real-time urban monitoring using cell phones: A case study in Rome*. IEEE Trans Intell Transp Systems 12, 141-151.

[26] Morlot, F., Baccelli, F., Elayoubi, S. E., 2010. *An interaction-based mobility model for dynamic hot spot analysis*. Conference on Information communications. San Diego, CA.

[27] Xavier, F. H. Z., Silveira, L. M., Almeida, J. M., Malab, C. H., Ziviani, A., Marques-Neto,

H., 2013. *Understanding human mobility due to large-scale events*. Third conference on the

Analysis of Mobile Phone Datasets. Cambridge, MA.

[28] Xavier, F. H. Z., Silveira, L. M., Almeida, J. M., Ziviani, A., Malab, C. H., Marques-Neto, H.,

2012\. *Analyzing the workload dynamics of a mobile phone network in large scale events*. Proceedings of the first workshop on Urban networking. Nice, France.

[29] Versichele, M., Neutens, T., Delafontaine, M., de Weghe, N. V., 2012. *The use of Bluetooth for analyzing spatiotemporal dynamics of human movement at mass events: A case study of the Ghent festivities*. App. Geogr. 32, 208-220.

[30] Versichele, M., Neutens, T., Goudeseune, S., van Bossche, F., van de Weghe, N., 2012. *Mobile mapping of sporting event spectators using bluetooth sensors: Tour of Flanders 2011*. Sensors 12, 14196-14213.

[31] Wirz, M., Franke, T., Roggen, D., Mitleton-Kelly, E., Lukowicz, P., Trster, G., 2013. *Probing crowd density through smartphones in city-scale mass gatherings*. EPJ Data Science 2, 5.

**Crédit photo**

Arne Müseler arne.mueseler@gmail.com - http://www.arne-mueseler.de. Licence CC BY-SA 3.0
