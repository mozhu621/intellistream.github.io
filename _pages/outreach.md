---
title: "Mey Research Group - Outreach"
layout: gridlay
excerpt: "Mey Resaerch -- Outreach"
permalink: /outreach/
---

# Outreach and Other Interests

Communicating the science we do and getting everyone curious about it is an important aspect of the work as researcher. The page below highlights some work the group does in this area and has done in the past.

Also keep an eye on twitter, and the news section for exciting outreach updates!

## Highlights
{% assign number_printed = 0 %}
{% for publi in site.data.outreach %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
<a href="{{ publi.link.url }}"><img src="{{ site.url }}{{ site.baseurl }}/images/outreach/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" /></a>
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.team }}</em></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

#### Follow us on Social media:
[**Twitter**](https://twitter.com/ppxasjsm) and [**Youtube**](https://www.youtube.com/channel/UC3LuLy5zlbsMTww0upJvPRA).

### Publications
<ol>
{% for publi in site.data.outreachpub %}

  <li>{{ publi.title }}</li>
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>

{% endfor %}
</ol>

### IMAGINARY Videos
[IMAGINARY](imaginary.org) is an open source platform for mathematics communication resources. It is a non-profit organisation that started as the mathematics outreach project of the Mathematische Forschungsinstitut Oberwolfach (MFO). We have contributed to their work on a freelance basis. Please get in contact by [email](mailto:antonia.mey@imaginary.org) if you are interested in any kind of mathematics related outreach activities, such as organising an exhibition or school visit etc. 
 
My interest in outreach was sparked with a competition for exhibition modules, for which a team consisting of myself, [Guillaume Jouvet](http://people.ee.ethz.ch/~jouvetg/) and Chantalle Landry submitted a film on the mathematics behind glacial movement. Take a look here :
<p></p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/eJNIr_0zOyk" frameborder="0" allowfullscreen></iframe>
<p></p>

We made a follow up for the Youtube Fast Forward science competition, winning the 1st prize for our category on solving an old glacial mystery. 

<p></p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/cyKb-P3mwDk" frameborder="0" allowfullscreen></iframe>
<p></p>

As part of the work for IMAGINARY, I have coordinated exhibitions in various countries, such as Romania or Israel and coordinated teacher training sessions for the UNESCO. 



