---
layout: home
title: Home
---

<section class="hero">
  <p class="eyebrow">AI Centre · City St George’s, University of London</p>
  <h1>Making knowledge connected, usable and trustworthy.</h1>
  <p class="hero-lede">We research Knowledge Graphs and semantic technologies that help people and AI systems represent, integrate, reason over and use knowledge.</p>
  <div class="hero-actions">
    <a class="button button-primary" href="{{ '/research/' | relative_url }}">Explore our research</a>
    <a class="button button-secondary" href="{{ '/people/' | relative_url }}">Meet the group</a>
  </div>
</section>

<section class="intro-section">
  <div>
    <p class="eyebrow">Who we are</p>
    <h2>Knowledge that connects people, data and AI</h2>
  </div>
  <div class="prose">
    <p>The Knowledge Graphs Research Lab is part of the AI Centre at City St George’s, University of London. We study methods and tools for building, integrating, validating and reasoning with structured knowledge, and for combining symbolic knowledge with modern AI.</p>
    <p>Our work spans foundational research, practical systems and collaborations with academic, public-sector and industry partners. This site is a living overview of our people, research themes, projects and publications.</p>
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <div>
      <p class="eyebrow">What we work on</p>
      <h2>Research themes</h2>
    </div>
    <a class="text-link" href="{{ '/research/' | relative_url }}">All research lines →</a>
  </div>
  <div class="card-grid">
    {% for item in site.data.research_lines limit:3 %}
      <article class="info-card">
        <span class="card-number">{{ forloop.index | prepend: '0' }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section-block project-band">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Research in action</p>
      <h2>Selected projects</h2>
    </div>
    <a class="text-link" href="{{ '/projects/' | relative_url }}">View projects →</a>
  </div>
  <div class="project-list">
    {% assign featured_projects = site.data.projects | where: "featured", true %}
    {% for project in featured_projects limit:2 %}
      <article class="project-row">
        <div>
          <p class="project-meta">{{ project.status }}{% if project.funder %} · {{ project.funder }}{% endif %}</p>
          <h3>{{ project.title }}</h3>
          <p>{{ project.summary }}</p>
        </div>
        {% if project.url and project.url != "" %}
          <a class="arrow-link" href="{{ project.url }}" aria-label="Learn more about {{ project.title }}">↗</a>
        {% endif %}
      </article>
    {% else %}
      <p class="muted">Add projects in <code>_data/projects.yml</code> to feature them here.</p>
    {% endfor %}
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Latest work</p>
      <h2>Recent publications</h2>
    </div>
    <a class="text-link" href="{{ '/publications/' | relative_url }}">All publications →</a>
  </div>
  <div class="publication-list">
    {% assign sorted_pubs = site.data.publications | sort: "year" | reverse %}
    {% for pub in sorted_pubs limit:3 %}
      <article class="publication-item">
        <p class="pub-year">{{ pub.year }}</p>
        <div>
          <h3>{% if pub.url and pub.url != "" %}<a href="{{ pub.url }}">{{ pub.title }}</a>{% else %}{{ pub.title }}{% endif %}</h3>
          <p>{{ pub.authors }}</p>
          <p class="pub-venue">{{ pub.venue }}{% if pub.doi %} · <a href="https://doi.org/{{ pub.doi }}">DOI</a>{% endif %}</p>
        </div>
      </article>
    {% else %}
      <p class="muted">Add publications in <code>_data/publications.yml</code> to show them here.</p>
    {% endfor %}
  </div>
</section>

<section class="contact-cta">
  <div>
    <p class="eyebrow">Work with us</p>
    <h2>Interested in collaborating?</h2>
    <p>We welcome conversations with researchers, students and organisations working with knowledge graphs and AI.</p>
  </div>
  <a class="button button-light" href="{{ '/contact/' | relative_url }}">Get in touch</a>
</section>
