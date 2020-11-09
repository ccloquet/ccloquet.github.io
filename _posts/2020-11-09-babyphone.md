---
title: "Un babyphone numérique amélioré pour les soins intensifs"
published: true
tags: [tools,icu]
---
Au cours de la crise de la Covid-19, des unités de soins intensifs temporaires ont été créées, avec des chambres d'isolement. Ces chambres ont été équipées de matériel biomédical (monitorings, pousses-seringues, circulations extra-corporelles, ...), dont les **alarmes sont souvent inaudibles en dehors des chambres**. ÀX "5!/ cause de l'urgence et de la nature temporaire de ces chambres, ces appareils ne sont pas toujours reliés à une console centrale, et lorsque c'est le cas, il n'y a pas toujours d'infirmier.e derrière cette console.

Dans certains cas, des babyphones sont utilisés pour transmettre les alarmes vers l'extérieur des chambres, mais (a) ils sont souvent à un endroit fixe, pas toujours à proximité du/de la soignant.e, (b) ils ne peuvent pas être portés par plusieurs personnes et (c) leurs alarmes ne sont pas spécifiques : il est souvent difficile de dinstinguer quel alarme sonne, ce qui cause des pertes de temps et d'énergie our le staff (en cas de faux positifs) ou des soins dégradés (en cas de faux négatifs).

Le besoin d'une solution robuste et versatile est dès lors apparue, afin de relaye rles alarmes de n'importe quel appareil biomédical, et de spécifier quelel alarme sonne. Nous proposons une solution basée sur un ensemble d'appareils robustes et bon marché ([Raspberry Pi 4](https://shop.mchobby.be/fr/raspberry-pi-4/1609-raspberry-pi-4-2-go-de-ram-dispo-en-stock--3232100016095.html) et smartphones dédiés) mis en réseau. La distinction entre différentes alarmes/appareils est réalisée en attachant **un micro par appareil** et grâce à une **analyse fréquentielle** des sons émis.

<center>
<img style="height:350px" src="https://raw.githubusercontent.com/ccloquet/ICU-babyphone/main/icu_babyphone.png"> 
</center>
  
Plus d'infos sur ce projet sur [GitHub](https://github.com/ccloquet/ICU-babyphone). Discutons-en et développons-le ensemble!

N'hésitez pas à suivre également notre [blog](https://blog.my-poppy.eu/events_upcoming) sur lequel vous trouverez aussi les prochains évènements en gestion de crise. 

<iframe src="https://www.my-poppy.eu/cnt/cnt.php" width="1" height="1" frameBorder="0">

