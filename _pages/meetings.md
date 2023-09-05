---
title: "IntelliStream Research Group - Meetings"
layout: textlay
excerpt: "IntelliStream Research Group - Meetings"
sitemap: false
permalink: /meetings/
---

# Research Group Meetings

<script>
  function toggleVisibility(section) {
    var x = document.getElementById(section);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
</script>

## Databases

{% assign sorted_presentations = site.data.databases_presentations | sort: 'date' %}
{% if sorted_presentations.size == 0 %}
### No upcoming presentations scheduled.
{% else %}
  {% for presentation in sorted_presentations %}
    {% if forloop.first %}
    ### Next Presentation
    ### {{ presentation.presenter }} will present a {{ presentation.paper }}
    - **Date**: {{ presentation.date }}
    - **Time**: {{ presentation.time }}
    - **Link**: {{ presentation.link }}
    {% endif %}
  {% endfor %}
{% endif %}

<button onclick="toggleVisibility('databases_past')">Show/Hide Past Presentations</button>
<div id="databases_past" style="display:none">
  <!-- Past presentations will go here -->
</div>

<button onclick="toggleVisibility('databases_future')">Show/Hide Future Presentations</button>
<div id="databases_future" style="display:none">
  <!-- Future presentations will go here -->
</div>

## Machine Learning

{% assign sorted_presentations = site.data.machine_learning_presentations | sort: 'date' %}
{% if sorted_presentations.size == 0 %}
### No upcoming presentations scheduled.
{% else %}
  {% for presentation in sorted_presentations %}
    {% if forloop.first %}
    ### Next Presentation
    ### {{ presentation.presenter }} will present a {{ presentation.paper }}
    - **Date**: {{ presentation.date }}
    - **Time**: {{ presentation.time }}
    - **Link**: {{ presentation.link }}
    {% endif %}
  {% endfor %}
{% endif %}

<button onclick="toggleVisibility('databases_past')">Show/Hide Past Presentations</button>
<div id="databases_past" style="display:none">
  <!-- Past presentations will go here -->
</div>

<button onclick="toggleVisibility('databases_future')">Show/Hide Future Presentations</button>
<div id="databases_future" style="display:none">
  <!-- Future presentations will go here -->
</div>

## Transactional Stream Processing

{% assign sorted_presentations = site.data.transactional_stream_processing_presentations | sort: 'date' %}
{% if sorted_presentations.size == 0 %}
### No upcoming presentations scheduled.
{% else %}
  {% for presentation in sorted_presentations %}
    {% if forloop.first %}
    ### Next Presentation
    ### {{ presentation.presenter }} will present a {{ presentation.paper }}
    - **Date**: {{ presentation.date }}
    - **Time**: {{ presentation.time }}
    - **Link**: {{ presentation.link }}
    {% endif %}
  {% endfor %}
{% endif %}

<button onclick="toggleVisibility('databases_past')">Show/Hide Past Presentations</button>
<div id="databases_past" style="display:none">
  <!-- Past presentations will go here -->
</div>

<button onclick="toggleVisibility('databases_future')">Show/Hide Future Presentations</button>
<div id="databases_future" style="display:none">
  <!-- Future presentations will go here -->
</div>




