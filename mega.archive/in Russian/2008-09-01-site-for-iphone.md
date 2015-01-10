---
layout: default
categories: [mega, ru]
lang: ru
title: Сайт созданный для айфона
slug: site-for-iphone
mainpicture: isites.jpg
tags: apple flash friends genn.org information iphone 
postid: 578
---



{% figureinfo genn.org в Mac OS X Safari и iPhone Safari %}



Недавно я рассказал о том, <a href="/mega/apple-touch-icons-and-iphone-sites/">как правильно сделать иконку сайта</a> так, чтобы на айфоне это выглядело очаровательно. Теперь же, на примере <a href="http://genn.org/">genn.org</a> объясню, как я сделал так, чтобы мой флешевый сайт на айфоне показывал хоть что-то.

<ol class="h4x0r">
<li><code>&lt;link rel="apple-touch-icon" href="/apple-touch-icon.png" /&gt;</code></li>
<li><code>&lt;link rel="stylesheet" type="text/css" media="only screen and (max-device-width: 480px)" href="css/iphone.css" /&gt;</code></li>
</ol>

Первая строка помогает Сафари в айфоне найти нужную иконку по указанному адресу. Вторая строка подсказывает, какой css-файл использовать для отображения. Размер экрана айфона 320 х 480 пикселей, так что в условии и выставлена максимальная ширина. 
<!--more-->
xHTML выглядит так:
<ol class="h4x0r">
<li><code>&lt;div id="magic"&gt;</code></li>
<li><code style="padding-left: 3em;">&lt;!-- тут флеш --&gt;</code></li>
<li><code>&lt;/div&gt;</code></li>
<li><code>&lt;div id="style"&gt;</code></li>
<li><code style="padding-left: 3em;">&lt;!-- тут контент для айфона --&gt;</code></li>
<li><code>&lt;/div&gt;</code></li>
</ol>

В css-файле не для обычного броузера написано, что надо спрятать div по имени <i>style</i>, а в css-файле для айфона написано, что надо спрятать <i>magic</i>. Вот, похоже, и все. Спасибо <a href="http://cssing.org.ua/">Юре</a> за помощь ;)



## Не получается

Если сайт все равно не выглядит на айфоне так, как задумывалось, а спрятался в уголке и ждет пока его увеличат, или, что тоже бывает, растянулся на весь экран, то следует добавить следующую строку в заголовок xhtml-файла:

<ol class="h4x0r">
<li><code>&lt;meta name = "viewport" content = "width = device-width"&gt;</code></li>
</ol>

Для того, чтобы не дать пользователю увеличивать и уменьшать сайт на экране, надо добавить <i>user-scalable = no</i>:

<ol class="h4x0r">
<li><code>&lt;meta name = "viewport" content = "width = device-width, user-scalable&nbsp;=&nbsp;no"&gt;</code></li>
</ol>

В следующий раз расскажу о некоторых хитростях создания сайтов для айфонов, чтобы пользователи падали от восторга в обморок ;)