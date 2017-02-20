---
layout: page
title: Past Editions
menu: true
menu_order: 2
---

# Past Editions

Archived material from the past editions of {{site.polictf}}:

<ul>
{% for el in site.data.archive %}
<li> {% if el.url %}<a href="{{ el.url }}" target="_blank">{{el.name}}</a>{% else %}{{ el.name }}{% endif %}</li>
{% endfor %}
</ul>

External resources: see also [CTFtime.org](https://ctftime.org/ctf/40)
and [CTFs on github](https://github.com/ctfs) for past writeups and other information.