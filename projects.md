---
layout: page
title: Projects
permalink: /projects/
---

Our projects explore both the foundations of knowledge graph technologies and their application in real-world settings.

<div class="project-list project-list-page">
{% assign sorted_projects = site.data.projects | sort: "title" %}
{% for project in sorted_projects %}
  <article class="project-row">
    <div>
      <p class="project-meta">{% if project.status %}{{ project.status }}{% endif %}{% if project.funder %} · {{ project.funder }}{% endif %}{% if project.period %} · {{ project.period }}{% endif %}</p>
      <h2>{{ project.title }}</h2>
      <p>{{ project.summary }}</p>
      {% if project.partners %}<p class="project-partners"><strong>Partners:</strong> {{ project.partners }}</p>{% endif %}
      {% if project.url and project.url != "" %}<a class="text-link" href="{{ project.url }}">Project website / resources →</a>{% endif %}
    </div>
  </article>
{% else %}
  <p class="muted">Projects will be listed here soon.</p>
{% endfor %}
</div>

To add a project, edit `_data/projects.yml`. Set `featured: true` for projects you would like to highlight on the home page.
