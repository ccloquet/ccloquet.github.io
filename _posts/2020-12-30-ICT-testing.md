---
title: "Analyse de l'équipement et des services ICT nécessaires pour les centres de testing"
published: true
tags: [tools,ict,testing,covid19]
---
Récemment, nous avons participé à un appel d'offres de l'[AVIQ](https://www.aviq.be/) pour le montage de trois **centres de testing** en Région Wallonne. Au sein du volet logistique, Poppy était responsable des aspects ICT. Le consortium que nous avions intégré n'a pas remporté le marché, même si le prix du volet logistique n'était pas en cause. 

Pour éviter que l'analyse qui a été réalisée à cette occasion ne soit perdue, nous avons décidé de la partager avec vous, afin qu'elle puisse bénéficier à d'autres projets, tels que la vaccination, ou d'autres infrastructures de gestion de crise, en Belgique ou ailleurs **#plusfortsensemble** **#samensterker** **#11millions**. 

Qu'en pensez-vous ? Le dipositif proposé est-il adapté à l'enjeu ? Sous-dimensionné ? Overkill ? Partagez vos idées !  Vous voulez une analyse profesionnelle pour un projet *mission-critical* ? Discutons-en !

**Vision générale**
L'AVIQ souhaite déployer 3 centres de testing, chacun permettant de tester au minimum 750 personnes par jour. L'emplacement de ces centres n'est pas déterminé à priori, si bien qu'une solution "tout-terrain" permet la plus grande souplesse. 

Les centres doivent fonctionner pendant un minimum de 6 mois, rencontrant potentiellement des conditions de panne d'électricité hivernales, telles que nous en avons vécues en 2017 et 2018, voire du délestage, des pannes de réseau telles qu'elles surviennent fréquemment, etc.

La performance des centres de testing dépend de manière critique de la robustesse de l’infrastructure ICT et de l’approvisionnement électrique.

Toute interruption de la chaîne de test peut mener à des risques de contamination dans la file d'attente, des coûts d'inactivité du personnel, des retards dans les résultats pour les patients et au final une moins grande maîtrise de l'épidémie, sans compter le défaut d'image qui découlerait d'une telle désorganisation.

Nous proposons dès lors une solution ICT orientée disponibilité, et visant un temps de résolution de la majorité des incidents de 10 minutes. Cet objectif est rencontré grâce à :

  (1) une infrastructure robuste et redondante, de qualité "chantier" ;
  (2) un plan de **maintenance préventive** pour détecter les problèmes avant qu'ils ne surviennent ;
  (3) un plan de **réaction en cas d’incidents**, basé sur une **analyse de risques**, du matériel de **réserve pré-positionné**, et pouvant compter sur du personnel contactable-rappelable à proximité des centres.

Pour nous seconder, nous pouvons compter sur des sociétés leaders sur leurs marchés, avec du personnel qualifié et réactif, et des contrats de maintenance et de dépannage à 2 niveaux.

Nous appliquons les principes de service « [ITIL](https://fr.wikipedia.org/wiki/Information_Technology_Infrastructure_Library) », et en particulier :

 - Garder les choses **simples et pratiques** grâce à du matériel simple et robuste ;
 - **Apprentissage en continu** grâce à un système de reporting des incidents et **presqu’incidents** sur l’ensemble des centres ;
- Une **réflexion hoslistique** et une collaboration étroite par une intégration de l’équipe IT dès l’analyse des besoins.

**Matériel**

*Équipement de base* fourni par [OneTec](https://www.onetec.eu/) :

- matériel d'encodage : Laptop Intel Core i5 15,6'', lecteur de codes-barres, lecteur eID
- matériel administratif : Laptop Intel Core i5, imprimante A4, GSM
- consommables : papier A4, cartouches d'encre

*Accès à internet* fourni par [VENN](https://venntelecom.com/) , redondant à 3 niveaux :
  - **filaire** lorsque c’est possible (ligne xDSL installée par Proximus) ;
  - **4G** (2 modems indépendants disposant chacun d’une carte SIM multi-opérateurs. Les 2 modems sont configurés sur 2 opérateurs différents, avec bascule automatique en cas de panne). 2 antennes GSM externes permettent une meilleure réception réseau en milieu isolé ;
  - internet par **satellite** (VSAT).

  Les 3 liens sont agrégés au sein d’un même routeur de qualité « chantier » (routeur Peplink, pour une facilité d’utilisation par l’utilisateur final)

*Téléphonie* fournie par [AlloCloud](https://www.allocloud.com/fr)
- La téléphonie IP permet une indépendance par rapport à un fournisseur spécifique et une résilience en cas de panne. 
 - Des GSM de secours avec connexion 4G sont également prévus.

Enfin, sur site, les communications seront assurées par  des radios portables professionnelles Kenwood avec lience IBPT, fournies clés en main avec chargeurs et service par [LocationTalkie](http://locationtalkie.be/).

*Equipement de secours* :
- groupe électrogène de secours (soit alimentation de ville + 1 groupe électrogène, soit 2 groupes électrogènes)
- des UPS permettent au matériel critique (routeurs) de continuer à fonctionner le temps que le générateur de secours soit mis en route ;
- une pièce de rechange de chaque  matériel critique (routeur compris) est prévue sur place. En cas de panne, le matériel est remplacé et le fournisseur achemine une nouvelle pièce de rechange.

**Analyse de risques préliminaire**

Afin de prioriser notre proposition, nous avons réalisé une analyse de risques préliminaire. Celle-ci sera affinée une fois le projet démarré, et tout au long du projet.

<img style="height:350px" src="https://blog.my-poppy.eu/images/20201124_analyse_de_risques_v3-1.png?a=1">

<img style="height:350px" src="https://blog.my-poppy.eu/images/20201124_analyse_de_risques_v3-2.png?a=1">

**Services**
Outre le monitoring et le support technique rapide prévu par les fournisseurs, un plan de **maintenance préventive** est mis en place 1 x / semaine. Il permet de **détecter les problèmes avant qu'ils ne conduisent à une panne**. Il s'agit notamment de :
  - Vérification des problèmes potentiels (humidité, rayons directs du soleil, câbles détachés, …)
  - Nettoyage du matériel (dépoussiérage, …)
  - Mises à jour des PC pour éviter les attaques informatiques
  - Éventuel remplacement préventif du matériel si à risque
  - Test des systèmes de secours (1x/mois)

**Apprentissage en continu**

Le système proposé est résilient aux pannes par design. Le risque zéro n’existe pas, si bien qu’un plan de contingence est prévu.

Afin d’améliorer le système en continu en apprenant des défaillances, les **incidents seront enregistrés** sur un formulaire en ligne, en mentionnant : date/heure/lieu, priorité (critique, normal, bas, presque-incident), nature, description, **causes organisationnelles** (ex : manque de formation, choix de l’emplacement de l’installation, procédure inadéquate, …). Les maintenances et **presqu’incidents** (= situations anormales n’ayant pas entraîné de dégâts) seront enregistrées aussi car elles annoncent des incidents potentiels. En effet, un incident est souvent précédé de plusieurs presqu’incidents.

**Procédures**
Afin de simplifier les opérations, une série de procédures est prévue. Celles-ci ont vocation à être **améliorées grâce au système d'apprentissage en continu**. Il s'agit notamment de :

- Installation
- Test du système de production
- Test périodique des défaillances et des systèmes de secours
- Maintenance préventive
- Suivi des alertes (disponibilité, consommation, météo, ...)
- Réaction aux incidents, notamment :
   - Appel du support
   - Support à distance par téléphone/TeamViewer
   - Support en présentiel
    - Problèmes de connectivité
    - Routeur en panne
   - Panne d'électricité
   
Qu'en pensez-vous ? Le dipositif proposé est-il adapté à l'enjeu ? Sous-dimensionné ? Overkill ? Partagez vos idées !  Vous voulez une analyse profesionnelle pour un projet *mission-critical* ? Discutons-en !

<iframe src="https://www.my-poppy.eu/cnt/cnt.php" width="1" height="1" frameBorder="0">

