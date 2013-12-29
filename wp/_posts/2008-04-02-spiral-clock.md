---
title: Механические часы, отбросьте лишние стрелки!
author: Genn
layout: post
permalink: /2008/spiral-clock/
no_lj:
  - 1
categories:
  - stuff
tags:
  - esquire
  - friends
  - fun
  - gui
  - sux
---
<img src="http://mega.genn.org/=^_^=/uploads/2008/04/whatever.jpg" height="249" width="460" alt="whatever clock" /> <p class="imgdesc">
  Раньше у меня на полке стояли такие часы. Они разбились и, как мне кажется, тем самым достигли абсолюта своей концепции
</p>

Не так давно, вчера, примерно в семь часов вечера, я захотел узнать который час. Телефон валялся на столе, а я в это время валялся в трех метрах от него на диване, со свежим номером Esquire&#8217;a. Взгляд на часы, стоящие на полке, ничего не дал. Они оказались абсолютно неэлектронными, а очень даже механическими.Край полки закрывал где-то половину циферблата, так что я смог увидеть, что в тот момент было пять минут чего-то. То, что не четырех-пяти-шести я догадался, зная время, в которое покинул работу. Но вот дальше этого сведений не было.<!--more-->Механические часы абсолютно не обладают прямой информативностью. То есть, глядя на секундную стрелку, никак не угадать, сколько минут, а, глядя на минутную — который час. С обратной информативностью все в порядке: по часовой стрелке можно приблизительно представить, сколько минут прошло с начала часа. Чем больше циферблат, тем точнее можно представить количество минут. Это делает минутную стрелку явно избыточной и объясняет, почему я больше люблю электронные часы.Все закончилось тем, что мне пришлось вставать, брать iPhone и смотреть на нем который час. Я мог посмотреть и на часы на полке, но в это время меня злило их несовершенство. Больше всего раздражало то, что есть лишние стрелки. Получается комичная ситуация: стрелок больше, чем требуется, но время я узнать все равно не могу.

  
## Стрелка минус, измерение плюс

Вопреки ожиданиям, выбрасывать придется не минутную стрелку. Просто следует позволить ей сообщать, который час. Для того, чтобы придать минутной стрелке больше информативности, можно изменять ее длину в зависимости от того, который сейчас час. Это, кстати, сделает ненужной часовую стрелку. Траекторией движения дальнего конца минутной стрелки будет спираль ;)

<img src="http://mega.genn.org/=^_^=/uploads/2008/04/spiral1.png" height="300" width="460" alt="spiral1.png" /> <p class="imgdesc">
  Направление минутной стрелки указывает на количество минут, а ее длина — на количество часов
</p>

На схеме выше проблема в двух с половиной вещах. Первое — не хватает одного витка для промежутка 12 часов — 1 час. Второе — очень сложно проследить взглядом какому часу соответствует длина стрелки. Половина — непонятно, как вменяемо и дешево реализовать выдвигающуюся стрелку.Я сосредоточился на удобочитаемости часов, что родило несколько забавных концепций циферблата (мне больше всего нравится левая нижняя, хочу себе что-то такое на стену):

<img src="http://mega.genn.org/=^_^=/uploads/2008/04/spiral2.png" height="493" width="460" alt="spiral2.png" /> <p class="imgdesc">
  Улучшение читабельности циферблата свелось к выбрасыванию лишних цифр (понятно, что между часом и тремя идут два часа, незачем это обозначать). Также стало очевидным, что витков должна быть чертова дюжина, а минуты только засоряют пространство
</p>

Удобочитаемость если и увеличилась, то совсем не намного, не говоря уже о том, что спирали типа левой верхней и правой нижней запросто могут сбить с толку, потому что правильно совпадают с траекторией дальнего конца минутной стрелки только в ноль минут.Многим замечательные идеи приходят перед сном, мне же такая пришла в тот момент, когда я кормил Пони шоколадкой (она начала есть вкуснятины после длительного перерыва). Абсолютно незачем менять размер стрелки и придумывать, как обозначить ее длину! Можно же просто нанести часы (в который раз удивляюсь русскому языку ;)), вернее, их номера, прямо на стрелку, стрелку поставить перед спиралью, а к спирали прикрепить бегунок, который бы двигался благодаря движению стрелки. По положению бегунка можно судить о том, который час, а по углу наклона стрелки — о том, сколько сейчас минут! Не беда, что цифры будут почти половину всего времени вверх ногами. Если привыкнуть, то их можно заменить на полосочки. Уж в шести отрезках можно ориентироваться без труда, особенно людям, которые вслепую печатают на 102-клавишной клавиатуре ;)

<img src="http://mega.genn.org/=^_^=/uploads/2008/04/spiral3.png" height="431" width="460" alt="Spiral clock concept" /> <p class="imgdesc">
  Час между 12-ю и часом был не забыт и удостоился быстрого перехода к самой середине спирали
</p>

Так, вроде бы, выглядит неплохо, но как же реализовать это все в реальности? Чтобы не прослыть клевым футуристом, а как-то придвинуться к гордому отряду промышленных дизайнеров, я попытался изобразить рабочую модель в векторе и в проекции ;) Итак, у нас есть прозрачная стрелка с желобком с внутренней стороны и цифрами с внешней. Есть спираль, над которой эта стрелка совершает путь. Наконец, есть шарик (на рисунке он мутно-красный), который прикреплен к спирали так, что может по ней скользить (как кости в счетах), но заходит наполовину в желобок на стрелке.

<img src="http://mega.genn.org/=^_^=/uploads/2008/04/spiral4.png" height="464" width="454" alt="spiral4.png" />

Стрелка двигается, тянет за собой шарик, который скользит по спирали и отмечает своим положением который час (его видно сквозь прозрачное чрево стрелки). Как только стрелка достигает 12:59:59 и должен наступить час, шарик по соединяющей линии, находящейся *за* спиралью, соскальзывает вниз. Внизу он опять ныряет в желобок стрелки и заново начинает свой 12-часовой путь. Благодаря тому, что короткий путь в центр спирали находится сзади, ему не мешает ни стрелка, ни витки. Мы же сразу договорились, что он прикреплен к спирали и может по ней скользить, а гравитацию не так просто нарушить — я пробовал. Раз в 12 часов трудяга шарик совершает головокружительный спуск как на американских горках!  
## \***

Можно было бы привести очень много аналогий и рассказов про спиральность времени и бытия, но я лучше отправлюсь спать. Есть еще несколько идей, как задействовать эту всю спиральную прелесть, но меня останавливает неумение трехмерного моделирования.Кстати, все эти спиральные штуки легко реализовать в проекционных часах. Я бы хотел себе такие. Впрочем, сошли бы любые проекционные, у меня целая стена пустует ;)Хочу поблагодарить [Гонга][1] и его ручного Носорога за векторную спираль.

 [1]: http://yegor.livejournal.com/