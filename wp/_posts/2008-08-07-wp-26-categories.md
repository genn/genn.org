---
title: Что делать, если пропали категории после перехода на WP 2.6
author: Genn
layout: post
permalink: /2008/wp-26-categories/
tags:
  - baka-baka
  - information
---
<img src="http://mega.genn.org/=^_^=/uploads/2008/08/wp261.jpg" alt="" title="WordPress 2.6 ruins categories" width="460" height="200" class="alignnone size-full wp-image-510" />

Я только что обновил WordPress до версии 2,6, после чего пропали все категории. Не долго расстраиваясь, восстановил из бекапа таблицу *wp_categories*, после чего выполнил следующие sql-запросы:

<ol class="h4x0r">
  <li>
    <code>update wp_term_taxonomy, wp_categories set description = cat_name where term_id = cat_ID</code>
  </li>
  <li>
    <code>update wp_terms, wp_categories set name = cat_name, slug = category_nicename where term_id = cat_ID</code>
  </li>
</ol>

Все заработало! Все дело в том, что теперь категории хранятся в нескольких таблицах, а WP этого почему-то не учитывает. Sql-запрос просто делает работу за него ;)