---
title: "Passer à Signal en sécurité civile ?"
published: true
tags: [whatsapp,ict,signal,element,telegram,gdpr]
---

Passer à Signal en sécurité civile ?
-
Whatsapp a récemment adapté ses [conditions d'utilisation](https://www.whatsapp.com/legal/terms-of-service/?lang=fr). Elles ne devraient pas directement impacter les clients européens, mais c'est une bonne occasion de faire le point sur l'intérêt de cette application en sécurité civile.

Après de premières expérimentations par quelques pionniers en 2015 et avant, son utilisation a démarré en Belgique, dans l'urgence [au cours des attentats de mars 2016](https://www.rtl.be/info/belgique/faits-divers/attentats-a-bruxelles-voici-pourquoi-la-police-a-du-communiquer-via-whatsapp-pendant-les-operations-de-secours-805347.aspx), suite à la défaillance du réseau [ASTRID](https://www.astrid.be).

Cinq ans plus tard, l'urgence est passée. Qu'en est-il aujourd'hui ? Du point de vue de la gouvernance, Whatsapp pose notamment question sur sa capacité à permettre à un employeur de respecter le [RGPD](https://fr.wikipedia.org/wiki/R%C3%A8glement_g%C3%A9n%C3%A9ral_sur_la_protection_des_donn%C3%A9es) vis-à-vis de ses employés (cf. à ce sujet mon <a href='https://blog.my-poppy.eu/Whatsapp'>analyse de janvier 2019</a>).

Le choix d'un outil (ici, de messagerie) doit cependant reposer sur l'analyse des principaux **coûts & bénéfices [analysés selon différents critères](https://blog.my-poppy.eu/decider)**. La liste de critères et leur pondération appartient à chaque organisation, voire à chaque "culture". 

En voici un exemple succinct, basée sur ma compréhension de la culture de la sécurité civile (plus de détails sur les critères en fin de ce post) :
<center><img src='https://blog.my-poppy.eu/images/ilffoifdofkjadna.png?a=1'></center>

En gestion de crise, la **simplicité**, la **disponibilité** et la **résilience aux conditions de travail dégradées** sont souvent plus appréciées par les utilisateur.rice.s que les autres facteurs, *a fortiori* dans un environnement multi-organisations, et sont dès lors souvent plus fortement pondérées que les autres dans ce tableau. La sécurité (confidentialité, vie privée, intégrité, ...) mériterait cependant une attention plus grande. 

Vu le mouvement actuel vers **[Signal](https://signal.org/fr/)**, c'est peut-être un bon moment d'y passer également, car il respecte mieux la vie privée, tout en faisant au moins aussi bien que Whatsapp sur les autres critères. 

**Inconnues majeures cependant** : sa **résilience aux condition de réseau dégradées**, et sa **disponibilité** (cf plus loin).


Revue rapide de quelques outils
-
**Whatsapp**

Le mérite essentiel de [Whatsapp](https://www.whatsapp.com) sur les autres applications est qu'il ~~est~~ était facile et rapide d'inclure quelqu'un dans une discussion, puisque la personne ~~dispose~~ disposait déjà l'application et l'~~utilise~~ utilisait au quotidien. Whatsapp est chiffré de bout en bout, les messages restent donc confidentiels (même s'il y a de temps en temps des failles). Ce qu'elle enregistre au sujet des utilisateurs/trices sont les [métadonnées](https://www.numerama.com/politique/161153-whatsapp-cache-le-contenu-mais-garde-toujours-les-metadonnees-du-contenant.html) (ce qui représente une quantté considérable de données).

**Telegram**

[Telegram](https://telegram.org/) est utilisable sur PC sans avoir besoin d'un GSM connecté à internet, et est programmable, ce qui présente certains atouts pour la sécurité civile. Par contre, il est moins chiffré que Whatsapp (il faut volontairement créer un "Secret Chat" pour que les données soient chiffrées).

**Signal**

À ce jour, Signal est un bon compromis. Il est (devenu) "grand public", il est chiffré de bout en bout avec un algorithme de grande qualité, dispose des fonctionnalités essentielles de Whatsapp (y compris les appels vidéos) et le code est open source (= chacun.e peut vérifier que le chiffrement est solide). La [Commission Européenne l'utilise d'ailleurs pour les contacts avec l'extérieur](https://www.theverge.com/2020/2/24/21150918/european-commission-signal-encrypted-messaging).

Attention que Signal (tout comme Telegram et Whatsapp) ne publie pas ses statistiques de **disponibilité**, et que les utilisateurs n'ont **aucune garantie ni recours contre une éventuelle panne**. Même si l'équipe est très motivée, les développeurs n'ont pas la sécurité civile comme focus et n'ont aucune obligation, ni de résultat, ni de moyens. L'historique des pannes et une analyse plus approfondie peut donner un meilleur aperçu de ce qu'on peut en  attendre en termes de disponibilité.

Question résilience à la **congestion du réseau** GSM : bien que Signal fonctionne aussi avec une connexion "Edge", il n'est pas clair comment elle se compare à Whatsapp en cas de congestion, et ce point est à étudier en laboratoire avant de prendre une décision de migration.

**Element**

Element.io (l'appli utilisée par le gouvernement français, mais pas que) utilise des serveurs **décentralisés**, ce qui augmente encore (théoriquement) la sécurité et la robustesse. Elle peut être installée sur des serveurs gérés par un service public ; reste à imaginer ensemble ce qui permettrait d'en assurer une haute disponibilité.

**Autres outils**

Pour aborder quelques autres outils couramment utilisés :

  - Le **mail** est très peu sécurisé (s'il n'est pas chiffré, cela revient à envoyer une carte postale que le facteur peut lire). Pourtant des documents qui ne devraient pas être lisibles par tous y circulent quotidiennement
  - le **SMS** est vulnérable également, au travers des protocoles [SS7](https://www.nextinpact.com/article/26416/104214-ss7-apres-interceptions-sms-securite-reseaux-mobiles-en-question).
  - **Microsoft Teams** (abondamment utilisé par les services publics) n'est pas chiffré de bout en bout et pose aussi question sur le plan de la souveraineté (by the way -- ce blog est hébergé sur GitHub une entreprise rachetée il y a peu par Microsoft). Au vu des outils utilisés, la souveraineté numérique en sécurité civile n'est pas  une priorité en Belgique.
- Sauf exception, les applications web métier ne sont pas résilientes aux congestions de réseau.

**Facteur humain**
La sécurité informatique repose en réalité beaucoup sur l'humain (cf, ex, [intrusion récente dans une réunion des ministres européens de la Défense](https://www.rtbf.be/info/medias/detail_un-journaliste-neerlandais-parvient-a-s-introduire-dans-une-videoconference-confidentielle-de-l-ue?id=10636662)) : protéger l'appli par mot de passe, utiliser un mot de passe différent par service, installer les mises à jour, etc

Enfin, une mitigation pour le risque d'indisponibilité est de s'habituer à [jongler avec différents outils](https://docs.my-poppy.eu/2016_kta_poppy_devancer_inattendu.pdf), de garder une curiosité pour la nouveauté et de [s'attendre à être surpris](https://www.lesechos.fr/2003/10/patrick-lagadec-il-faut-se-preparer-collectivement-a-la-surprise-675973).


**En conclusion**
-
Pour un déplacement latéral rapide à partir de Whatsapp compte tenu des contraintes actuelles : **Signal** est un bon candidat, **si l'on a conscience de ses faiblesses potentielles**. 

Au-delà, une analyse participative des coûts et bénéfices des services de messagerie dédiés à la sécurité civile s'impose : le gratuit peut se révéler très cher au final ! 

Enfin, au sein de la communauté de la sécurité civile, une plus grande culture de la sécurité (qui ne se limite pas à la confidentialité) permettra d'aborder avec plus de sérénité les défis de demain.


 
 
_D'accord, pas d'accord ? Discutons-en ! Contactez-nous via info@my-poppy.eu ou par [Facebook](https://facebook.com/mypoppyeu) / [Twitter](https://twitter.com/mypoppy_eu) / [Linkedin](https://www.linkedin.com/in/ccloquet/) !_



[1] Dans l'analyse coûts/bénéfices, plusieurs éléments interviennent, notamment :

-   vie privée (enregistrement des métadonnées, séparation perso-pro, ...)
-   confidentialité (gold standard : chiffrement de bout en bout)
-   souveraineté (= veut-on dépendre d'une appli non européenne pour de la gestion critique)
-   disponibilité (= quelles garanties que ça ne tombera pas en panne un vendredi à minuit, et si oui, quelles garanties que la panne sera vite réparée).
-   résilience aux lenteurs de réseau (ex : Whatsapp arrivera à transmettre un message sur un réseau congestionné, même si ça prend plusieurs minutes alors qu'un programme web-based s'arrêtera après quelques dizaines de secondes p. ex.)
-   simplicité (pour les utilisateurs + facilitation des workflows)
-   pérennité
-   prix




<iframe src="https://www.my-poppy.eu/cnt/cnt.php" width="1" height="1" frameBorder="0">

