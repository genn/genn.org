---
title: FLV-video preloader (Flash, AS2, working solution, howto)
author: Genn
layout: post
permalink: /2009/flv-video-preloader-flash-as2-working-solution-howto/
tags:
  - flash
  - friends
---
<img src="http://mega.genn.org/=^_^=/uploads/2009/02/75percentsflv.jpg" width="460" height="209" alt="Preloading .flv" />

Однажды утром, когда я дорисовывал логотипы для одних милых ребят, меня поприветствовал [Геллер][1]. Его надо было спасать. Каждый может попасть в такую ситуацию: заканчивается кислород в баллоне, а до ближайшего телепорта восемь парсеков, любимая девушка угнала машину с полным багажником кокаина или необходим простенький флеш-ролик. Удивительно, но Артему как раз не хватало ролика с проигрыванием видео. Ничего особенного: первый кадр, по клику на который начинается загрузка видео, а после загрузки оно показывается от начала до конца и останавливается на первом кадре. Если вновь нажать на первый кадр, то видео покажется сначала. Ничего особенного, если не учитывать предзагрузки .flv.<!--more-->

## Как добиться загрузки .flv

Когда я написал кусок со всякими *NetStream&#8217;ами*, в голову пришла идея, что все уже сделано до нас. Пятнадцать секунд общения с поисковыми способностями гугла подтвердили мое предположение: ребята из Bloommedia [уже придумали][2] «How to preload FLV video in flash with actionscript 2.0». К сожалению, как это отражено и в комментариях к их посту, пример не рабочий: при первом просмотре видео все равно дергается и толку от прелоадера мало. К счастью, все поправимо, и сделать это довольно легко! Ниже пример работы прелоадера и исправленный исходный код, который не только нормально выполняет функции прелоадера, но и позволяет начинать загрузку по клику на видео.



<p class="imgdesc">
  Пример работы flv-прелоадера (размер загружаемого файла 2,6 Мбайта)
</p>

Не буду перегружать страницу полным исходным кодом, ведь его можно [скачать][3] (.fla, 304 Кбайта). Остановлюсь лишь на существенном отличии от кода Bloommedia.

<ol class="h4x0r">
  <li>
    <code>&lt;i>// после того, как состоялась загрузка&lt;/i></code>
  </li>
  <li>
    <code>mns.seek(0); &lt;i>// перематываем на начало&lt;/i></code>
  </li>
  <li>
    <code>&lt;i>// mns.play("dom-kelly.flv");  — так включается проигрывание у Bloommedia. Это неправильно и лишь начинает загрузку заново (ничего не кешируется в большинстве случаев)&lt;/i></code>
  </li>
  <li>
    <code>mns.pause(); &lt;i>// снимает с паузы и начинает проигрывание загруженного ролика (кешируется всегда!)&lt;/i></code>
  </li>
</ol>

Итак, если использовать метод *NetStream pause()*, а не *play()*, то пользователь не будет обречен наблюдать рывки загружаемого видео. У него все покажется хорошо.

## Briefly in English

Just in case any wonderer visited this page in order to make working flv-video preloader, I&#8217;ll repeat the main statements.

I found [almost working example][4] from Bloommedia. The problem was it didn&#8217;t cache the video. To solve it I just replaced *play()* method after video is loaded with *pause()* method. Unfixed version worked like this: loaded the whole movie, scrolled to the begining of it, then told NetStream to start loading it again (and playing while loading) in hope, that video was cached. Now it works the next way: after loading the whole movie player scrolls to the begining and starts playing it. Looks brilliant, right? ;)

You can [download source of flv-video preloader][3] (.fla, 304 Kbytes).

 [1]: http://ageller.ru/
 [2]: http://www.bloommedia.co.uk/blog/technical/preload-flv-video-in-flash-actionscript-20-2
 [3]: /=^_^=/uploads/2009/02/slumdog.fla
 [4]: http://www.bloommedia.co.uk/blog/technical/preload-flv-video-in-flash-actionscript-20-2/trackback