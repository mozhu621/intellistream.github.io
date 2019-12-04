---
title: "News"
layout: textlay
excerpt: "Mey Research Group at the University of Edinburgh"
sitemap: false
permalink: /allnews.html
---

# News

{% for article in site.data.news %}
<p>{{ article.date }} <br>
<em>{{ article.headline }}</em></p>
{% endfor %}
