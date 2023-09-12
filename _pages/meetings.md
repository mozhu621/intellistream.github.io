---
title: "IntelliStream Research Group - Meetings"
layout: textlay
excerpt: "IntelliStream Research Group - Meetings"
sitemap: false
permalink: /meetings/
---

# Meetings and Presentations

<script>
  // Embed the JSON data using Liquid for all categories
  const system_presentations = {{ site.data.system_presentations | jsonify }};
  const machine_learning_presentations = {{ site.data.machine_learning_presentations | jsonify }};
</script>


## Systems (DB/OS/Net/Arch/Mobi)

<div class="presentation-section">
  <div id="system_next" class="next-presentation"></div>
  <button onclick="toggleVisibility('system_past')">📅 Show/Hide Past Presentations</button>
  <div id="system_past" style="display:none"></div>
  <button onclick="toggleVisibility('system_future')">📅 Show/Hide Future Presentations</button>
  <div id="system_future" style="display:none"></div>
</div>

## Machine Learning (ML/DL/CV/NLP/Algo/Theory)

<div class="presentation-section">
  <div id="machine_learning_next" class="next-presentation"></div>
  <button onclick="toggleVisibility('machine_learning_past')">📅 Show/Hide Past Presentations</button>
  <div id="machine_learning_past" style="display:none"></div>
  <button onclick="toggleVisibility('machine_learning_future')">📅 Show/Hide Future Presentations</button>
  <div id="machine_learning_future" style="display:none"></div>
</div>


#### Search Presentations

<div class="presentation-section">
  <input type="text" id="search-input" placeholder="Search for presentations..." oninput="searchPresentations()">
  <div id="search-results"></div>
</div>
