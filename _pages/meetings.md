---
title: "IntelliStream Research Group - Meetings"
layout: textlay
excerpt: "IntelliStream Research Group - Meetings"
sitemap: false
permalink: /meetings/
---

# Research Group Meetings

<script>
  // Embed the JSON data using Liquid for all categories
  const databases_presentations = {{ site.data.databases_presentations | jsonify }};
  const machine_learning_presentations = {{ site.data.machine_learning_presentations | jsonify }};
  const transactional_stream_processing_presentations = {{ site.data.transactional_stream_processing_presentations | jsonify }};
</script>


## Databases

<div class="presentation-section">
  <div id="databases_next" class="next-presentation"></div>
  <button onclick="toggleVisibility('databases_past')">📅 Show/Hide Past Presentations</button>
  <div id="databases_past" style="display:none"></div>
  <button onclick="toggleVisibility('databases_future')">📅 Show/Hide Future Presentations</button>
  <div id="databases_future" style="display:none"></div>
</div>

## Machine Learning

<div class="presentation-section">
  <div id="machine_learning_next" class="next-presentation"></div>
  <button onclick="toggleVisibility('machine_learning_past')">📅 Show/Hide Past Presentations</button>
  <div id="machine_learning_past" style="display:none"></div>
  <button onclick="toggleVisibility('machine_learning_future')">📅 Show/Hide Future Presentations</button>
  <div id="machine_learning_future" style="display:none"></div>
</div>

## Transactional Stream Processing

<div class="presentation-section">
  <div id="transactional_stream_processing_next" class="next-presentation"></div>
  <button onclick="toggleVisibility('transactional_stream_processing_past')">📅 Show/Hide Past Presentations</button>
  <div id="transactional_stream_processing_past" style="display:none"></div>
  <button onclick="toggleVisibility('transactional_stream_processing_future')">📅 Show/Hide Future Presentations</button>
  <div id="transactional_stream_processing_future" style="display:none"></div>
</div>

#### Search Presentations

<div class="presentation-section">
  <input type="text" id="search-input" placeholder="Search for presentations..." oninput="searchPresentations()">
  <div id="search-results"></div>
</div>
