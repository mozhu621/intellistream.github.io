---
title: "IntelliStream Research Group - Meetings"
layout: textlay
excerpt: "IntelliStream Research Group - Meetings"
sitemap: false
permalink: /meetings/
---

# Meetings and Presentations

We are pleased to announce the formation of Special Interest Groups (SIGs) within our Research Group. These SIGs aim to foster specialized knowledge sharing and to improve our capabilities in English presentations. We decided to make it openly accessible, so that everyone interested can participate.

- `sig-sys` for **Systems Research**: This group is tailored for individuals whose research or scholarly interests predominantly align with fields such as Database Systems, Operating Systems, Networking, Computer Architecture, Mobile Computing, High-Performance Computing, or Human-Computer Interaction.

- `sig-ml` for **Machine Learning and Related Fields**: This group is intended for members with a focus on Machine Learning, Data Mining, Deep Learning, Computer Vision, Natural Language Processing, Algorithms, or Theoretical Computer Science.

**Objective**: Each SIG is committed to presenting at least one paper per week, leading to a minimum of two paper presentations within the group as a whole each week.

For active participation, please join the corresponding [Slack channels](https://join.slack.com/t/intellistream/shared_invite/zt-2339uj090-8ci_aqHKva5jFInd2MpZsQ).

---

<script>
  // Embed the JSON data using Liquid for all categories
  const system_presentations = {{ site.data.system_presentations | jsonify }};
  const machine_learning_presentations = {{ site.data.machine_learning_presentations | jsonify }};
</script>


## Systems (DB/OS/Net/Arch/Mobi/HPC/HCI)

<div class="presentation-section">
  <div id="system_next" class="next-presentation"></div>
  <button onclick="toggleVisibility('system_past')">📅 Show/Hide Past Presentations</button>
  <div id="system_past" style="display:none"></div>
  <button onclick="toggleVisibility('system_future')">📅 Show/Hide Future Presentations</button>
  <div id="system_future" style="display:none"></div>
</div>

## Machine Learning (ML/DM/DL/CV/NLP/Algo/Theory)

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
