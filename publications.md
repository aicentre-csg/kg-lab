---
layout: page
title: Publications
permalink: /publications/
---

A selection of publications from the group. Update `_data/publications.yml` to add new papers or correct bibliographic details.

{% assign sorted_pubs = site.data.publications | sort: "year" | reverse %}
{% assign current_year = "" %}
<div class="publication-list publication-list-page">
{% for pub in sorted_pubs %}
  {% if pub.year != current_year %}
    {% assign current_year = pub.year %}
    <h2 class="year-heading">{{ current_year }}</h2>
  {% endif %}
  <article class="publication-item">
    <p class="pub-year">{{ pub.year }}</p>
    <div>
      <h3>{% if pub.url and pub.url != "" %}<a href="{{ pub.url }}">{{ pub.title }}</a>{% else %}{{ pub.title }}{% endif %}</h3>
      <p>{{ pub.authors }}</p>
      <p class="pub-venue">{{ pub.venue }}{% if pub.doi %} · <a href="https://doi.org/{{ pub.doi }}">DOI</a>{% endif %}</p>
      {% if pub.pdf and pub.pdf != "" %}<p><a href="{{ pub.pdf }}">PDF</a></p>{% endif %}
      {% if pub.tags %}<div class="tag-list">{% for tag in pub.tags %}<span>{{ tag }}</span>{% endfor %}</div>{% endif %}
    </div>
  </article>
{% else %}
  <p class="muted">Publications will be listed here soon.</p>
{% endfor %}
</div>
