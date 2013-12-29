---
title: Twitter + WordPress
author: Genn
layout: post
permalink: /2009/twitter-advanced/
ljID:
  - 388
categories:
  - stuff
tags:
  - gui
  - information
  - numbers
  - stuff
  - twitter
  - wordpress
---
<img src="http://mega.genn.org/=^_^=/uploads/2009/03/twpitter.png" alt="Twitter Advanced" title="Twitter Advanced" width="636" height="400" />

После редизайна блога я обнаружил, что мне необходимо показывать посты из [моего твиттера][1] прямо на [mega.genn.org][2]. Под руку попался удобный [Twitter for WordPress][3], но он оказался не очень хорош. При загрузке RSS&#8217;а с твиттами он иногда не дожидается окончания и вылетает по таймауту, ничего не загрузив. Пришлось улучшить этот плагин, добавив кеширование. Теперь, если [twitter.com][4] не доступен, плагин просто берет последние сообщения, которые до этого были закешированы.<!--more-->

## Справочная информация

Для использования плагина, следует поместить вызов следующей функции, указав параметры:

<ol class="h4x0r">
  <li>
    <code>twitter_messages(&lt;span style="color:#005bcd">'username'&lt;/span>, [msgs], [list], [timestamp], ['link'], [hyperlinks], [twitter_users], [encode_utf8], ['cachefile']);</code>
  </li>
</ol>

<span style="color:#005bcd">username</span> text — имя пользователя твиттера (обязательный параметр)  
<span style="color:#005bcd">msgs</span> int — количество отображаемых сообщений, максимум 20  
<span style="color:#005bcd">list</span> boolean — показывать сообщения неупорядоченным списком  
<span style="color:#005bcd">timestamp</span> boolean — показывать время создания сообщения  
<span style="color:#005bcd">link</span> text — *&#8216;all&#8217;* весь текст будет ссылаться на сообщение / *&#8221; or false* не использовать ссылку на сообщение / *true или &#8216;текст&#8217;* ссылаться на сообщение, можно ввести свой *текст* для ссылки  
<span style="color:#005bcd">hyperlinks</span> boolean — показывать URL&#8217;ы ссылками  
<span style="color:#005bcd">twitter_users</span> boolean — показывать *@username* ссылками  
<span style="color:#005bcd">encode_utf8</span> boolean — перекодировать сообщения в юникод  
<span style="color:#005bcd">cachefile</span> text — имя и путь к файлу с кешем (создается автоматически)

Для моего блога эта функция выглядит вот так:

<ol class="h4x0r">
  <li>
    <code>&lt; ? twitter_messages('genn_org', 5, true, false, '', true, true, false, "twitter.rss"); ?></code>
  </li>
</ol>

## Загрузка и установка

Скачивайте на здоровье [Twitter Advanced 2.0][5] (8 Кбайтов). Для того, чтобы плагин заработал, его надо скопировать в директорию *wp-content/plugins* на сервере, где находится Ваш блог, после чего активировать в разделе *Plugins* панели управления блогом.

## Ошибки в работе

Если что-то пойдет не так, просто отключите плагин. Если же еще что-то пойдет не так, то напишите комментарий ;)

 [1]: http://twitter.com/genn_org/
 [2]: http://mega.genn.org/
 [3]: http://rick.jinlabs.com/code/twitter/
 [4]: http://twitter.com/
 [5]: http://mega.genn.org/=^_^=/uploads/2009/03/twitteradv.zip