---
title: Mode dégradé : envoyer des images par SMS 
---

En tant que travailleur humanitaire, vous est-il déjà arrivé de devoir transmettre des photos alors que vous aviez seulement accès à un réseau GSM 2G ? Dans ce cas, impossible d'utiliser une appli comme Whatsapp, voire le mail classique.

Il est bien sûr possible d'utiliser une liaison de données via satellite, mais c'est coûteux. Il existe aussi des solutions d'envoi de [données](http://www.stonepower.se/Images/WINO_ICT.pdf) et d'[images par radio](http://www.arrl.org/image-modes), que ce soit avec du matériel [radioamateur](http://www.nordichf.org/hf98/programmehf98.htm) ou [professionnel](https://www.rapidm.com/), et dans certains cas [avec une infrastructure très réduite](https://gotenna.com/), mais que faire si vous n'avez que votre smartphone en mains ?

Une petite appli peut vous aider ! ImageOverSMS vous permet en effet d'envoyer une image... par SMS. 

En pratique, après un petit peu de configuration (vous aurez besoin d'un [numéro de téléphone virtuel](https://www.twilio.com/) Twilio), vous prenez votre photo au moyen de l'appli. Celle-ci transforme ensuite automatiquement l'image en une série de lettres et de chiffres (au moyen du [codage en base 64](https://fr.wikipedia.org/wiki/Base64)). Cette série est à son tour scindée en blocs de +/- 140 caractères, et chacun d'eux est envoyé par SMS.

Pour que cela fonctionne, le fichier doit être le plus petit possible. Pour y arriver, l'appli réduit la qualité de l'image. Oubliez donc les images de haute définition... mais ça fait le job :

![enter image description here](https://raw.githubusercontent.com/ccloquet/image_over_sms/master/screenshot.PNG)
Cerise sur le gâteau, vous gérez vous-mêmes votre application, sans devoir installer de serveur ! En effet, vous pouvez voir les images que vous envoyez via ce [lien](https://blog.my-poppy.eu/image_over_sms/render.html). Vous pouvez même héberger ce lien sur votre ordinateur. C'est le principe du "serverless".

Pour envoyer les images, seuls un smartphone et une connexion 2G sont dès lors nécessaires. Pour les consulter, une simple connexion à internet suffit. 

Plus d'infos sur le fonctionnement et la configuration sur https://github.com/ccloquet/image_over_sms.
L'appli est disponible pour Android sur le Play Store et le code source est disponible en [open source sur GitHub](https://github.com/ccloquet/image_over_sms).

Dans le futur, on pourrait même imaginer l'envoi d'images entre deux smartphones, entièrement au moyen de SMS, sans passer par internet !

Qu'en pensez-vous ?

