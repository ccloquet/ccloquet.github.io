---
title: "Un babyphone numérique amélioré pour les soins intensifs"
published: true
tags: [tools,icu]
---
**Motivation**: during the Covid-19 crisis, temporary intensive care units (ICU) with isolated rooms have been created and equipped with biomedical equipment (monitoring, ECMOs, ...). These devices fire alarms, but often the sound cannot be heard outside the room. Because of the temporary nature of the rooms, the devices are not linked to a central desk like in established ICU. When there is a central desk, no nurse is available to check it. 

Sometimes, babyphones are used to transmit the alarms from the room, but they cannot be carried by several people at a time, they are too far to be heard and their alarms are not specific: it is often difficult to distinguish which device is ringing, and that causes either losses of time and energy for the staff (false positives), or degraded care to the patients (false negatives).

There is therefore a need for a versatile and robust solution that can relay the alarms of any biomedical device and specify which device is ringing. The following solution is based on a set of Raspberry Pi devices. The distinction between different alarms/devices is done through attaching **one microphone per device**, and through the **frequency analysis** of the sounds, when each alarm has a different sound spectrum.


**Proposed solution** (_work in progress - to be adapted to the reality of the field - Let's collaborate! Feel free to discuss it in the issues_)
 
<center>
<img style="height:350px" src="https://github.com/ccloquet/ICU-babyphone/blob/main/icu_babyphone.png">&nbsp;&nbsp;<img style="height:350px" src="https://blog.my-poppy.eu/images/cmine2.PNG">
</center>
  
Plus d'infos sur ce projet sur [GitHub](https://github.com/ccloquet/ICU-babyphone).

N'hésitez pas à suivre également notre [blog](https://blog.my-poppy.eu/events_upcoming) sur lequel vous trouverez les prochains évènements en gestion de crise, et à venir échanger sur ces thématiques lors des [évènements que nous organisons](https://blog.my-poppy.eu/workshops). 

Au plaisir d'en discuter avec vous !

<iframe src="https://www.my-poppy.eu/cnt/cnt.php" width="1" height="1" frameBorder="0">

