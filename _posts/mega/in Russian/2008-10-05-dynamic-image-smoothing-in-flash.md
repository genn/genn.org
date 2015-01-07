---
layout: default
categories: [mega, ru]
lang: ru
title: Глянцевые черты фотографий во флеше
slug: dynamic-image-smoothing-in-flash
mainpicture: mini.jpg
tags: adobe flash gui 
postid: 828
---


Неаккуратно сделанный флеш-ролик всегда можно узнать по присущим только флешу «водяным знакам качества»: возможности выделить мышкой текст на кнопках и  отчаянному пикселению невекторных объектов. Порой, конечно, приходится ухудшать качество, чтобы не сильно грузить процессор, но это не то, о чем я говорю. Речь о свойстве <i>Allow smoothing</i> у находящихся в <i>Library</i> растровых изображений. Что же делать, когда эти изображения не в библиотеке символов?
<!--more-->


{% figure /o_O/dynamic-image-smoothing-in-flash/allow.jpg~С включенным свойством «Allow smoothing» (пункт «Properties…» контекстного меню растрового объекта в библиотеке) фотографии всегда будут выглядеть дружелюбно (одно из значений слова «smooth») %}





## Неожиданные преграды и их нетрадиционное преодоление

В субботу утром я решил помочь американским товарищам с сайтом, на котором представлены красивые фотографии красивых машинок. Специфика представления фотографий подразумевала изменение их размера в зависимости от размера окна броузера. Ничего особенного, если не считать, что вплоть до восьмой версии флеша Macromedia, а нычне Adobe, их авторы так и не удосужились дать возможность allow smoothing для динамически подгружаемых растровых изображений.

<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="460" height="337" id="smoother" align="middle">
	<param name="allowScriptAccess" value="sameDomain" />
	<param name="allowFullScreen" value="false" />
	<param name="movie" value="/mega/w=^_^=/uploads/2008/10/smoother.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" />	<embed src="/o_O/dynamic-image-smoothing-in-flash/smoother.swf" quality="high" bgcolor="#000000" width="460" height="337" name="smoother" align="middle" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>


{% figureinfo Достаточно навести курсор на изображение Mini, чтобы увидеть, как плохо выглядят растровые изображения с измененными начальными параметрами (угол наклона, размер) без сглаживания во флеше %}



<p style="margin-left: 10px; padding-left: 30px; border-left: 3px solid #005bcd;"><i>Update (спасибо, Женя)</i><br />Начиная с девятой версии флеша есть свойство <i>movieClip.forceSmoothing</i>. Когда оно равно <i>true</i>, изображение изменяет свой размер со сглаживанием. Дальнейший текст не убираю для истории и флеша младше девятой версии, но проблема решается куда проще: <i>movieClip.forceSmoothing=true</i>.</p>

Несмотря на отсутствие легких путей решения проблемы в Flash 8 и младше, как это часто бывает с флешем, нашелся не самый сложный обходной путь. Подгружаем фотографию, после чего создаем объект <i>BitmapData</i>, куда и переводим загруженное изображение. Оказывается, ничего не стоит включить сглаживание при этой процедуре. После того, как изображение загружено, а сглаживание включено, «отрисовываем» изображение.

<ol class="h4x0r">
<li><code>import flash.display.*; <i>// подгружаем необходимую для работы с BitmapData библиотеку</i></code>
</li><li><code>_root.createEmptyMovieClip("pic",_root.getNextHighestDepth()); <i>// сюда поместим картинку со сглаживанием</i></code></li>
<li><code>_root.createEmptyMovieClip("tmpic",_root.getNextHighestDepth()); <i>// в этот символ загрузим jpeg</i></code></li>
<li><code>_root.tmpic._visible=false;</code></li>
<li><code>… <i>// опускаем код прелоадера, файл загружается в _root.tmpic</i></code></li>
<li><code>… <i>// дальнейший код выполняется после завершения загрузки изображения</i></code></li>
<li><code>var bitmap:BitmapData = new BitmapData(</code></li>
<li><code style="padding-left: 3em;">_root.tmpic._width,</code></li>
<li><code style="padding-left: 3em;">_root.tmpic._height,</code></li> 
<li><code style="padding-left: 3em;">true);</code></li>
<li><code></code></li>
<li><code>_root.pic.attachBitmap(</code></li>
<li><code style="padding-left: 3em;">bitmap,</code></li>
<li><code style="padding-left: 3em;">_root.pic.getNextHighestDepth(),</code></li>
<li><code style="padding-left: 3em;">"auto",</code></li>
<li><code style="padding-left: 3em;">true); <i>// этот параметр включает сглаживание</i></code></li>
<li><code></code></li>
<li><code>bitmap.draw(_root.tmpic); <i>// переносим фотографию на холст ;)</i></code></li>
</ol>

Пример рабочий, проверено на себе. Поскольку я никак не могу заставить себя полностью перебраться на AS3, программный код написан для Action Script 2, да и требования к сайту вынуждали пользоваться именно этой версией. Но настанет тот час, и я чувствую, что очень скоро, когда я буду вынужден портировать этот код, и не только его, на Action Script 3 или даже выше ;)


## ✖✖✖

Я уверен, что не открыл революционный способ (поиск по интернету показал, что я не один такой умный). Тем не менее, уверен, что это простое решение наверняка будет полезным, ведь вопросы об этом мне задают с завидной регулярностью. 

Из того же поиска по интернету стало известно, что предложенный выше способ не будет работать, если подгружать изображения с других доменов. Вроде бы есть решения и для этой проблемы, но все они, насколько я заметил, сводятся к совету сделать свой прокси и грузить изображения через него. В это же время <a href="http://www.yswfblog.com/blog/2007/08/29/flickr-now-even-more-flash-friendly/">flickr подружился с флешем</a>, так что писать интерфейсы для работы с фотографиями с этого ресурса уже не составит труда.

Хочется верить, что в ожидаемом и анонсируемом <a href="http://www.adobe.com/products/flash/">Flash CS4</a> встроят не только поддержку 3d (да-да, там будет какой-то псевдо-трехмерный инструментарий), но и кучу недостающих мелочей. Таких как, например, dynamic image smoothing, который появился в Flash CS3.