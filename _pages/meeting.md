---
title: "IntelliStream Research Group - Meetings"
layout: textlay
excerpt: "IntelliStream Research Group - Meetings"
sitemap: false
permalink: /research/
---

# Research Group Meetings

## Databases

{% for presentation in site.data.databases_presentations %}
### {{ presentation.presenter }} will present a {{ presentation.paper }}
- **Date**: {{ presentation.date }}
- **Time**: {{ presentation.time }}
- **Link**: {{ presentation.link }}
{% endfor %}

---

## Machine Learning

{% for presentation in site.data.machine_learning_presentations %}
### {{ presentation.presenter }} will present a {{ presentation.paper }}
- **Date**: {{ presentation.date }}
- **Time**: {{ presentation.time }}
- **Link**: {{ presentation.link }}
{% endfor %}

---

## Transactional Stream Processing

{% for presentation in site.data.transactional_stream_processing_presentations %}
### {{ presentation.presenter }} will present a {{ presentation.paper }}
- **Date**: {{ presentation.date }}
- **Time**: {{ presentation.time }}
- **Link**: {{ presentation.link }}
{% endfor %}






