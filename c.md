---
layout: page
title: C
---

{% for cat in site.categories %}

{% if cat[0] == page.title %}

<h3>{{ cat[0]}} Posts</h3>

{% for post in cat[1] %}

<div>
  <a href="{{ post.url | prepend: site.baseurl }}">
    <h5>{{ post.title }}</h5>
    {% endfor %}
  </a>
</div>
{% endif %}
{% endfor %}

<h3>{{page.title}} Links</h3>
<h3>Suggested Reading for {{page.title}}</h3>
