---
title: A large open source map with its streets list
---

A Walloon hospital recently asked the French company <a href='http://www.tanit-developpement.com/'>Tanit</a> to deliver a wall map for their Prehospital Advanced Life support team (SMUR). <a href='http://www.tanit-developpement.com/'>Tanit</a> partnered with us for the infographics.

The requirements were:
<ul>
<li>A high definition map, printable on a 2 m x 2 m aluminum frame</li>
<li>A grid</li>
<li>A streets list with reference to the grid</li>
</ul>

We decided to build it in an open way. After some trials and errors (lack of enough definition with QGIS, inspiration from Bigmap, …), we did it the following way:
<ul>
<li>The map was made using the <a href='https://omniscale.com/'>Omniscale</a> WMS and python code </li>
<li>The grid and sub-grid have been drawn programmatically  </li>
<li>The streets list has been derived from <a href='http://geoportail.wallonie.be/catalogue/a42b4111-ea2c-4a26-8edc-5b9ca2cb6c9d.html'>ICAR</a>, the official street list of the Walloon region available as <a href='http://geoportail.wallonie.be/catalogue/2998bccd-dae4-49fb-b6a5-867e6c37680f.html'>webservice</a>, and programmatically assigned to the right grid squares</li>
<li>The codes have been made available on <a href='https://github.com/ccloquet/streetslist'>Github</a> before the end of the project.</li>
</ul>

Some difficulties we encountered:
<ul>
<li>Just putting the WMS tiles together was not enough, as there are some differences on the borders of adjacent tiles. Overlapping tiles, properly cropped, had to be downloaded as well</li>
<li>The Openstreetmap & ICAR databases had to be quality-checked.</li>
</ul>

As part of this project, we therefore checked some streets of Openstreetmap, and a fraction of the results of the extraction from the ICAR database, and were able to report some inconsistencies, thereby contributing to increase the quality of these datasets. Moreover the source code of the project is freely available on Github, so that anyone with an Omniscale API key can reproduce it for his/her own institution with only minimal GIS knowledge and a minimal amount of modifications. The client hospital will also be able to make a new street list in a couple of months, when the ICAR database will have changed.
	 
