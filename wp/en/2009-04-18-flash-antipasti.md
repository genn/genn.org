---
layout: default
category: mega
lang: en
title: Flash 10 Antipasti and URL roundup
slug: flash-antipasti
mainpicture: sorrymario.jpg
tags: baka-baka flash friends gui 
postid: 1420
---


I remember how it all started. Long time ago, when dinosaurs were using modems, sites were called homepages and word <i>google</i> meant nothing, there still were URLs of the sites. We called it site addresses and if you wanted to look smartass you could say something like <b>unique address of the web resource based in the world wide web</b>. Programmers now known as it-specialists were programming on their own and it brought to the expected results — strange URLs of different pages. I mean something like <i>blablabla.com/?sid=23l&pid=ln123&youare=cookiemonster</i> which could lead somewhere to the search page or latest news from time to time. Then like the knights without fear and with goodness in hearts came new guys. Strange looking, doing nothing but consultations and calling themselves <i>usabilists</i>. <!--more-->

They marked the end of Programmers Orgy Era and somehow made dinosaurs disappear. It would be very strange if usabilists said nothing about URL's, so they did. It was carved on stone and published in the books and on the internet: <i>Thus it's said:  URL has to be readable and lead to the same page all the time, so s/he of users could understand and share it</i>. It is wide known that thing published on the internet becomes true as soon as it is indexed by Google. So was this time. And people made URLs readable and understandable pointing to constant pages. It was even <a href="http://mega.genn.org/2008/flash-deeplinking/">made for flash and ajax sites</a>. URLs started looking this <i>blablabla.com/products/media-and-socialising/you-ve-got-rickrolld</i>.

Then all this social-networking started, so called <i>web 2.0</i>. Bunches of information made it not so comfy to worry about the URLs but they were still constant. Sharing came on the first place and developers and usabilists had to encourage people to copy link and paste it everywhere they could. That's how that perfect buttons <i>Copy URL of this page/video/porn/article to clipboard</i> on different sites. Lack of technologies and standards made using flash  the most usable way to copy some text to the clipboard. When users clicked the button the JavaScript dynamically embedded pre-made flash movie that copied to the clipboard the text send to it as parameter.

Due to liberal thoughts and no-ones awareness of what's in clipboard this could possibly lead to the situation, when site could copy some junk in the clipboard even without user interaction. So Adobe decided to make things more fun and said: <i>From now on (Flash version 10) if you people want to copy something to the clipboard, you'd have to interact with flash movie itself. Literally: user has to click on something in the movie to give movie access to the clipboard</i>. It's now user's fault if he clicks the button and copies junk to the clipboard. <a href="http://www.adobe.com/devnet/flashplayer/articles/fplayer10_security_changes_02.html#head31">Way to go</a>, Adobe, way to go.

That brought series of problems with the way URLs were copied as I described earlier. Lucky for web developers <a href="http://cssing.org.ua">akella</a> came up with <a href="http://cssing.org.ua/2009/04/15/copy-to-clipboard-javascrip/">idea</a>: we can make flash movie that would act like a button and supply pictures for different states as parameters. I helped him making that swf and it works.

<object width="636" height="48"><param name="movie" value="/o_O/flash-antipasti/copybtn.swf" /><param name="flashvars" value='normal=/o_O/flash-antipasti/btn0.png&pressed=/o_O/flash-antipasti/btn2.png&hover=/o_O/flash-antipasti/btn1.png&clipboard=http://mega.genn.org/ &#151; schlong is schlonger' /><embed src="/o_O/flash-antipasti/copybtn.swf" flashvars='normal=/o_O/flash-antipasti/btn0.png&pressed=/o_O/flash-antipasti/btn2.png&hover=/o_O/flash-antipasti/btn1.png&clipboard=http://mega.genn.org/ &#151; schlong is schlonger' width="636" height="48"  type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
</object>


{% figureinfo Click on the button to copy text "http://mega.genn.org/ — schlong is schlonger" to the clipboard %}



And that's the code if all files are in the same directory (also there is a tweak with ' instead of " for <i>flashvars</i> value so you could insert html there):
<ol class="h4x0r">
	<li><code>&lt;object width="636" height="48"&gt;</code></li>
	<li><code>&lt;param name="movie" value="copybtn.swf"></code></li>
<li><code>&lt;param name="flashvars" value='<b>normal=</b>btn0.png&<b>pressed</b>=btn2.png&<b>hover</b>=btn1.png&<b>clipboard</b>=&lt;a href="http://mega.genn.org/"&gt;mega.genn.org&lt;/a&gt; &#151; schlong is schlonger' /&gt;</code></li>
	<li><code>&lt;embed src="copybtn.swf" flashvars='<b>normal</b>=btn0.png&<b>pressed</b>=btn2.png&<b>hover</b>=btn1.png&<b>clipboard</b>=&lt;a href="http://mega.genn.org/"&gt;mega.genn.org&lt;/a&gt; &#151; schlong is schlonger' width="636" height="48"  type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /&gt;</code></li>
	<li><code>&lt;/object&gt;</code></li>
</ol>
David-m, commenting on akella's technology said that it would be more convenient to make transparent flash movie that would copy text needed and place it on the top of any element. So I made the transparent version too. Nothing to look at — it's transparent ;) downloadable here.