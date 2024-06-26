---
title: Real-time location of public transit vehicles in Brussels
tags: [opendata,mobility]
---
<b>The first app using the STIB-MIVB open data</b>

A couple of days ago, the public transportation company of Brussels (<a href='https://opendata.stib-mivb.be/store/'>STIB-MIVB</a>) released for the first time their <a href='https://opendata.stib-mivb.be/store/'>data</a>, including real time data, under an open licence. We took it as a challenge and one day later, we released the first <a href='http://stib.my-poppy.eu'>app</a> based on these data.
<br><center>
<a href='http://stib.my-poppy.eu'><img class='img_hover' src='../images/stib.png' style="width:20%; height:auto"></a>
</center><br>
It shows the real time location of the surface & underground vehicles, updated every three minutes.

Technically, the data is hosted on a public web hosting, which cannot get periodical updates over the network (using 'cron' & 'curl'). We then implemented a small cache mechanism: at each query of the data by the webpages, the script on the server checks if the data is enough up to date. If not, the new data the server retrieves the data from the STIB-MIVB portal.

<iframe src="https://www.my-poppy.eu/cnt/cnt.php" width="1" height="1" frameBorder="0">
