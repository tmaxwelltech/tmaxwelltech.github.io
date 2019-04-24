---
layout: page
title: Topics
permalink: /topics/
---

{% for cat in site.categories %}

{% if cat[0] != "C"  %}

<h3>{{ cat[0]}}</h3>

{% for post in cat[1] %}

<div>
  <a href="{{ post.url | prepend: site.baseurl }}">
    <h5>{{ post.title }}</h5>
    {% endfor %}
  </a>
</div>
{% endif %}
{% endfor %}
