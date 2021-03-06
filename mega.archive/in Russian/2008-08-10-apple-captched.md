---
layout: default
categories: [mega, ru]
lang: ru
title: Apple users captched
slug: apple-captched
tags: apple fun gui stuff 
postid: 425
---
<img src='/o_O/apple-captched/pac-man.png' alt='apple-man (variation of Pack-man hieroglyphs combined with Apple)'  width="460" height="200"/>

Как-то утром для реализации одного небольшого, но забавного гео-политического социо-сетевого проекта мне понадобилось легко и непринужденно отделять посетителей, пользующихся Mac OS X от посетителей, вынужденных наслаждаться другими операционными системами. Работать это должно было так, чтобы неумышленно обдурить распознавание было нелегко, даже сменив описание броузера или отключив JavaScript. Стремясь найти наиболее изящное решение, я решил посмотреть пару серий аниме Cowboy Bebop и решить проблему не в лоб. Например, выпадающий список «What's your OS?» был отвергнут в первые же миллисекунды.
<!--more-->
Не все пользователи Mac OS X знают и почти все пользователи других операционных систем не подозревают, что если в любом текстовом поле в Mac OS X нажать комбинацию <i>Shift+Option+K (Shift+Alt+K)</i>, то появится не очередная буква, а логотип Apple. Это работает везде (кроме Фотошопа и Иллюстратора ;). Мало того, другие операционные системы не показывают этот символ в Юникод-кодировках, заменяя его на знак вопроса. Так что первое решение было простым и очевидным:

<img src='/o_O/apple-captched/enterapple.png' alt='Enter Apple Inc.'   width="460" height="214"/>

Скопировать яблоко не в Mac OS X невозможно, ввести каким-то невероятным способом — тоже. Но сложная комбинация для ввода невероятно усложняла форму, хоть и потенциально отсеивала роботов. Что ж, тогда спрячем все от пользователя и заставим броузер выполнять его работу:

<ol class="h4x0r">
<li><code>&lt;input type="hidden" value="" name="areugay" /&gt;</code></li>
</ol>

Для тех, кто видит <i>value="?"</i> я приложу картинку того, как это выглядит в Safari:

<img src='/o_O/apple-captched/areyougay.png' alt='Are you gay?'  width="460" height="50"/>

При отправке формы скриптам на сервере, броузер отправит тот символ, который поймет. Если дело будет происходить под Mac OS X, то сервер получит логотип Apple Inc., а если под управлением другой операционной системы, то знак вопроса. 

<img src='/o_O/apple-captched/appleats.png' alt='Apple eats'  width="460" height="39"/>

Открытым остается лишь вопрос, как все это проверять на сервере, но мне кажется, что можно решить и это ;)