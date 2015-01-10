---
layout: default
categories: [mega, ru]
lang: ru
title: айТриптих 
slug: apple-touch-icons-and-iphone-sites
tags: apple design flash friends fun iphone 
postid: 490
---
<img src='/o_O/apple-touch-icons-and-iphone-sites/main.png' alt='Встретились ;)'  width="460" height="98"/>

Теперь моим сайтом и блогом можно любоваться и с айфона. При этом, если добавить любой из них на экран телефона в виде иконки, он будет обозначен своей уникальной красивой  стеклянной пиктограммой (их хорошо видно на картинке вверху). Поскольку сеть изобилует ложными рекомендациями о том, как добиться такого результата (я про иконку), дальше я открою тайны правильного создания красивой пиктограммы. В завершение будут представлены скриншоты трех сайтов для айфона. Два из них рисовал я, а третий (mega) — обработанный плагин <a href="http://wordpress.org/extend/plugins/wptouch/">WPtouch</a>.
<!--more-->


## Иконка на home screen телефона iPhone или плеера iPod Touch

Нет ничего сложного в изготовлении подходящего файла. Неплохого результата можно добиться, если создать PNG размером 129 х 129 пикселей.

<img src='/o_O/apple-touch-icons-and-iphone-sites/apple-touch-icons.png' alt='Apple touch icon'  width="460" height="150"/>


{% figureinfo По всему интернету разбросаны размеры сторон иконок от 48  до 69 пикселей (for best results), но мы-то с Apple Inc. знаем их правильные длину и ширину %}




style="margin-left: 10px; padding-left: 30px; border-left: 3px solid #000;"><i>Update (спасибо <a href="http://res3t.livejournal.com/">r3s3t</a>)</i><br />Не смотря на то, что иконка на сайте Apple размером 129 на 129 пикселей, в руководстве разработчика указан размер 57 x 57 пикселей при разрешении 72 ppi. Действительно, в таком размере каждый пиксель на своем месте.  Надо отдать должное алгоритмам уменьшения картинки — 129 х 129 пикселей сжимаются в 57 х 57 пикселей настолько хорошо, что не используя пиксельную графику и не разберешься.</p>


{% figure /o_O/apple-touch-icons-and-iphone-sites/iphoneicons57.png %}


<p style="margin-left: 10px; padding-left: 30px; border-left: 3px solid #000;">Откуда же взялся размер 129 х 129 пикселей? Может он используется для айтьюнса или это задел для будущих разработок? Увидим ;)</p>

После того, как файл будет на сервере, в заголовок каждой html-страницы следует добавить одну строку:

<ol class="h4x0r">
<li><code>&lt;link rel="apple-touch-icon" href="/apple-touch-icon.png"/&gt;</code></li></ol>
<p 
{% figureinfo /apple-touch-icon.png — имя и путь к файлу с иконкой %}



После всех этих процедур айфон поймет что за картинку ему использовать, обрежет ей уголки и заключит в стеклянный контейнер.

<img src='/o_O/apple-touch-icons-and-iphone-sites/add2home.png' alt='Add icon to iPhone/iPod touch home screen'  width="320" height="244"/>



## mega.genn.org

<img src='/o_O/apple-touch-icons-and-iphone-sites/mega.png' alt='iphoned mega.genn.org'  width="320" height="480"/>



## genn.org | reborn

<img src='/o_O/apple-touch-icons-and-iphone-sites/genn.png' alt='iphoned genn.org'  width="320" height="480"/>



## Hack & Dev

Совершенно случайно помог на выходных <a href="http://farcaller.net/">farcaller</a>'у сделать <a href="http://iphone.hackndev.org/">сайт</a>, посвященный замечательным разработкам его команды для айфона. В принципе, с этого сайта и начались все переделки моих ресурсов ;)

<img src='/o_O/apple-touch-icons-and-iphone-sites/hnd1.png' alt='iphoned Hack & Dev'  width="320" height="480"/>

<img src='/o_O/apple-touch-icons-and-iphone-sites/hnd2.png' alt='iphoned Hack & Dev'  width="320" height="480"/>

<img src='/o_O/apple-touch-icons-and-iphone-sites/hnd3.png' alt='iphoned Hack & Dev'  width="320" height="480"/>



## ✖✖✖

iPhone-версии <a href="http://genn.org/">genn.org</a>, <a href="http://iphone.hackndev.org/">iphone.hackndev.org</a> и <a href="http://apple.com/">apple.com</a> сверстал  <a href="http://akella.org.ua/">Акелла</a>. Хотя, постойте, Apple он не верстал ;)