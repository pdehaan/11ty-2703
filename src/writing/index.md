---
layout: base.liquid
---

{% for book in collections.writing %}
  <h2><a href="{{ book.url }}">{{ book.data.bookTitle }}</a></h2>
  <ul>
  {% for chapter in book.data.chapters %}
  <li><a href="{{ chapter.url }}">{{ chapter.data.chapter }}: {{ chapter.data.chapterTitle }}</a></li>
  {% endfor %}
  </ul>
{% endfor %}
