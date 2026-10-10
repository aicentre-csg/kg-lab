---
layout: page
title: Research
permalink: /research/
---

Our research develops methods and tools for representing, connecting and using structured knowledge. The themes below are connected: better knowledge representation supports integration; integration enables reasoning at scale; and evaluation helps make knowledge-driven AI more reliable.

<div class="card-grid research-grid">
{% for item in site.data.research_lines %}
  <article class="info-card">
    <span class="card-number">{{ forloop.index | prepend: '0' }}</span>
    <h2>{{ item.title }}</h2>
    <p>{{ item.summary }}</p>
    {% if item.topics %}
    <ul class="topic-list">
      {% for topic in item.topics %}<li>{{ topic }}</li>{% endfor %}
    </ul>
    {% endif %}
  </article>
{% endfor %}
</div>

## Our approach

We combine formal methods and symbolic reasoning with data-driven approaches, including machine learning and large language models where appropriate. We value reproducible evaluation, open research artefacts and collaboration across disciplines.
