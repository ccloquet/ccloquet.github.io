---
title: Mode d�grad� : envoyer des images par SMS
---

En tant que travailleur humanitaire, vous est-il d�j� arriv� de devoir transmettre des photos alors que vous aviez seulement acc�s � un r�seau GSM 2G ? Dans ce cas, impossible d'utiliser une appli comme Whatsapp, voire le mail classique.

Il est bien s�r possible d'utiliser une liaison de donn�es via satellite, mais c'est co�teux. Il existe aussi des solutions d'envoi de [donn�es](http://www.stonepower.se/Images/WINO_ICT.pdf) et d'[images par radio](http://www.arrl.org/image-modes), que ce soit avec du mat�riel [radioamateur](http://www.nordichf.org/hf98/programmehf98.htm) ou [professionnel](https://www.rapidm.com/), et dans certains cas [avec une infrastructure tr�s r�duite](https://gotenna.com/), mais que faire si vous n'avez que votre smartphone en mains ?

Une petite appli peut vous aider ! ImageOverSMS vous permet en effet d'envoyer une image... par SMS. 

En pratique, apr�s un petit peu de configuration (vous aurez besoin d'un [num�ro de t�l�phone virtuel](https://www.twilio.com/) Twilio), vous prenez votre photo au moyen de l'appli. Celle-ci transforme ensuite automatiquement l'image en une s�rie de lettres et de chiffres (au moyen du [codage en base 64](https://fr.wikipedia.org/wiki/Base64)). Cette s�rie est � son tour scind�e en blocs de +/- 140 caract�res, et chacun d'eux est envoy� par SMS.

Pour que cela fonctionne, le fichier doit �tre le plus petit possible. Pour y arriver, l'appli r�duit la qualit� de l'image. Oubliez donc les images de haute d�finition... mais �a fait le job :

![enter image description here](https://raw.githubusercontent.com/ccloquet/image_over_sms/master/screenshot.PNG)
Cerise sur le g�teau, vous g�rez vous-m�mes votre application, sans devoir installer de serveur ! En effet, vous pouvez voir les images que vous envoyez via ce [lien](https://blog.my-poppy.eu/image_over_sms/render.html). Vous pouvez m�me h�berger ce lien sur votre ordinateur. C'est le principe du "serverless".

Pour envoyer les images, seuls un smartphone et une connexion 2G sont d�s lors n�cessaires. Pour les consulter, une simple connexion � internet suffit. 

Plus d'infos sur le fonctionnement et la configuration sur https://github.com/ccloquet/image_over_sms.
L'appli est disponible pour Android sur le Play Store et le code source est disponible en [open source sur GitHub](https://github.com/ccloquet/image_over_sms).

Dans le futur, on pourrait m�me imaginer l'envoi d'images entre deux smartphones, enti�rement au moyen de SMS, sans passer par internet !

Qu'en pensez-vous ?

