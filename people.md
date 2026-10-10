---
layout: page
title: People
permalink: /people/
---

We are a collaborative group of researchers, students and partners at the AI Centre, City St George’s, University of London.

{% assign roles = "Principal Investigator,Academic staff,Research staff,PhD students,Visitors and collaborators" | split: "," %}
{% for role in roles %}
  {% assign members = site.data.members | where: "role", role %}
  {% if members.size > 0 %}
## {{ role }}
<div class="people-grid">
  {% for person in members %}
  <article class="person-card">
    {% if person.photo and person.photo != "" %}
      <img class="person-photo" src="{{ person.photo | relative_url }}" alt="Photo of {{ person.name }}">
    {% else %}
      <div class="person-placeholder" aria-hidden="true">{{ person.name | slice: 0 }}</div>
    {% endif %}
    <div>
      <h3>{{ person.name }}</h3>
      {% if person.position %}<p class="person-position">{{ person.position }}</p>{% endif %}
      {% if person.bio %}<p>{{ person.bio }}</p>{% endif %}
      <div class="person-links">
        {% if person.website %}<a href="{{ person.website }}">Website</a>{% endif %}
        {% if person.scholar %}<a href="{{ person.scholar }}">Google Scholar</a>{% endif %}
        {% if person.orcid %}<a href="{{ person.orcid }}">ORCID</a>{% endif %}
      </div>
    </div>
  </article>
  {% endfor %}
</div>
  {% endif %}
{% endfor %}

To add or update a group member, edit `_data/members.yml`. Add a photo under `assets/images/` and set `photo: /assets/images/filename.jpg` if you want to display one.
