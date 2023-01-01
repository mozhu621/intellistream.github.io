---
title: "News"
layout: textlay
excerpt: "IntelliStream Research Group at the Singapore University of Technology and Design"
sitemap: false
permalink: /allnews.html
---

# News

{% for article in site.data.news %}
<p>{{ article.date }} <br>
<em>{{ article.headline }}</em></p>
{% endfor %}
