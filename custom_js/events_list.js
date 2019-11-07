//du 05/06/2019 au 07/06/2019 — Nancy, France                 Conférence INRS 2019-Les risques biologiques
var events = [
//['URL', 'TITRE', 'SOUS-TITRE', 'Dates et éventuellement heures', 'Lieu', 'prix', 'Date du jour ou du dernier jour en format YYYY-MM-DD'],
['https://www.hcfdc.org/fr/guest/Actualites', 'Échanges sur les bonnes pratiques des Plans Communaux de Sauvegarde', 'Haut Comité Français pour la Résilience Nationale', '22 novembre 2019', 'Paris', '25 €', '2019-11-22'],
['https://ec.europa.eu/jrc/en/event/training-course/evidence-policy-school-disaster-risk-management', 'Evidence for policy school  disaster risk management', 'DRMKC', '13-15 janvier 2020', 'Florence, Italie', 'prix : TBD', '2020-01-15'],  
['https://europa.eu/regions-and-cities/programme/sessions/465_en', 'Investing in forests  a clear contribution to solving the climate and biodiversity crises', 'European Week of Regions and Cities', '7 au 10 octobre 2019', 'Bruxelles', 'gratuit', '2019-10-10'],
['http://www.irma-grenoble.com/PDF/02institut/2019/matinales/matinale_06_flyer.pdf', 'Risques nucléaires et évolution de la doctrine nationale de sécurité civile', 'IRMA', '16 octobre 2019', 'Roussillon - France', 'gratuit', '2019-10-16'],
['https://www.psc-europe.eu/news-events/events/psce-conference-in-paris-2019.html', 'PSCE Conference in Paris 2019', 'PSC Europe', '3 au 5 décembre 2019', 'Paris', 'gratuit', '2019-12-05'],
['http://www.gidmc.org/', '2nd Edition of the Global Inclusive Disaster Management Conference and Exhibition', 'GIDMC', '1 et 2 juillet 2019', 'New Delhi', 'gratuit', '2019-07-02'],
['http://www.gi4dm2019.org/', 'GeoInformation For Disaster Management', 'GI4DM 2019', '3 au 6 septembre 2019', 'Prague', 'gratuit', '2019-09-06'],
['https://www.imdr.eu/offres/gestion/actus_818_38533-2252/entretiens-du-risque-2019.html', 'Dimension éthique dans la maîtrise des risques', 'entretiens IMDR', '3 et 4 décembre 2019', 'Paris', '75-420 €', '2019-12-04'],
['https://lambdamu22.sciencesconf.org/', 'Les risques au coeur des transitions', 'congrès IMDR', '12 au 15 octobre 2020', 'Le Havre', 'gratuit', '2020-10-15'],
['https://www.securityresearch-cou.eu/SRE-2020', 'SECURITY RESEARCH EVENT 2020', 'European commission', '25 et 26 novembre 2020', 'Bonn', 'gratuit', '2020-11-26'],
['https://www.eventbrite.com/e/cartographie-pragmatique-pour-coordinateurstrices-planu-tickets-77124931747', 'Cartographie pragmatique pour coordinateurs/trices planu', 'Formation Poppy', '13 février 2019 de 13 à 17h', 'Bruxelles', '120 €', '2019-02-13'],
['https://www.eventbrite.com/e/cartographie-pragmatique-pour-coordinateurstrices-planu-tickets-77124929741', 'Cartographie pragmatique pour coordinateurs/trices planu', 'Formation Poppy', '23 janvier 2019 de 13 à 17h', 'Bruxelles', ' 120 €', '2019-01-23'],
['https://www.facebook.com/gestioncrise/', 		'7ème session du MOOC Gestion de crise', 'Université Paris II & École des Officiers de la Gendarmerie Nationale', 'à partir du 6 janvier 2020', 'internet', 'gratuit', '2020-03-01'],
['https://sparkconferences.com/mesures-durgence/', 	'Planification des mesures d’urgence dans les établissements de soins de santé', '', '3-4 décembre 2020', 'Montréal', '150-700 CAN', 	'2020-12-04'],
['http://www.entente-valabre.com/technosdays/',		'Vers les technologies 3.0, de la formation à la gestion de crise', 	'Technos Days Valabre',	'mai 2020', 	'Valabre', 'gratuit',  	'2020-05-01'],
['https://www.chl.lu/fr/agenda/journee-securite-et-hopital-2019', 'Protection des hôpitaux face aux risques émergents', 'Société Luxembourgeoise de Médecine d’Urgence (info de <a href="https://www.linkedin.com/in/thomastonneau/">T. Tonneau</a>, formateur)', '17 octobre 2019', 'Luxembourg', '65-85 €', '2019-10-17'],
['https://www.diekeure.be/fr-be/formations/9860/ar-planification-durgence-locale-2019', 'AR Planification d’urgence locale 2019', 'Analyse des nouveautés les plus importantes', '14 novembre 2019', 'Wavre', '75 €', '2019-11-14'],
['https://idrim2019.com/', 'The 10th conference of the international society for Integrated Disaster Risk Management', 'iDRiM 2019', '16-18 octobre 2019', 'Nice (France)', '100-450 €', '2019-10-18'],
['https://www.eventbrite.com/e/securite-informatique-pour-coordinateurs-planus-et-gestionnaires-de-crise-tickets-74273322507', 'Sécurité informatique pour coordinateurs planus et gestionnaires de crise', 'Formation Poppy', '10 décembre 2019 de 13 à 17 h', 'Bruxelles', '120 €', '2019-12-10'],
['https://www.eventbrite.com/e/belgian-emergency-services-developers-gathering-tickets-71822227215', 'Belgian Emergency Services Developers Gathering', 'Atelier Poppy', '19 décembre 2019 de 14 à 17 h', 'Namur', 'gratuit', '2019-12-19'],
['http://www.safecluster.com/inscription-envirorisk-2019/', 'La gestion des risques à l\'ère du numérique', 'ENVIRORISK 2019', '12-13 décembre 2019', 'Arbois, France', '90-150 €', '2019-12-13'],
['https://www.diekeure.be/nl-be/opleidingen/9859/kb-lokale-noodplanning-2019', 'KB Lokale Noodplanning 2019', 'Analyse van de belangrijkste nieuwigheden', '21 octobre 2019', 'Kessel-Lo (Leuven)', '75 €', '2019-10-21'],
['https://zoom.us/webinar/register/WN_x5cs7KwWTDmYF9_E8abHhw', 'La préparation des hôpitaux aux situations sanitaires exceptionneles', 'Talk vidéo du HCFDC', '23 octobre 2019 - 12 h', 'Internet', 'gratuit', '2019-10-23'],
['http://www.irma-grenoble.com/PDF/02institut/2019/matinales/matinale_06_flyer.pdf', 'Risques nucléaires et évolution de la doctrine nationale de sécurité civile', 'IRMA', '16 octobre 2019', 'Rousillon - France', 'gratuit', '2019-10-16'],
['https://www.eventbrite.com/e/prenez-de-meilleures-decisions-grace-a-la-cartographie-avec-qgis-tickets-63645427186', 'QGIS pour les services de secours et de prévention', 'Formation Poppy', '7 & 21 novembre 2019', 'Bruxelles', '835 €', '2019-11-07'],
['https://www.eventbrite.com/e/prenez-de-meilleures-decisions-grace-a-la-cartographie-avec-qgis-tickets-63645427186', 'QGIS pour les services de secours et de prévention', 'Formation Poppy', '5 & 12 décembre 2019', 'Bruxelles', '835 €', '2019-12-05'],
['https://www.eventbrite.com/e/prenez-de-meilleures-decisions-grace-a-la-cartographie-avec-qgis-tickets-63645427186', 'QGIS pour les services de secours et de prévention', 'Formation Poppy', '3 & 10 octobre 2019', 'Bruxelles', '835 €', '2019-10-03'],
['https://racoli.be/nl/aankondiging-6e-racoli-symposium/', 'NOODPLANNING 3.0', '6de Racoli Symposium', '3 octobre 2019', 'Bilzen', '125 €', '2019-10-03'],
['https://www.meetup.com/fr-FR/OpenStreetMap-Belgium/events/264468195/', 'Missing Maps : améliorer OpenStreetMap pour MSF', 'atelier pratique', '24 septembre 2019 de 18-21 h', 'Bruxelles', 'gratuit', '2019-09-24'],
['https://www.eiseverywhere.com/emarketing/go.php?i=681447&e=Y2hyaXN0b3BoZUBteS1wb3BweS5ldQ==&l=https://www.eiseverywhere.com/ereg/newreg.php|Q|eventid|E|465574', '14th CoU Thematic Workshops', 'Committee of Users in Security Research', '16-20 september 2019', 'Brussels', 'gratuit', '2019-09-20'],
['https://www.sre2019.eu/registration', 'Security Research Event 2019', 'Building Bridges', '6-7 novembre 2019', 'Helsinki', 'gratuit', '2019-11-07'],
['http://www.safecluster.com/essai/hackers-citoyens/', 'Freemium, low tech et expertise citoyenne', 'Safe Cluster', '1er octobre 2019', 'Aix-en-Provence', 'gratuit', '2019-10-01'],
['https://ec.europa.eu/eusurvey/runner/IndustryDay2019', 'International Forum to Advance First Responder Innovation', 'Commission Européenne', '15 octobre 2019', 'Bruxelles', 'gratuit', '2019-10-15'],
['https://www.resiliency.fr/pilotage-gestion-de-crise', 'Gestion de crise : session nationale et exercice full scale de 36 h', 'HCFRN', '17/9-13/12/2019', '80 h - 70 % à distance, 30 % à Paris', '2500-5000 €', '2019-12-13'],
['http://2019.foss4g.be/en/', 'Conférence sur les logiciels cartographiques open source', 'FOSS4G', '24 octobre 2019', 'Bruxelles', 'Gratuit', '2019-10-24'],
['https://iea.u-cergy.fr/fr/manifestations-scientifiques/conferences-et-workhops/conference-europeenne-sur-les-perceptions-du-risque.html', 'Conférence européenne sur les perceptions du risque', 'Université de Cergy-Pontoise', '13 mars 2019 - 14 mars 2019', 'Paris', '2019-03-14'],
['https://www.imdr.eu/offres/gestion/events_818_46997_non-2229/idees-recues-en-gestion-de-crise-etudes-de-cas-interactives.html', 'Idées reçues en gestion de crise Etudes de cas interactives', 'IMDR', '8 octobre 2019 9-17h30 ', 'IRSN, Fontenay-aux-Roses', '120 €', '2019-10-08'],
['https://planu.be/pages/articles.php?rub=articles&pg=34', 'Colloque annuel', 'planu.be', '21 octobre 2019', 'Namur', '80 €', '2019-10-21'],
['https://www.gemeente.nu/events-veiligheid/evenementenveiligheid-informatie/', 'Jaarcongres Evenementenveiligheid', 'De laatste actualiteiten en ontwikkelingen', '31 octobre 2019', 'Apeldoorn', '250-999 €', '2019-10-31'],
['https://letscrowd.eu/event/international-security-expo-ise/', 'International Security Expo', 'ISE', '3 décembre 2019', 'Olympia London', 'gratuit', '2019-12-03'],
['https://mailchi.mp/eena/save-the-date-communicating-with-multicultural-crowds-webinar?e=fdb164a9cc/', 'Communicating with multicultural crowds at mass gatherings', 'EENA', '12 septembre 2019', 'internet', 'gratuit', '2019-09-12'],
['https://www.eventbrite.com/e/cartographie-avec-qgis-pour-les-services-de-secours-et-de-prevention-initiation-tickets-64358800906', 'Cartographie avec QGIS pour les services de secours et de prévention - initiation', 'atelier Poppy', '22 août 2019 15h00-17h30', 'Namur', 'sur invitation', '2019-08-22'],
['http://www.safecluster.com/essai/club-resilience-et-environnement/', 'Club Résilience et Environnement', 'Safe Cluster', '2 juillet 2019 9h - 12h30', 'Aix-en-Provence', 'Gratuit', '2019-07-02'],
['https://www.weezevent.com/colloque-mba-sp-management-de-la-securite-2019-risques-et-resilience', 'Risques et résilience', 'Colloque MBAsp (Gendarmerie)', '21 février 2019', 'Paris', 'TBA', '2019-02-21'],
['https://www.eventbrite.fr/e/billets-2e-forum-securite-resilience-54529357777#', '2ème Forum sécurité et résilience', 'WE Demain', '19 février 2019', 'Issy-les-Moulineaux', '85 €', '2019-02-19'],
['http://www.irsd.be/website/index.php/fr/2-non-categorise/1421-conf-13june2019', 'Le changement climatique et son impact sur la sécurité internationale', 'Conférence de l\'Institut Royal Supérieur de Défense', '13 juin 2019 17h-19h30', 'Bruxelles', 'gratuit', '2019-06-13'],
['https://www.civil-protection.com/', 'Climate Change - Challenges for Europe', 'European Congress on Disaster Management', '27-28 août 2019', 'Berlin', 'gratuit (volontaires) - taux réduit (services publics) - 498 € (entreprises)', '2019-08-28'],
['https://www.eventbrite.com/e/cartographie-avec-qgis-pour-les-services-de-secours-et-de-prevention-initiation-tickets-62563630503', 'Cartographie avec QGIS pour les services de secours et de prévention - initiation', 'atelier Poppy', '11 juillet 2019 15h30-18h30', 'Bruxelles', 'sur invitation', '2019-07-11'],
['https://zoom.us/webinar/register/WN_sIfUZ8kwSpOemQsCdmocIw', 'La préparation des hôpitaux aux situations sanitaires exceptionnelles', 'Résilience France', '27 juin 2019 12h-13h', 'Talk vidéo', 'gratuit', '2019-06-27'],
['https://www.airmap.fr/wp-content/uploads/2019/03/20190919_Oriane.pdf', 'Comprendre et renaître en présence du risque ?', '17ème colloque francophone sur le risque', '19-20 septembre 2019', 'Bayonne', '348 €', '2019-09-20'],
['https://www.imdr.eu/offres/gestion/events_818_46494_non-2229/professional-values-and-codes-of-practice-for-disaster-prevention.html', 'Professional values and codes of practice for disaster prevention', 'Université Paris Dauphine', '18 juin 2019', 'Paris', 'gratuit', '2019-06-18'],
['https://univ-droit.fr/actualites-de-la-recherche/manifestations/31479-la-securisation-des-infrastructures-d-approvisionnement', 'La sécurité des infrastructures d\'approvisionnement', 'Université de Haute-Alsace', '29 mai 2019', 'Mulhouse', '75 €', '2019-05-29'],
['http://www.irma-grenoble.com/02institut/formations-irma.php?id=58', 'Implication citoyenne en cas de catastrophe' , 'Réalités et perspectives pour les collectivités', '4 juin 2019 8h30-17h30', 'Aix-en-Provence', 'TBD', '2019-06-04'],
['https://www.eventbrite.fr/e/billets-4emes-rencontres-parlementaires-de-la-securite-civile-59826395359 <https://ifrasec.us10.list-manage.com/track/click?u=93fd83c7ceb08a5c3948e33ac&id=5fc01509eb&e=c91870b154> ', '4èmes Rencontres parlementaires de la sécurité civile - dérèglements climatiques et implication citoyenne', 'IFRASEC', 'Mercredi 5 juin 2019', 'Paris', 'gratuit', '2019-06-05'],
['http://www.irma-grenoble.com/02institut/formations-irma.php?id=56','Evénements extrêmes et changement climatique : Quelles conséquences pour les territoires ?','IRMA','14 mai 2019','Grenoble','gratuit','2019-05-14'],
['https://nuitdelagestiondecrises.jeunes-ihedn.fr/index.php/programme/','La Nuit de la gestion de crises','IHEDN','29-30 mars 2019','Paris','5 €','2019-03-30'],
['http://www.safecluster.com/essai/journee-numerique-et-securite-civile/', 'Journée numérique et sécurité civile', 'Safe Cluster/ENSOSP/UTT','7 mai 2019','Aix en Provence','40-150 €','2019-05-07'],
['http://www.planicom.be/nos-services/modules-complementaires/',  'Formation Grands Rassemblements', 'Planicom',  '25/4/2019',	'Liège',    '200 €', 	'2019-04-25'],
['https://www.eiseverywhere.com/ehome/402927',  '<a href="https://app.box.com/s/hbw8c5svmfo5rap1rmgr16ml7p6dz2e0">Comité des utilisateurs de la recherche en sécurité</a>', 'Commission européenne',  '<a href="https://www.eiseverywhere.com/ehome/402927">25-29/3/2019</a>',	'Bruxelles',    'gratuit', 	'2019-03-29'],
['https://www.wessex.ac.uk/conferences/2019/disaster-management-2019',  'Disaster Management 2019', '6th International Conference',  '25-27 septembre 2019',	'Ancona, IT',    '560 - 700 €', 	'2019-09-27'],
['https://cbrneconference.fr/',  '3rd International Conference CBRNE', 'Research & Innovation',  '20-23/5/2019',	'Nantes, FR',    '100 - 780 €', 	'2019-05-20'],
['http://www.brandweerwestvlaanderen.be/wintercongres-2019-2',  'Brandweer West-Vlaanderen', 'Wintercongres',  '2/3/2019',	'Veurne',    '', 	'2019-03-02'],
['https://overheid.vlaanderen.be/agenda/conferentie-risicos-en-crisissen-niets-om-bang-voor-te-zijn', 'Risico\'s en crisissen: (n)iets om bang voor te zijn?', 'Vlaamse Regering', '23/4/2019 10-17h', 'Brussel', 'Gratis', '2019-04-23'],
['http://www.secours-expo.com/',  'Secours expo', '',  '4-6/4/2019',	'Paris',    'Gratuit', 	'2019-04-06'],
['https://diplomatie.belgium.be/fr/sur_lorganisation/travailler_aux_affaires_etrangeres/Formations/missions_civiles_ue/formation_gestion_crises',	'Formation générique gestion civile des crises - Appel à Candidatures', 	'SPF Affaires étrangères',	  '25/3-5/4/2019', 	'Bruxelles', 'sur dossier',  	'2019-04-05'],
['https://www.hcfdc.org/checkout/registration/colloque/80',	'Résilience 360° : quelle stratégie de résilience pour 2025-2030 ?', 	'Haut Comité Français pour la Défense Civile',	  '2/4/2019', 	'Paris', '100 €',  	'2019-04-02'],
['http://www.entente-valabre.com/technosdays/',			'[ANNULÉ] Vers les technologies 3.0, de la formation à la gestion de crise', 	'Technos Days Valabre',				  '8-10 octobre 2019', 	'Valabre', 'gratuit',  	'2019-10-10'],
['https://eenaconference.org/',					'Conférence EENA (agence pour le numéro 112)', 						'',				  '10-12/4/2019', 	'Dubrovnik', '',  	'2019-04-12'],
['https://www.politeia.be/mailing/html/polpub20190130je-plansdurgence.html', 'Séminaire plans d\'urgence et d\'intervention' , 'UCLouvain / GEPS / Politeia', '19/3/2019 13-17 h', 'Louvain-la-Neuve', '135 €', '2019-03-19'],
['https://app.box.com/s/agulg2ailz2ljw00wmwwn9fnktzlvr31', 'Nouvelles formations CBRN pour urgentistes. Le temps court et la menace est réelle... Êtes-vous vraiment prêts ?', 'Séminaires du Certificat Universitaire en Gestion des situations d\'exception', '5/3/2019 18-21h', 'Brussels', 'free', '2019-03-05'],
['https://fosdem.org/2019/schedule/event/geo_osmqgis/', 'OpenStreetMaps for emergency prep: The view from San Francisco', 'FOSDEM 2019', '3/2/2019 14:45-15:15', 'Brussels', 'free', '2019-02-03'],
['https://formation-continue.ehesp.fr/formation/cycle-gestion-de-crise/', 'Gestion des situations sanitaires exceptionnelles', 'École des Hautes études de santé publique', '16 j du 18/3-22/11/2019', 'Internet', '1650 €', '2019-11-22'],
['https://zoom.us/webinar/register/WN_8TIEWGyoRy-O_1mwq0-eMQ', 'Regards croisés sur l\'alerte', 'Talk vidéo HCFDC', '20/12/2018', 'Internet', 'gratuit', '2018-12-20'],
['https://www.fun-mooc.fr/courses/course-v1:Paris2+09004+session06/about', 'Gestion de crise', 'Cours en ligne', '14/1/2019', 'Internet', 'gratuit', '2019-02-04'],
['https://cap-alert2019.sciencesconf.org/', 'Cap\'Alert', 'Colloque sur l\'alerte des populations', '19-21/3/2019', 'Avignon', '40-100 €', '2019-03-21'],
['https://milipol.com','Milipol', 'Salon de la sécurité intérieure des États', '19-22 novembre 2019', 'Paris', 'gratuit', '2019-11-22'],
['https://www.facebook.com/events/293680187897381', 'Mass Gathering Solutions', 'Wetenschappelijke avond rond eindejaarsevenementen', '13/11/2018', 'Jette, Brussels', 'gratis', '2018-11-13'],
['https://www.pmrexpo.de/en/pmrexpo/', 'PMRExpo 2018', 'Professional Mobile Radio & Control rooms', '27-29/11/2018', 'Cologne', '35-500 €', '2018-11-29'],
['https://www.weezevent.com/de-la-securite-globale-a-la-gestion-des-crises-sanitaires', 'Crise sanitaire, une épreuve humanitaire', 'Rendez-vous de la réflexion stratégique', '14/11/2018', 'Paris', 'gratuit', '2018-11-14'],
['https://www.eiseverywhere.com/ehome/364210?&t=5bc53872bc8a5df627beda27f9585f89&eb=590034', 'Committe of Users in Security Research',  'European Commission' ,'3-4/12/2018', 'Bruxelles', 'gratuit', '2018-12-04'],
['https://www.sre2018.eu/ free', 'Security Research Event',  'European Commission','5-6/12/2018', 'Bruxelles', 'gratuit', '2018-12-06'],
['http://www.horizon2020.gouv.fr/cid131435/registration-european-brokerage-event-drs-2019-24th-october-2018.html', 'European Brokerage Event on Resilience from disaster 2019',  '','24/10/2018', 'Paris', 'gratuit', '2018-10-24'],
['https://www.psc-europe.eu/news-events/events/psce-conference-in-bled-2018.html', 'Public Safety Communications Europe Conference',  '','12-13/12/2018', 'Bled, Slovenia', '', '2018-12-13'],
['https://www.eventbrite.com/e/billets-2eme-colloque-centralesupelec-ifrasec-resilience-face-aux-crises-et-fiabilite-des-organisations-50232331255?aff=&mc_cid=a7e5819227&mc_eid=c91870b154', 'Résilience face aux crises et fiabilité des organisations', 'Colloque IFRASEC-Supelec', '14/11/2018', 'Gif sur Yvette', 'gratuit', '2018-11-14'],
['http://www.amaris-villes.org/inscrivez-vous/', 'Visite de terrain - Vallée de la Chimie', '', '4-5/10/2018', 'Lyon', 'gratuit', '2018-10-05'],
['https://www.rodekruis.be/provincie/west-vlaanderen/symposium-medisch-rampenmanagement/', '14de Symposium Medisch Rampenmanagement', 'Rode Kruis Vlaanderen', '27/10/2018', 'Blankenberge', '150 €', '2018-10-27'],
['http://seolane.net/lm21/intro.php', 'Maîtrise des risques et transformation numérique : opportunités et menaces', 'Congrès Lambda Mu 21', '16-18/10/2018', 'Reims', '1635 € (étudiants:50 €)', '2018-10-18'],
['https://www.eventbrite.com/e/cartographie-avec-qgis-pour-les-services-de-secours-introduction-tickets-49687106473', 'QGIS pour les services de secours', 'Atelier Poppy', '18/10/2018', 'Bruxelles', 'gratuit', '2018-10-18'],
['https://academieairespace.com/grandsprojets', 'La gestion des grands projets - Retour d\'expérience', '', '10-11/12/2018', 'Paris', '500 € (étudiants : 50 €)', '2018-12-12'],
['http://www.jac.cerdacc.uha.fr/', 'La mémoire industrielle, facteur de prévention du risque. Le cas du démantèlement', '', '23/11/2018', 'Colmar', 'gratuit', '2018-11-23'],
['https://www.security-systems-valley.fr/festival', 'Festival du film de sécurité', '', '02/10/2018', 'Enghien-les-Bains (France)', '', '2018-10-02'],
['http://www.symposium-urgence-charleroi.be', 	 '18ème Symposium de médecine d\'urgence de Charleroi',              'Urgences extrêmes',    '23/11/2018', 'Charleroi', '',     '2018-11-23'],
['http://www.politiestudies.be/vrij.cfm?Id=416', 'Innovatie in de opsporing: kansen en bedreigingen van Blockchain', 'CPS-studievoormiddag', '20/9/2018',  'Brussel',   '95 €', '2018-09-20'],
['https://www.facebook.com/MedicalComponentBe/photos/a.265836350249424.1073741829.264732473693145/1048475105318874/?type=3&theater', 'Congrès de la Composante Médicale et de l\'HMRA', 'disaster & CBRN', '3-4/10/2018', 'Bruxelles', '', '2018-10-04'],
['http://www.chu-nimes.fr/actu-cht/congres-de-medecine-de-catastrophe.html',							'Congrès de médecine de Catastrophe',   '(source : <a href="https://www.linkedin.com/in/thomastonneau/">T. Tonneau</a>, formateur)', 				 '27/09/2018', 'Nîmes', 'gratuit', '2018-09-27'],
['https://www.hcfdc.org/fr/guest/Actualites#',											'RETEX sur l\'ouragan Irma ', 		'',                              '13/09/2018', 'Paris', '100 €', '2018-09-13'],
['https://planu.be',														'Colloque Planu.be', 			'',                              '22/10/2018', 'Namur', '75 €', '2018-10-22'],
['https://www.eventbrite.fr/e/billets-penser-la-catastrophe-nucleaire-46707931681',						'Penser la catastrophe nucléaire', 		'',                              '22/06/2018 9h-12h30', 'Paris', 'gratuit', '2018-06-22'],
['https://www.webs-event.com/DOCUMENTS/c-i.pdf',										'Sites à risques', 'Comment faire face à l\'évolution des enjeux de sécurité ?', '26/06/2018 8h45-17h30', 'Paris', '396 €', '2018-06-22'],
['https://cybercercle.com/rendez-vous/4emes-journees-cybersecurite-et-territoires-a-toulouse/',					'4èmes journées Cybersécurité et Territoires', '','20/09/2018', 'Toulouse','','2018-09-20'],
['https://drive.google.com/file/d/1SUY_Ue8yntpe1Bmq8iVhmkoA4Qri7Tl4/view',							'Décision en situation de crise et d’incertitude :', 'Des modèles fragiles aux modèles agiles.','16-17/11/2018', 'Oujda (Maroc)','','2018-11-17'],
['http://www.paca.developpement-durable.gouv.fr/de-la-prevision-des-crues-a-la-gestion-de-crise-a10591.html',			'De la prévision des crues à la gestion de crise', 'Colloque de la Société Hydrotechnique de France','14-16/11/2018', 'Avignon','335 €','2018-11-16'],
['http://formcont.ulb.ac.be/session/viewSelected/2202',										'Le Plan d\'Urgence Hospitalier', 'Séminaire de gestion des situations d\'exception','18/1/2018, 18h-21h', 'Bruxelles','Gratuit','2018-01-18'],
['http://mailchi.mp/1a94e08d676b/rappel-participez-au-colloque-ifrasec-centrale-paris-rsilience-face-aux-crises?e=c91870b154',  'Colloque « Résilience face aux crises »', 	'IFRASEC', 			  '7/2/2018', 		'Paris',    'Gratuit', 	'2018-02-07'],
['http://www.besedim.be/',  													'Colloque annuel', 				'BESEDIM', 			  '20/1/2018', 		'Bruxelles',    '', 	'2018-01-20'],
['https://www.ici-belgium.be/gestion-de-crise-le-necessaire-renforcement-des-formations-des-services-de-securite-du-role-des-acteurs-de-terrain-en-particulier/', 'Gestion de crise : la nouvelle menace', 'The European Society for Defence', '23/1/2018', 'Les Bons Villers', '30 €', '2018-01-23'],

['http://www.amrae-rencontres.fr/fr/programme/1',										'26èmes rencontres du risk management', 	'', 		  '7-9/2/2018', 'Marseille', '1305 € (étudiants : 146 €)', 	'2018-02-09'],
['http://www.secours-expo.com/', 												'Secours expo',					'',				  '8-10/2/2018',	'Paris',    'Gratuit', 	'2018-02-10'],
['https://www.iemergencyweb.be/live/index.php?part=2&a=4&b=979&c=1&d=33&f=0&lang=fr&aText=exrradqxsrnlfirodsjw&bText=&cText=',	'Congrès des Sapeurs-Pompiers zone NAGE',	'',				  '22/2/2018',		'Namur',    'Gratuit', 	'2018-02-22'],
['https://docs.my-poppy.eu/colloques/Résumé_Colloque_DEMOCRITE.pdf',								'Colloque risques & menaces', 			'(projet Démocrite)', 		  '27/2/2018',    	'Paris',    'Gratuit', 	'2018-02-27'],
['https://afiu.be/reunion-scientifique-2018/',											'Association Francophone des Infirmiers(ères) d\'Urgence', 'réunion scientifique','13/3/2018', 		'Namur',    'Gratuit', 	'2018-03-13'],
['http://formcont.ulb.ac.be/session/viewSelected/2202',										'Séminaire de gestion des situations d\'exception', '',				  '15/3/2018, 18h-21h','Bruxelles', 'Gratuit', 	'2018-03-15'],
['http://www.eena.org/press-releases/eena-2018-programme',									'Conférence EENA (agence pour le numéro 112)', 	'',				  '25-27/4/2018', 	'Ljubjana', '',  	'2018-04-25'],
['http://www.irma-grenoble.com/PDF/02institut/2018/formation_flyers_2018.pdf',							'Intercommunalité et gestion de crise', 	'IRMA - Journée technique', 	  '17/5/2018', 		'Grenoble', '', 	'2018-05-17'],
['https://www.psc-europe.eu/',													'Public Safety communications Europe', 		'', 	 			  '24-25/5/2018', 	'Bruxelles', '', 	'2018-05-25'],
['https://www.preventica.com/congres-salons-preventica.php',									'Preventica 2018' , 				'',				  '29-31/5/2018',		'Lyon', 	    'Gratuit', 	'2018-05-31'],
['https://www.preventica.com/congres-salons-preventica.php',									'Preventica 2018' , 				'',				  '2-4/10/2018',		'Bordeaux', 	    'Gratuit', 	'2018-10-04'],
['https://www.expoprotection.com/',												'Expoprotection',				'',				  '6-9/11/2018',	'Paris',    'Gratuit', 	'2018-11-09'],
['http://www.irma-grenoble.com/PDF/02institut/2018/formation_flyers_2018.pdf',							'Plan spécifique innondations',			'IRMA - Journée technique',	  '4/12/2018',		'Grenoble', '', 	'2018-12-04'],
['http://www.easyfairs.com/fileadmin/groups/6/SECURA_BE_2017/Downloads/WorkSafe_2019.pdf',					'Worksafe 2019',				'',				  '27-28/3/2019',	'Antwerpen','Gratuit', 	'2019-03-28'],
['http://www.infopol-xpo112.be/fr/home/#.WbkqObJJaHs',										'Infopol | Xpo112 2019',					'',				  '2-4/4/2019',	'Kortrijk', 'Gratuit', 	'2019-04-04'],
['https://www.osgeo.asso.fr/foss4gfr-2018/',											'FOSS4G France - géomatique libre, avec un probable track "Gestion de crise"', '', 	  '15-17/5/2018', 	'Paris', '', '2018-05-17'],
['https://web.jrc.ec.europa.eu/rem/#m101151', 											'Disaster Risk Management Knowledge Centre', '3rd Annual Scientific Seminar', 	  '26-27/4/2018', 'Sofia', '', '2018-04-27'],
['http://www.essenscia.be/fr/Calendar/Registration/476', 									'1er Forum Seveso', 				'Essencia', 			  '20/3/2018', 'La Hulpe', 'Gratuit', '2018-03-20'],
['http://ec.europa.eu/echo/partnerships/civil-protection-partners/forum-de-protection-civile_fr', 				'European Civil Protection Forum', 		'DG ECHO', 			  '5-6/3/2018', 'Bruxelles', '', '2018-03-06'],
['http://www.entente-valabre.com/technosdays/programme.html', 									'Technos Days de Valabre', 			'Inondations', 		 	 '24/5/2018',   'Valabre', '', '2018-05-24'],
['https://www.antwerpmanagementschool.be/evenement/overheid-of-overhead-2-0/',							'Overheid of Overhead 2.0', 'Kunnen we een crisis écht managen?','5/5/2018, 8h30-13h30', 'Antwerpen','50 €','2018-05-05'],
['https://www.visov.org/',													'We are VOST', 'Special Gathering for Virtual Operations Support Teams','13-15/9/2018', 'Germany','','2018-09-15'],
['https://www.astrid.be/fr/userdays/',												'Astrid User Days', '','3-4/10/2018', 'Bruxelles','','2018-10-04'],
['https://www.eventbrite.fr/e/inscription-3emes-rencontres-parlementaires-de-la-securite-civile-44372811273',			'IFRASEC', '3èmes rencontres parlementaires de sécurité civile','25/4/2018 9-17 h', 'Paris','gratuit','2018-04-25'],
['http://en.kpk.gov.pl/horizon-2020-secure-societies-international-info-day-and-brokerage-event-in-warsaw/',			'Horizon 2020', 'Brokerage event - Secure societies','11/4/2018', 'Varsovie','gratuit','2018-04-11'],
['https://http://begeo.be/programme/',												'Be Geo 2018', 'Track : protéger et sauver des vies','24/4/2018', 'Bruxelles','gratuit','2018-04-24'],
['https://www.ecologique-solidaire.gouv.fr/rencontres-recherche',								'La crise dans la crise', 'Comment gérer l\'extraordinaire : anticipation ou improvisation ?','13/4/2018 11-12h30', 'Paris + web','gratuit','2018-04-13'],
['http://www.cartong.org/fr/node/3681',												'GeOnG', "'Perfection' versus 'Good enough' in Information Management - Adjusting to context, scale, phase & funding",'29-31/10/2018 11-12h30', 'Chambéry','','2018-10-31'],
['http://www.rescue-week.com',													'Rescue Week', "Secours Expo + Secours & Vous",'4-7/2/2019', 'Paris','','2019-02-07'],
['https://meetings.webex.com/collabs/#/meetings/detail?uuid=M8JW27H2XQD4VYENU4KNK69RXN-QVXR&rnd=725055.74723',			'Resistant Webinar', "Enhance crisis management through standardisation",'19/4/2018', 'Web','','2018-04-19'],
['https://meetings.webex.com/collabs/#/meetings/detail?uuid=M4T823K0LCLFMBIXO3I719Y0QP-QVXR&rnd=498273.46838',			'Resistant Webinar', "Enhance crisis management through standardisation",'24/4/2018', 'Web','','2018-04-24'],
];
