---
title: Сайт созданный для айфона
author: Genn
layout: post
permalink: /2008/site-for-iphone/
tags:
  - apple
  - flash
  - friends
  - genn.org
  - information
  - iphone
---
<img src="http://mega.genn.org/=^_^=/uploads/2008/08/isites.jpg" alt="genn.org both in Safari and iPhone Safari" width="460" height="250" />

<p class="imgdesc">
  genn.org в Mac OS X Safari и iPhone Safari
</p>

Недавно я рассказал о том, [как правильно сделать иконку сайта][1] так, чтобы на айфоне это выглядело очаровательно. Теперь же, на примере [genn.org][2] объясню, как я сделал так, чтобы мой флешевый сайт на айфоне показывал хоть что-то.

<ol class="h4x0r">
  <li>
    <code>&lt;link rel="apple-touch-icon" href="/apple-touch-icon.png" /&gt;</code>
  </li>
  <li>
    <code>&lt;link rel="stylesheet" type="text/css" media="only screen and (max-device-width: 480px)" href="css/iphone.css" /&gt;</code>
  </li>
</ol>

Первая строка помогает Сафари в айфоне найти нужную иконку по указанному адресу. Вторая строка подсказывает, какой css-файл использовать для отображения. Размер экрана айфона 320 х 480 пикселей, так что в условии и выставлена максимальная ширина.  
<!--more-->

  
xHTML выглядит так:

<ol class="h4x0r">
  <li>
    <code>&lt;div id="magic"&gt;</code>
  </li>
  <li>
    <code style="padding-left: 3em;">&lt;!-- тут флеш --&gt;</code>
  </li>
  <li>
    <code>&lt;/div&gt;</code>
  </li>
  <li>
    <code>&lt;div id="style"&gt;</code>
  </li>
  <li>
    <code style="padding-left: 3em;">&lt;!-- тут контент для айфона --&gt;</code>
  </li>
  <li>
    <code>&lt;/div&gt;</code>
  </li>
</ol>

В css-файле не для обычного броузера написано, что надо спрятать div по имени *style*, а в css-файле для айфона написано, что надо спрятать *magic*. Вот, похоже, и все. Спасибо [Юре][3] за помощь ;)

## Не получается

Если сайт все равно не выглядит на айфоне так, как задумывалось, а спрятался в уголке и ждет пока его увеличат, или, что тоже бывает, растянулся на весь экран, то следует добавить следующую строку в заголовок xhtml-файла:

<ol class="h4x0r">
  <li>
    <code>&lt;meta name = "viewport" content = "width = device-width"&gt;</code>
  </li>
</ol>

Для того, чтобы не дать пользователю увеличивать и уменьшать сайт на экране, надо добавить *user-scalable = no*:

<ol class="h4x0r">
  <li>
    <code>&lt;meta name = "viewport" content = "width = device-width, user-scalable&nbsp;=&nbsp;no"&gt;</code>
  </li>
</ol>

В следующий раз расскажу о некоторых хитростях создания сайтов для айфонов, чтобы пользователи падали от восторга в обморок ;)

 [1]: http://mega.genn.org/2008/apple-touch-icons-and-iphone-sites/
 [2]: http://genn.org/
 [3]: http://cssing.org.ua/