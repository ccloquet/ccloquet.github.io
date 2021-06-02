---
title: "Pannes du 112 - pistes pour plus de résilience"
published: true
tags: [resilience,HAM,citoyens]
---

Le numéro d'urgence 112 a été [inaccessible en Belgique vendredi 8/1 de minuit à 6 h du matin](https://www.rtbf.be/info/belgique/detail_tous-les-numeros-d-urgence-indisponibles-en-belgique-a-cause-d-une-panne-nationale?id=10668500). 
Cette panne nationale faisait suite à celle d'[avril 2019](https://bx1.be/news/les-numeros-durgence-100-et-101-indisponibles-dans-la-capitale/), elle-même précédée de précurseurs de moindre envergure, notamment à Bruxelles en [avril 2018](https://www.rtbf.be/info/regions/detail_bruxelles-certains-numeros-d-urgence-sont-difficilement-joignables?id=9890584), et d'incidents de grande ampleur à l'étranger (ex : KPN aux Pays-Bas en 2012 et [2019](https://www.lecho.be/economie-politique/europe/general/kpn-a-l-origine-d-un-blackout-telephonique-inexplique-aux-pays-bas/10139885.html), Century Link aux États-Unis notamment en [2015](https://www.theverge.com/2020/9/29/21494652/911-outage-centurylink-lumen-intrado), ...).

<p>Regardons les choses en face : <strong>de telles pannes sont inévitables</strong>. Elles interviennent malgré les &quot;leçons tirées&quot; des pannes précédentes (ex : KPN disposait d&#39;une <a href='https://www.onemorething.nl/2019/06/storing-kpn-alarmnummer-112-dit-ging-er-fout/'>triple redondance</a>). En réalité, les <strong>réseaux sont de plus en plus complexes</strong> pour satisfaire à une demande toujours croissante, et il est très difficile de vendre de la fiabilité. Et tout ceci est d&#39;autant plus préoccupant dans un monde interconnecté, où chaque défaillance, même petite, peut entraîner un effet domino, voire des <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1541-1338.2009.00390.x">ruptures trans-systèmes</a>.</p>
<p>Si l&#39;incident de janvier a concerné l&#39;indisponibilité de numéros fixes, d&#39;<strong>autres systèmes peuvent tomber en panne</strong>, éventuellement en cascade : réseau électrique (voir à ce sujet le <a href="https://www.entsoe.eu/news/2021/01/15/system-separation-in-the-continental-europe-synchronous-area-on-8-january-2021-update/">near-miss de la grille européenne de ce 8 janvier</a>), réseaux de téléphonie mobiles, réseau ASTRID, fournisseurs d&#39;accès à internet, système GPS, ... et ce, que ce soit en raison d&#39;une défaillance technique, d&#39;une attaque cyber (ciblée ou non) ou même d&#39;une combinaison de ces modalités. Tout ceci sans compter une panne potentielle des systèmes d&#39;aide à la prise d&#39;appel, ou même une indisponibilité physique des centres d&#39;urgence.</p>
<p>Il est vrai que des solutions sont en place (ex: possibilité de prise d&#39;appel par un autre centre d&#39;urgence) et que des leçons ont été tirées de la panne de 2019 : attribution de GSMs aux centrales 112, gestion plus centralisée de l&#39;incident, alerte par SMS... Les procédures, elles, ne sont pas encore rodées. Le message Be-Alert a été émis très tard (à Bruxelles, l&#39;email est parvenu après 4 h du matin), et le SMS est également arrivé avec retard (<a href="https://www.vrt.be/vrtnws/nl/2021/01/08/sms-systeem-be-alert-faalt-slechts-helft-krijgt-bericht-over-pa/">quand il est arrivé</a>). Son contenu était également inutilement complexe (un numéro différent par opérateur...), si bien qu&#39;on peut se poser la question de l&#39;impact réel de ce message.</p>
<p>Alors comment augmenter notre résilience ? Il n&#39;y a pas de solution simple, et c&#39;est de la responsabilité de chacun, alors retroussons-nous les manches ! Exemples choisis :</p>
<p><strong>Proximus</strong></p>
<ul>
<li>annoncer les maintenances critiques (ex sur un site sécurisé) pour accélérer la compréhension de la nature de l&#39;incident</li>
<li>investir dans la robustesse et la valoriser auprès de ses clients (on peut rêver...)</li>
</ul>
<p><strong>Proximus, Telenet &amp; Orange</strong></p>
<ul>
<li><strong>détecter les pannes du 112</strong> (ex : un %age d&#39;appels qui n&#39;aboutit pas) et router automatiquement vers un numéro alternatif (ex : les n°s de GSM qui ont été communiqués, une ligne fixe de l&#39;opérateur alternatif, le dispatching de l&#39;opérateur, etc)</li>
<li>en cas de panne d&#39;un opérateur, activation de la gratuité pour les numéros d&#39;une liste prédéfinie (ex :  numéros des hôpitaux) </li>
<li>en cas de connexion à la 4G sans crédit : affichage de la liste des numéros de secours</li>
</ul>
<p><strong>Centrales 112</strong></p>
<ul>
<li><p>redondance de l'infrastructure</p>
<ul>
<li><strong>connexion à internet par agrégation multi-flux</strong> : 4G, 2 opérateurs filaires, satellite (contrairement à une idée répandue, l&#39;accès à internet par VSAT est abordable)
<li>disposer d&#39;une ligne téléphonique fixe entrante par deux opérateurs indépendants de Proximus</li>
<li>pouvoir connecter un PC/des téléphones aux différents flux entrants sans passer par l&#39;infrastructure<br></li>
</ul>
</li>
<li><p>mode dégradé : veiller en permanence</p>
<ul>
<li><strong>un compte VOIP grand public</strong> (ex : Skype, Whatsapp, ...)</li>
<li>une ou plusieurs <strong>fréquences d&#39;urgence radioamateur</strong><br></li>
</ul>
</li>
<li><p>assurance du fonctionnement des backups</p>
<ul>
<li>publier et <strong>utiliser les numéros alternatifs en routine</strong> </li>
<li>les <strong>tester fréquemment</strong> (éventuellement même automatiquement : un automate émet un appel, l&#39;opérateur.trice y répond en appuyant sur une touche)</li>
</ul>
</li>
</ul>
<p><strong>Autorités</strong></p>
<ul>
<li><p>analyse</p>
<ul>
<li>réaliser une <strong>véritable analyse de risques</strong> (vulnérabilités, points uniques de défaillances (infrastructure partagée entre opérateurs, dépendance au réseau internet, etc), probabilité, conséquences, ...)</li>
<li>réaliser une <strong>analyse coûts-bénéfices</strong> des mitigations possibles</li>
<li><strong>auditer sans complaisance</strong> les systèmes critiques dont elles dépendent </li>
<li>étudier les leçons des pannes dans les autres pays<br></li>
</ul>
</li>
<li><p>développer des moyens d&#39;alerte alternatifs</p>
<ul>
<li>
<p>défibrillateurs publics : en faire des <strong>points d&#39;alerte</strong> via une <strong>fréquence radio</strong> distincte d&#39;ASTRID, à l&#39;instar des <a href="https://www.rtl.be/info/belgique/societe/la-flandre-supprime-ses-bornes-d-appels-de-secours-la-wallonie-y-injecte-45-millions-d-euros-864246.aspx">bornes sur autoroute</a> (1,125 M€ / an pour 1000 bornes) et des <a href="http://plaws.net/fire/list.shtml">fire alarm call boxes</a> comme dans certaines villes anglo-saxonnes. Ce genre de boîtes pourrait également se trouver dans des endroits sociaux tels que des pharmacies, cafés populaires, etc. et être combinées avec des capteurs de télémesure pour une utilisation au quotidien (particules fines, dioxyde d'azote, bruit, ...)
<center>
<div style='width:50%'>
<img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Fire_alarm_in_Ridgewood%2C_New_Jersey.jpg/800px-Fire_alarm_in_Ridgewood%2C_New_Jersey.jpg'>
</div>
</center>
</p>
</li>
<li><strong>intégrer les numéros de GSM de secours dans l&#39;app 112</strong>, soit automatiquement (ex, via un ping en début de session), soit via un menu séparé (suggestion de <a href='https://zileo.net/'>Jonathan Lannoy</a>)
</li>
<li><strong>permettre à l&#39;app 112 de communiquer par internet</strong> (textes, VOIP, vidéos cf. <a href="https://github.com/ccloquet/ShowMe/">ShowMe</a>) et non uniquement par appel vocal à partir d&#39;une ligne téléphonique
</li>
<li><p><strong>coordonner et exercer les contacts avec les sociétés de transport en commun</strong>, ... Une personne en détresse à domicile pourrait p. ex. s&#39;adresser à un véhicule de la STIB =&gt; être sûr que le chauffeur ne soit pas surpris et que l&#39;info arrive au 112.</p>
</li>
</ul>
</li>
<li><p>déjà en cours, ou à accélérer : router 50 % des appels via Proximus et 50 % des appels via Telenet</p>
</li>
<li>changement de paradigme : <strong>décentralisation</strong><ul>
<li>impliquer les citoyens/secouristes/professionnels de la santé dans la réponse aux urgences en les déclenchant au moyen d&#39;une appli mobile - l&#39;app 112 pourrait assurer cette fonction (modalités à définir, ex : <i>opt-in</i> via une option dans l'appli, pour certains types d'accidents, etc)</li>
<li>celle-ci alerterait en tout temps des citoyens-sauveteurs à proximité, en plus des moyens de l'Aide Médicale Urgente</li>
<li>de cette manière, si le 112 était indisponible, des secouristes qualifiés pourraient malgré tout être déclenchés par l&#39;appli et ainsi sauver des vies</li>
</ul>
</li>
<li><strong>alerte à la population : une réflexion plus globale</strong> (pas uniquement pour les pannes 112), et notamment :<ul>
<li>changement de doctrine : envoyer très rapidement par Twitter/Facebook/... : &quot;nous avons détecté une situation anormale, nous vous tenons informés&quot; -&gt; ça réveille déjà les journalistes, même si c&#39;est une fausse alerte</li>
<li>ne pas compter que sur Be-Alert, ni que sur les SMS : le serveur a une capacité limitée, et les cellules GSM également. Ex : en parallèle de Be-Alert, alerter différentes pyramides (ex : 112 -&gt; coordinateurs planus -&gt; gardiens de la paix) pour toucher rapidement les personnes les plus vulnérables</li>
<li>alerter via les <strong>notifications de l&#39;App 112 et d&#39;applis grand public</strong> type RTL info / HLN / ...</li>
<li>implémenter le <a href="https://fr.wikipedia.org/wiki/Diffusion_cellulaire">cell broadcast</a> afin de pallier aux retards dans la réception des messages Be-Alert - ne pas abandonner l&#39;envoi de SMS, mais pouvoir combiner les deux</li>
<li>dire de prévenir / d&#39;être attentif à ses voisins (mais ! Covid)</li>
<li>communiquer via les panneaux des transports en commun, les films des bus, les panneaux publicitaires, allumer automatiquement des radios DAB+...</li>
</ul>
</li>
<li><p><strong>simplifier les numéros communiqués</strong> à la population, et les rendre indépendants des opérateurs (cf message envoyé cette nuit là : &quot;numéro Base&quot;, &quot;numéro Proximus&quot;, etc) et gratuits (! un 0800 peut impliquer une vulnérabilité supplémentaire de par le routage qu'il induit)</p>
</li>
<li><p>organiser des ateliers participatifs avec des citoyens pour comprendre comment elle réagirait, quels sont les pièges et ce qui peut les aider, et élaborer un processus agile pour capitaliser rapidement sur ces apprentissages</p>
</li>
<li>implémenter l&#39;<a href="https://fr.wikipedia.org/wiki/ENUM">ENUM</a></li>
<li><p>rendre résiliente la communication entre centres stratégiques</p>
<ul>
<li>rétablir les lignes REGETEL avec les hôpitaux (l'idée m'a été soufflée)</li>
<li>étudier la plus value d&#39;opérateurs physiques alternatifs tels que <a href="https://www.colt.net/fr/colt-network-map/">COLT</a>.
<li>prévoir de <strong>déployer les membres du réseau <a href='https://www.uba.be/fr/accueil/nouvelles-b-ears'>B-EARS</a></strong>, les associations de sécurité civile, ... <strong>dans des endroits critiques</strong> - cf <a href='https://crisebw.be/actualites/reseau-radio-d-urgence-le-reseau-radioamateur-de-secours-du-brabant-wallon'>B-EARS dans le Brabant Wallon</a></li>
<li><strong>pré-installer et maintenir des <a href='https://www.uba.be/fr/acceuil'>émetteurs-récepteurs radioamateurs</a> (pas juste les antennes) dans différents endroits critiques</strong> (ex : centre de crise, commissariats, casernes de pompiers, hôpitaux)</li>
</ul>
</li>
<li><p>alertes ciblées : dans Be-Alert, préparer des listes thématiques : homes, généralistes, hôpitaux, écoles, citoyens-sauveteurs, ambulances privées, PLP, sociétés de gardiennage, SOS médecins, services d'accouchement à domicile, cliniques privées, ... Ces personnes pourraient être alertées en priorité en raison de leur vulnérabilité, ou parce que les citoyens se tourneront préférentiellement vers eux</p></li>
<li>les services d'ambulances privées et les associations de sécurité civile pourraient déployer temporairement des ambulances et véhicules de secours supplémentaires, qui pourraient ainsi diminuer l&#39;intervalle ambulancier libre du à la saturation du système d&#39;appel. Ils pourraient être déclenchés via l&#39;appli 112, en direct depuis les boîtes d&#39;appel, etc.</li>
<li><p>ne pas mettre tous ses oeufs dans le même panier (grandes entreprises) et prévoir une place pour de petites entreprises motivées et innovantes afin de développer des services agiles</p>
</li>
</ul>
<p><strong>Be Alert/Gedicom/Nextel</strong></p>
<ul>
<li>ventiler l&#39;envoi de SMS en fonction des opérateurs pour éviter la saturation d&#39;antennes</li>
<li>augmenter la capacité d&#39;envoi par rapport à ce qui est prévu dans le cahier des charges, au besoin en faisant appel à plusieurs fournisseurs et à un meilleur routage</li>
</ul>
<p><strong>Citoyens acteurs de leur sécurité</strong></p>
<ul>
<li>se former au secourisme, des gestes simples permettent de sauver des vies</li>
<li>enregistrer les numéros utiles (numéros de backup communiqués à l&#39;occasion de la crise, numéros des hôpitaux, des dispatching zonaux) - enseigner ce réflexe au cours de secourisme (au même titre que les <a href="https://www.croix-rouge.fr/Actualite/Cet-ete-initiez-vous-aux-premiers-secours/En-direct-de-la-caravane-a-Dunkerque/Presentation-du-cata-kit">CataKits</a>)</li>
<li>passer une licence de radioamateur (un <a href='https://www.uba.be/fr/actualites/flash/nieuw-examenreglement-bipt'>indicatif ON3</a> suffit - p. ex. pour les points de contact des Partenariats Locaux de Prévention)</li>
<li>pour réduire encore la barrière à l'entrée : réhabiliter la CB ?
</ul>
<p><strong>Long terme : Android/Apple/Google/constructeurs de GSM...</strong></p>
<ul>
<li>détecter que le 112 ne répond pas et composer automatiquement un numéro alternatif (ex : ceux qui ont été communiqués, à défaut, celui d&#39;un hopital, etc). À défaut, alerter des personnes dans les environs</li>
<li>donner accès à des infos supplémentaires dès que l&#39;on compose le 112 (ex : défibrillateurs les plus proches, ...)</li>
<li>une recherche sur internet (termes  &quot;urgences&quot;, &quot;hôpital...&quot;, ... afficherait l&#39;info : &quot;112 indisponible, veuillez contacter...&quot;.) L'information pourrait même être disponible en haut de la page de recherche</li>
<li>envoyer au 112 l'alerte via le réseau Lora/SigFox</li>
</ul>
<p><i>D&#39;accord, pas d&#39;accord ? Discutons-en! Contactez-nous via info@my-poppy.eu ou par <a href="https://facebook.com/mypoppyeu">Facebook</a> / <a href="https://twitter.com/mypoppy_eu">Twitter</a> / <a href="https://www.linkedin.com/in/ccloquet/">Linkedin</a> !</i></p>`

<!--div id="content">
(la suite sur invitation - demandez-nous le code d'accès)
</div>

<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js" integrity="sha512-nOQuvD9nKirvxDdvQ9OMqe2dgapbPB7vYAMrzJihw5m+aNcf0dX53m6YxM4LgA9u8e9eg9QX+/+mPu8kCNpV2A==" crossorigin="anonymous"></script>

<script>
// from https://embed.plnkr.co/0VPU1zmmWC5wmTKPKnhg/
var keySize    = 256;
var ivSize     = 128;
var iterations = 100;

var encrypted  = "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"

var passphrase = window.prompt("Ce post est privé. Veuillez entrer le code d'accès ou demandez-en nous un.")

//var encrypted = encrypt("Message", passphrase);

var decrypted = decrypt(encrypted, passphrase);
$('#content').html(decrypted.toString(CryptoJS.enc.Utf8))

function encrypt (msg, pass) {
  var salt = CryptoJS.lib.WordArray.random(128/8);
  
  var key = CryptoJS.PBKDF2(pass, salt, {
      keySize: keySize/32,
      iterations: iterations
    });

  var iv = CryptoJS.lib.WordArray.random(128/8);
  
  var encrypted = CryptoJS.AES.encrypt(msg, key, { 
    iv: iv, 
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    
  });
  
  // salt, iv will be hex 32 in length
  // append them to the ciphertext for use  in decryption
  var transitmessage = salt.toString()+ iv.toString() + encrypted.toString();
  return transitmessage;
}

function decrypt (transitmessage, pass) {
  var salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
  var iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32))
  var encrypted = transitmessage.substring(64);
  
  var key = CryptoJS.PBKDF2(pass, salt, {
      keySize: keySize/32,
      iterations: iterations
    });

  var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
    iv: iv, 
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    
  })
  return decrypted;
}

</script-->


<iframe src="https://www.my-poppy.eu/cnt/cnt.php" width="1" height="1" frameBorder="0">

