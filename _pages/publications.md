---
layout: page
permalink: /research/
title: research
description: Research by categories in reversed chronological order. generated by jekyll-scholar.
years: [2020]
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>