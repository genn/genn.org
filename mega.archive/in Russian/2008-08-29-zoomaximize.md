---
layout: default
categories: [mega, ru]
lang: ru
title: Zoom : Maximize
slug: zoomaximize
mainpicture: zoom-zoom-maxi-zoom.png
tags: apple friends gui microsoft 
postid: 607
---


Все началось с того, что <a href="http://wa11.com/">wa11</a> нашел какой-то некрасивый ноутбук и спросил, нет ли чего получше, но только не Apple. Я никого не убеждал и не буду убеждать покупать компьютеры и ноутбуки под управлением Mac OS X, но действительно считаю, что эта операционная система лучше, чем любая версия Windows. Мне вообще всегда нравились графические надстройки на *nix. Итак, в комментариях появился <a href="http://antonten.com/">Антон Тен</a> размахивающий пламенным мечом просвещения. Выяснилось, что единственным смущающим в Mac OS X аспектом оказалось отсутствие кнопки, которой я в Windows никогда не пользовался. Речь идет о <i>Maximize</i>. Не знаю как в русской версии, наверное что-то типа <i>Развернуть на весь экран</i>. Да, действительно такой кнопки в Mac OS X нет, зато есть кнопка <i>Zoom</i>. И хоть кажется, будто функции у них одинаковые, это не так. Различия в действии кнопок очень хорошо подчеркивают идеологию и работу операционных систем Windows и Mac OS X.
<!--more-->


## Windows



{% figure /o_O/zoomaximize/windowvista.jpg %}



В Windows предполагается, что если пользователя не устраивает стандартный размер окна, то он может просто развернуть его на весь экран, чтобы влезло побольше контента. Это, на первый взгляд, кажется логичной идеей и было бы таковой, будь у нас только одно окно. Что фактически получается при разворачивании окна на весь экран? Модальность! Мы не можем выйти за рамки этого окна, не видим, что происходит в других окнах и уж точно не сможем без труда перетащить из этого окна картинку на рабочий стол или в другое приложение. Уже для всех очевидно, даже написано у Раскина, с которым я <a href="/mega/just-raskin-around/">недавно спорил</a>, что модальным окнам и приложениям надо дать отпор. В многозадачной системе надо дать пользователю все возможности для работы с множеством задач, а не ограничивать его деятельность лишь потому, что не удалось придумать более удачного решения в интерфейсе.

<span style="font-size: 24px; color: #000;padding-right: 10px;">+</span>исключена деактивация окна случайным кликом за его пределами
<span style="font-size: 24px; color: #000;padding-right: 10px;">+</span> менее загружен экран
<span style="font-size: 24px; color: #000;padding-right: 10px;">+</span> на кнопке меняется пиктограмма, так что понятно, что произойдет с окном при клике на кнопку
<span style="font-size: 24px; color: #000;padding-right: 10px;">–</span> модальность интерфейса (выстрел по многозадачности)
<span style="font-size: 24px; color: #000;padding-right: 10px;">–</span> невозможность изменения размера окна распахнутого на весь экран в отличие от окна просто растянутого на максимальный размер
<span style="font-size: 24px; color: #000;padding-right: 10px;">–</span> усложняется использование технологии Drag & Drop



## Mac OS X



{% figure /o_O/zoomaximize/macosx.jpg %}



В Mac OS X нашли другое решение для изменения размера и даже сути окна приложения. Распахивать на весь экран — не дело. «Не задавайте максимально возможный размер окна приложения по-умолчанию. Некоторые экраны намного больше, чем требуется для окна приложения», — говорит нам <a href="http://developer.apple.com/documentation/UserExperience/Conceptual/AppleHIGuidelines/XHIGWindows/chapter_18_section_5.html#//apple_ref/doc/uid/20000961-BACEDHFG">Apple Human Interface Guidelines</a>. Вместо этого предлагается технология зуминга (от англ. zoom). На январской конференции <a href="/mega/envision-praha/">Envision Event</a> в Праге при обсуждении будущего интерфейсов и организации информации всякий раз приходили к выводу, что зуминг — перспективная ветка эволюции интерфейсов. Речь шла немного о другом зуме, но принцип тот же. Я уже упоминал о нем рассказывая, почему <a href="/mega/dumbtop/">у Bump Top нет перспектив</a>.

Итак, что же делает кнопка <i>Zoom</i> со стандартным окном Mac OS X? В самом простом случае, она просто меняет размеры окна таким образом, чтобы его содержимое было представлено наиболее оптимально. На моей <a href="/mega/ibook-iback/">Little Monica</a> с разрешением 1024 x 768 пикселей большинство сайтов окажутся открытыми на весь экран, если я нажму на такую кнопку в Сафари. На <a href="/mega/apple-cinema-display-23/">Apple Cinema Display</a> домашней Monica и рабочей Tough Monica это окно вряд ли займет половину экрана.



{% figure /o_O/zoomaximize/itunes.jpg~Разные состояния окна iTunes благодаря работе кнопки Zoom %}



В более сложных случаях, когда кнопка <i>Zoom</i> действительно занимается тем, что «углубляется» в возможности программы или напротив «отдаляется» от них, меняется общий вид окна. Хорошим примером может служить iTunes, у которого есть два состояния окна. В зависимости от того, что я делаю с программой, я выбираю то или иное состояние. Признаюсь честно, у меня обычно окно закрыто и музыка играет на фоне, а я ее не контролирую.

Такой принцип работы с окнами в Mac OS X вызван изначальной направленностью на максимальное использование <i>Drag & Drop</i> и многозадачности. Модальные окна не пройдут! ;) В некоторых программах, например в <a href="http://adiumx.com/">Adium'е</a>, окно раскрывается на весь экран при нажатии на кнопку <i>Zoom</i>.

<span style="font-size: 24px; color: #000;padding-right: 10px;">+</span> правильная и оптимальная работа с контентом
<span style="font-size: 24px; color: #000;padding-right: 10px;">+</span> удобное использование Drag & Drop
<span style="font-size: 24px; color: #000;padding-right: 10px;">+</span> немодальный многозадачный интерфейс
<span style="font-size: 24px; color: #000; padding-right: 10px;">±</span> на экране больше полезной информации, но он и более загружен
<span style="font-size: 24px; color: #000;padding-right: 10px;">–</span> возможна деактивация при случайном клике за пределами окна
<span style="font-size: 24px; color: #000;padding-right: 10px;">–</span> на кнопке <i>Zoom</i> всегда знак плюса, так что нельзя по ее состоянию понять, что будет с окном при клике



## Вывод

Учитывая общие тенденции и то, что я остановил свой выбор на Mac OS X, будущее все-таки за многозадачностью, немодальностью и зуминговыми интерфейсами. Кроме того, я никогда не распахивал окна на весь экран, особенно окна броузера. Может быть это вызвано тем, что ширина моих мониторов и дисплеев не была меньше 1600 пикселей уже последние лет 8? Тем не менее, все окна броузера у меня обычно шириной со стандартный сайт, что и видно на скриншоте выше. Я считаю, что <i>Maximize</i> проиграл, а к мнимой загруженности экрана окнами быстро привыкаешь и даже находишь комфортной.

Если же руководствоваться тем, что пользователь должен сам решить для себя, как ему удобнее работать, то ничего не мешало бы Apple добавить еще один пункт в настройки, позволяющий пользователю выбирать каким образом он хочет взаимодействовать с окнами и их размерами.