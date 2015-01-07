---
layout: default
categories: [mega, ru]
lang: ru
title: FLV-video preloader (Flash, AS2, working solution, howto)
slug: flv-video-preloader-flash-as2-working-solution-howto
mainpicture: 75percentsflv.jpg
tags: flash friends 
postid: 1103
---


Однажды утром, когда я дорисовывал логотипы для одних милых ребят, меня поприветствовал <a href="http://ageller.ru/">Геллер</a>. Его надо было спасать. Каждый может попасть в такую ситуацию: заканчивается кислород в баллоне, а до ближайшего телепорта восемь парсеков, любимая девушка угнала машину с полным багажником кокаина или необходим простенький флеш-ролик. Удивительно, но Артему как раз не хватало ролика с проигрыванием видео. Ничего особенного: первый кадр, по клику на который начинается загрузка видео, а после загрузки оно показывается от начала до конца и останавливается на первом кадре. Если вновь нажать на первый кадр, то видео покажется сначала. Ничего особенного, если не учитывать предзагрузки .flv.<!--more-->


## Как добиться загрузки .flv

Когда я написал кусок со всякими <i>NetStream'ами</i>, в голову пришла идея, что все уже сделано до нас. Пятнадцать секунд общения с поисковыми способностями гугла подтвердили мое предположение: ребята из Bloommedia <a href="http://www.bloommedia.co.uk/blog/technical/preload-flv-video-in-flash-actionscript-20-2">уже придумали</a> «How to preload FLV video in flash with actionscript 2.0». К сожалению, как это отражено и в комментариях к их посту, пример не рабочий: при первом просмотре видео все равно дергается и толку от прелоадера мало. К счастью, все поправимо, и сделать это довольно легко! Ниже пример работы прелоадера и исправленный исходный код, который не только нормально выполняет функции прелоадера, но и позволяет начинать загрузку по клику на видео.

	<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="460" height="195" id="slumdog" align="middle">
	<param name="allowScriptAccess" value="sameDomain" />
	<param name="allowFullScreen" value="false" />
	<param name="movie" value="/=^_^=/uploads/2009/02/slumdog.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" />	<embed src="/=^_^=/uploads/2009/02/slumdog.swf" quality="high" bgcolor="#000000" width="460" height="195" name="slumdog" align="middle" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>


{% figureinfo Пример работы flv-прелоадера (размер загружаемого файла 2,6 Мбайта) %}



Не буду перегружать страницу полным исходным кодом, ведь его можно <a href="/=^_^=/uploads/2009/02/slumdog.fla">скачать</a> (.fla, 304 Кбайта). Остановлюсь лишь на существенном отличии от кода Bloommedia.

<ol class="h4x0r">
<li><code><i>// после того, как состоялась загрузка</i></code></li>
<li><code>mns.seek(0); <i>// перематываем на начало</i></code></li>
<li><code><i>// mns.play("dom-kelly.flv");  — так включается проигрывание у Bloommedia. Это неправильно и лишь начинает загрузку заново (ничего не кешируется в большинстве случаев)</i></code></li>
<li><code>mns.pause(); <i>// снимает с паузы и начинает проигрывание загруженного ролика (кешируется всегда!)</i></code></li>
</ol>

Итак, если использовать метод <i>NetStream pause()</i>, а не <i>play()</i>, то пользователь не будет обречен наблюдать рывки загружаемого видео. У него все покажется хорошо.



## Briefly in English

Just in case any wonderer visited this page in order to make working flv-video preloader, I'll repeat the main statements.

I found <a href="http://www.bloommedia.co.uk/blog/technical/preload-flv-video-in-flash-actionscript-20-2/trackback">almost working example</a> from Bloommedia. The problem was it didn't cache the video. To solve it I just replaced <i>play()</i> method after video is loaded with <i>pause()</i> method. Unfixed version worked like this: loaded the whole movie, scrolled to the begining of it, then told NetStream to start loading it again (and playing while loading) in hope, that video was cached. Now it works the next way: after loading the whole movie player scrolls to the begining and starts playing it. Looks brilliant, right? ;)

You can <a href="/=^_^=/uploads/2009/02/slumdog.fla">download source of flv-video preloader</a> (.fla, 304 Kbytes).