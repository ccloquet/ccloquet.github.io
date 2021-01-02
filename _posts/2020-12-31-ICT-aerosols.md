---
title: "Quantifier le risque aérosol"
published: true
tags: [tools,ict,testing,covid19]
---

On sait désormais que les [principales voies de transmission](https://covid-19.sciensano.be/sites/default/files/Covid19/COVID-19_fact_sheet_ENG.pdf) du Sars-Cov-2 sont les gouttelettes, le contact nez-bouche-yeux par les mains ayant touché des objets contaminés, et les aérosols (micro-gouttelettes en suspension dans l'air pendant plusieurs dizaines de minutes).

Les contre-mesures aux gouttelettes et à la contamination par contact sont assez bien connues (distance, lavage des mains, masques, ...), tandis que la parade aux aérosols est le renouvellement de l'air. 

Mais quel est le risque aérosol associé à une situation donnée et combien d'air faut-il renouveler ?

La réponse n'est pas simple et fait encore l'objet de recherches. Des calculateurs existent cependant pour se forger une première opinion. Il s'agit par exemple de celui du [Max Planck Institute](https://www.mpic.de/4747361/risk-calculator?en), ou encore de celui de l'[Université du Colorado](https://docs.google.com/spreadsheets/d/16K1OQkLD4BjgBdO8ePj6ytf-RpPMlJ6aXFg3PrIQBbQ/edit#gid=1492878576), basés sur le modèle de [Wells-Riley](https://pubmed.ncbi.nlm.nih.gov/12950586/). C'est le modèle de l'UColorado qui a été utilisé pour réaliser les simulations que vous avez pu voir dans [El Pais](https://english.elpais.com/society/2020-10-28/a-room-a-bar-and-a-class-how-the-coronavirus-is-spread-through-the-air.html) et [Le Soir](https://plus.lesoir.be/336123/article/2020-11-12/un-salon-un-bar-et-une-classe-comment-se-transmet-le-coronavirus-dans-lair).

Parmi les paramètres de ces modèles figurent :
1. les caractéristiques du virus sur lesquelles des incertitudes subsistent (à noter que le [taux de reproduction _R<inf>t</inf>_ de la mutation britannique est estimé à **0,74 de plus** que le taux actuel](https://www.ecdc.europa.eu/sites/default/files/documents/COVID-19-risk-related-to-spread-of-new-SARS-CoV-2-variants-EU-EEA.pdf))
2. un paramètre de renouvellement d'air, l'ACH, pour "Air Changes per Hour". Sur cette échelle, 1 ACH correspond à un renouvellement de 63 % de l'air en 1 heure, 2 ACH correspondent au renouvellement de 86 % de l'air en 1 heure, etc. À noter que ces modèles se basent sur une hypothèse de mixage parfait de l'air, qui reste valide pour des volumes de moins de 300 m³.

La ventilation naturelle d'un logement ou d'une pièce de vie correspond à environ 0,5 ACH, tandis qu'une [salle d'attente de service d'urgence hospitalier](https://www.ashrae.org/file%20library/technical%20resources/standards%20and%20guidelines/standards%20addenda/170-2017/170_2017_p_20200302.pdf) se situe plutôt autour de 12 ACH dont 2 d'air extéreur (norme ASHRAE).

Comment évaluer l'ACH de votre bureau ou de votre classe ? Il faut pour cela évaluer le temps pour évacuer un gaz traceur. Le traceur le plus simple à utiliser est le dioxyde de carbone (CO<inf>2</inf>), à la fois car nous en émettons toutes et tous et car il existe des capteurs portables fiables et bon marché. Vous trouverez plus de détails sur la manière de procéder [ici](https://schools.forhealth.org/wp-content/uploads/sites/19/2020/08/Harvard-Healthy-Buildings-program-How-to-assess-classroom-ventilation-08-28-2020.pdf) et [ici](https://medium.com/@jjose_19945/how-to-quantify-the-ventilation-rate-of-an-indoor-space-using-a-cheap-co2-monitor-4d8b6d4dab44). 

Viser une valeur de max 900 ppm de CO<inf>2</inf> pendant min 95 % du temps vous permettra en plus de respecter l'[Arrêté royal du 2 mai 2019 modifiant le code du bien-être au travail en matière de qualité de l'air intérieur dans les locaux de travail](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjUrOKCmv3tAhUGCewKHVzdD6wQFjACegQIAhAC&url=https%3A%2F%2Fwww.etaamb.be%2Ffr%2Farrete-royal-du-02-mai-2019_n2019201857.html&usg=AOvVaw0YqNNkL0OaLBDvnMO5jlHn). Cependant, en fonction de la situation, cette valeur est peut-être encore trop élevée pour garantir un risque de transmission par aérosol suffisament faible.

Au delà de fournir un niveau de risque, une telle étude peut vous indiquer comment réduire ce risque: faut-il porter de meilleurs masques (ex: FFP2) ? Mieux ventiler, et comment (ex: combien de temps ouvrir les fenêtres, quelles fenêtres ouvrir) ? Filtrer l'air avec un filtre HEPA ? Réduire le temps passé dans le local ? À cet effet, les conseils de la [REHVA](https://www.rehva.eu/activities/covid-19-guidance) sont également précieux.

Vous n'avez pas le temps pour étudier toutes les subtilités de ce sujet, ni de mesurer et calculer ? Votre situation est plus compliquée ? Vous préférez la faire analyser par un physicien ? [Contactez-nous](mailto:info@my-poppy.eu) pour une analyse personnalisée !

<iframe src="https://www.my-poppy.eu/cnt/cnt.php" width="1" height="1" frameBorder="0">

