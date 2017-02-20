---
layout: page
title: Past Editions
menu: true
menu_order: 2
---

# Past Editions

<ul>
{% for el in site.data.archive %}
<li> {% if el.url %}<a href="{{ el.url }}" target="_blank">{{el.name}}</a>{% else %}{{ el.name }}{% endif %}</li>
{% endfor %}
</ul>
