---
layout: default
categories: [mega, ru]
lang: ru
title: Twitter + Wordpress
slug: twitter-advanced
mainpicture: twpitter.png
tags: gui information numbers stuff twitter wordpress 
postid: 1356
---


После редизайна блога я обнаружил, что мне необходимо показывать посты из <a href="http://twitter.com/genn_org/">моего твиттера</a> прямо на <a href="/mega/">mega.genn.org</a>.  Под руку попался удобный <a href="http://rick.jinlabs.com/code/twitter/">Twitter for WordPress</a>, но он оказался не очень хорош. При загрузке RSS'а с твиттами он иногда не дожидается окончания и вылетает по таймауту, ничего не загрузив. Пришлось улучшить этот плагин, добавив кеширование. Теперь, если <a href="http://twitter.com/">twitter.com</a> не доступен, плагин просто берет последние сообщения, которые до этого были закешированы.<!--more-->


## Справочная информация

Для использования плагина, следует поместить вызов следующей функции, указав параметры:
<ol class="h4x0r">
	<li><code>twitter_messages(<span style="color:#000">'username'</span>, [msgs], [list], [timestamp], ['link'], [hyperlinks], [twitter_users], [encode_utf8], ['cachefile']);</code></li>
</ol>
<span style="color:#000">username</span> text — имя пользователя твиттера (обязательный параметр)
<span style="color:#000">msgs</span> int — количество отображаемых сообщений, максимум 20
<span style="color:#000">list</span> boolean — показывать сообщения неупорядоченным списком
<span style="color:#000">timestamp</span> boolean — показывать время создания сообщения
<span style="color:#000">link</span> text — <i>'all'</i> весь текст будет ссылаться на сообщение / <i>'' or false</i> не использовать ссылку на сообщение / <i>true или 'текст'</i> ссылаться на сообщение, можно ввести свой <i>текст</i> для ссылки
<span style="color:#000">hyperlinks</span> boolean — показывать URL'ы ссылками
<span style="color:#000">twitter_users</span> boolean — показывать <i>@username</i> ссылками
<span style="color:#000">encode_utf8</span> boolean — перекодировать сообщения в юникод
<span style="color:#000">cachefile</span> text — имя и путь к файлу с кешем (создается автоматически)

Для моего блога эта функция выглядит вот так:
<ol class="h4x0r">
	<li><code>< ? twitter_messages('genn_org', 5, true, false, '', true, true, false, "twitter.rss"); ?></code></li>
</ol>


## Загрузка и установка

Скачивайте на здоровье <a href='/o_O/twitter-advanced/twitteradv.zip'>Twitter Advanced 2.0</a> (8 Кбайтов). Для того, чтобы плагин заработал, его надо скопировать в директорию <i>wp-content/plugins</i> на сервере, где находится Ваш блог, после чего активировать в разделе <i>Plugins</i> панели управления блогом.


## Ошибки в работе

Если что-то пойдет не так, просто отключите плагин. Если же еще что-то пойдет не так, то напишите комментарий ;)