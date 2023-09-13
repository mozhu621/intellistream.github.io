---
title: "News"
layout: textlay
excerpt: "IntelliStream Research Group"
sitemap: false
permalink: /allnews.html
---

# News

<style>
  .clickable-headline {
    cursor: pointer;
    text-decoration: underline;
  }
  .clickable-headline:hover {
    color: blue;
  }
</style>

<script>
  function toggleVisibility(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
</script>

{% for article in site.data.news %}
  <p>
    {{ article.date }} <br>
    <em {% if article.body %}class="clickable-headline" onclick="toggleVisibility('{{ article.headline | slugify }}')"{% endif %}>
      {{ article.headline }}
    </em>
    {% if article.body %}
      <span id="{{ article.headline | slugify }}" style="display:none;">
        <br>{{ article.body }}
      </span>
    {% endif %}
  </p>
{% endfor %}
