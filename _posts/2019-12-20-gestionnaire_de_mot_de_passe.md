---
title: Qu'est-ce qu'un gestionnaire de mots de passe, et pourquoi en utiliser un ?
published: true
tags: [tools,security]
---

Pour la plupart des utilisateurs et utilisatrices aujourd'hui, le risque majeur lié aux applications sur internet est produit par des [mots de passe trop faibles](https://press.avast.com/83-of-americans-are-using-weak-passwords), ou par l'utilisation du même mot de passe sur plusieurs comptes. Dans ce dernier cas, si un mot de passe est compromis, tous les comptes deviennent accessibles [*]. 

Ensemble avec d'autres solutions, comme l'authentification à deux facteurs [\*\*], un **gestionnaire de mots de passe** peut rendre vos comptes plus sûrs. Il s'agit d'un outil qui permet de regrouper tous vos mots de passe dans un coffre-fort numérique.

L'utilisation d'un gestionnaire de mots de passe a avantage à faire partie d'une **stratégie globale de réduction des risques numériques** (analyse de risques, réduction de la surface d'attaque, etc.). Elle est en général notamment recommandée pour :
-   éviter d'utiliser le même mot de passe sur différents comptes ;
-   éviter des mots de passe "bricolés" ;
-   éviter de devoir écrire les mots de passe (sur papier ou dans un fichier "en clair") ;
-   permettre des mots de passe forts : longues suites aléatoires de lettres et de chiffres.

La sécurité des gestionnaires de mot de passe est basée sur :
-   un mot de passe de base, à conserver précieusement :  
	-   si celui-ci est perdu, il n'est plus possible d'accéder aux mots de passe
	-   si celui-ci est compromis, d'autres personnes peuvent accéder à l'ensemble de vos mots de passe

-   le chiffrement des mots de passe par le gestionnaire.  Les services comme [1password](https://support.1password.com/1password-security/) ou [Lastpass](https://www.lastpass.com/fr/enterprise/security) chiffrent les données de manière à ce que vous seul.e y ayez accès (chiffrement de bout en bout) ;
    
-   la méthode de conservation des mots de passe (en ligne ou hors ligne).

Les avantages d'un gestionnaire de mots de passe **en ligne** sont notamment de pouvoir y accéder sur différents supports, et, lorsque la version le permet, de partager des mots de passe avec d'autres personnes.

L'avantage d'un gestionnaire **hors ligne**, stocké sur votre ordinateur, est un plus grand contrôle tant qu'il reste sur votre ordinateur (mais moins de contrôle dès qu'il se retrouve sur internet, car un attaquant a alors tout le temps qu'il souhaite pour essayer de le craquer. Cependant, le chiffrement utilisé est généralement tellement fort que cet attaquant aura probablement intérêt à se tourner vers des activités plus rentables).

Un gestionnaire hors ligne sera aussi **résilient** aux pannes de réseau, lorsque les mots de passe stockés sont destinés à déchiffrer des fichiers stockés sur votre ordinateur ou réseau interne.

Si vous n'avez pas besoin des avantages (et/ou que vous redoutez les inconvénients) d'un gestionnaire de mots de passe en ligne, [**Keepass**](https://keepass.info/) est un bon candidat. Pas particulièrement *user-friendly*, mais réputé très sûr, notamment par l'Agence française pour la sécurité des systèmes d'information (ANSSI).

Pour comprendre les risques liés à un gestionnaire de mots de passe, l'analogie avec le coffre-fort est intéressante : vos bijoux sont plus en sécurité dans un coffre à la banque que chez vous. Cela n'empêche pas que les coffres de la banque puissent être forcés. [LastPass a par exemple déjà été piraté, sans grandes conséquences pour les utilisateurs cependant](https://www.01net.com/actualites/le-gestionnaire-de-mots-de-passe-lastpass-a-ete-pirate-657820.html).

Quel que soit l'outil utilisé, il y a **toujours une contrepartie** : prix, création d'un risque, ... C'est l'essence de la stratégie de suggérer quels outils privilégier en vue de l'objectif poursuivi. Impossible de se prémunir de tous les risques, il faut choisir. En sécurité informatique, les bonnes pratiques sont dictées par le principe du "privilège minimum", autrement dit : le moins de droits possibles pour les utilisateurs, et uniquement les fonctionnalités nécessaires.

Ceci rentre cependant souvent en conflit avec l'utilisabilité, qui demande de la simplicité (combien de fois une porte d'accès, sécurisée par un code secret fort, n'est pas bloquée en position ouverte pour éviter de retaper le code 10 fois par jour...) . Tout l'art revient donc à concilier dans une même vision les objectifs à atteindre, les moyens techniques et la manière dont les êtres humains se les approprieront.

Merci à l'utilisateur qui m'a posé cette question !

-------------------


[*] vérifiez [si un de vos comptes a été piraté](https://haveibeenpwned.com/). Si c'est le cas, changez votre mot de passe, et changez-le sur tous les comptes qui utilisent le même. 

[**] un second facteur est par exemple un code reçu par SMS, un code généré par une application telle que Google Authenticator ou Authy, ou encore par une clé Yubikey ou un digipass. Pour les applis à utiliser en getsion de crise, privilégiez un second facteur qui ne dépend pas du réseau GSM, afin d'éviter d'être coincés lorsque le réseau est saturé. Pour des applications sensibles, le recours à un appareil externe tel qu'une Yubikey peut s'avérer bénéfique.

<iframe src="https://www.my-poppy.eu/cnt/cnt.php" width="1" height="1" frameBorder="0">

