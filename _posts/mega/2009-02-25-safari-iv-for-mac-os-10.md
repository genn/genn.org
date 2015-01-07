---
layout: default
category: mega
lang: en
title: Safari IV for Mac OS 10
slug: safari-iv-for-mac-os-10
mainpicture: main.jpg
tags: apple genn.org gui iphone 
postid: 1139
---

<p style="margin-left: 10px; padding-left: 30px; border-left: 3px solid #005bcd;">Этот текст уже был написан вчера, так что я решил запостить его побыстрее. Я надеюсь, что в конце концов отыщу в себе силы перевести его на русский ;)</p>

So <a href="http://apple.com/safari/">Safari 4</a> beta is finally out. People in Cupertino made a good work implementing different stuff and adding new features to the browser. Not so long ago I described why <a href="http://mega.genn.org/2008/tally-ho-firefox/">I dislike new interface of Firefox 3</a>. Time has come for Safari 4. The most magnificent remake was about the core of the browser — it loads pages faster and finally stopped bugging waiting while Gmail executes it's scripts. You all know that dialogs about "Oh! God! Script is too buggy and your Mac will become unstable as long as nuclear war starts. Do you like to start the war?". But I am not going to speak about core, new CSS and JS things. I was told that so-called <a href="http://webkit.org/blog/189/announcing-squirrelfish/">SquirellFish technology</a> is used to make Safari work faster. Sounds like mad scientist's experiment on genetics to make a wicked mermaid. I doubt this mmm animal(?) tastes good, but it gave a great boost to Safari. It kinda swims in the ocean of internet biting the xHTML-code. The post is about GUI. You can check all <a href="http://www.apple.com/safari/features.html">150 features</a> (some of them are almost equal ;) but here's what's new as to me and GUI:<!--more-->
<ul class="postlist">
	<li><span>Tabs in caption of the window</span></li>
	<li><span>Another toolbar</span></li>
	<li><span>New things about showing history, bookmarks and totally new — Top Sites</span></li>
	<li><span>Sessions</span></li>
</ul>


## Tabs in top of the window



{% figure /o_O/safari-iv-for-mac-os-10/tabs.jpg %}



It looks very logical if we know that different tabs in Safari represent different windows that are merged in one. There is even a feature called <i>Merge All Windows</i> — it collects all you windows and merges them in one making them tabs. So, if there are different windows grouped in on and we forget the fear of MDI-interfaces in Windows, then it's quite logical to represent them by their captions as tabs. It's even easier to adopt then I thought. Yesterday I hated them and today I love them ;) As far as I know the same mechanism is used in Google Chrome and Opera browsers. Maybe that will become a new paradigm in Snow Leopard? We'll see. To navigate through tabs you still can use your mouse or ⌘+&larr; / ⌘+&rarr; but that doesn't work with windows and makes the metaphor of windows-tabs equality inconsistent. To move the tab itself or organise them just drag the striped corner of each tab. It'll become separate window if you drag that corner down.

<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">+</span> Logical windows and tabs organization
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">+</span> Logical hierarchy inside every window or tab (input field corresponds to the page, not the window)
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">+</span> Merge All Tabs function
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">±</span> You can't make it the old way (you can, see update at the bottom)
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">–</span> According to Fitts' Law interface became more unusable because now I have to move my mouse more, to change the tabs (if we agree that mouse cursor spends most time on the site, not in the toolbar and the tabs size haven't changed)
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">–</span> The font of the tabs' captions is different than font of the windows' captions
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">–</span> When you click on inactive tab of inactive window, you have to click twice. First click makes the window active and the second is supposed to activate the tab. The problem is you're clicking the caption of the window — it minimizes!
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">–</span> The tabs are stretched to windows width. That makes me move mouse cursor even more

I'd like to add that I actually dislike new design of <i>Close</i> buttons on tabs. Round were much more stylish and pleasant and it remains round when you have to close developer's panel! Also it is to close to window controlling buttons if the left-most tab is active.


## Another toolbar



{% figure /o_O/safari-iv-for-mac-os-10/toolbar.jpg %}



<i>Add Bookmark</i> button is now glued to url-input field and can't be turned off. <i>Stop/Refresh</i> button moved to the end of the input field and look like an icon, not button. I hate that. I never added bookmarks using special buttons and I sometime stopped the site loading using special button for that. Fitts' Law again. They also removed the progress bar showing the progress of page loading I liked so much. Now it's just spin-wheel on the right, that replaced by reload pictogram when page is loaded. It looks iPhone-like, but clicking on the <i>X</i> button doesn't clear input field, so it ruins the metaphor again.

Talking about url-input field, it's not good-old input we all know. Now it has it's own AI and tries to help you. You could see something similar in Firefox 3 where it made search through history and maybe some search in other dimensions while you were typing the URL. 



{% figure /o_O/safari-iv-for-mac-os-10/urlsuggest.jpg~Actually I wanted one post of Danny Choo on BoingBoing that I read yesterday. No luck %}



I can't say it's comfy — haven't spend enough time with it. Now it doesn't look convenient.

<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">+</span> Dunno. It works ;)
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">+</span> Search field now works more like Inquisitor
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">±</span> New input field behaviour
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">–</span> I can't really customise my toolbar
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">–</span> Stop/Reload buttons aren't obvious
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">–</span> No more cool loading progress bar behind url loaded


## History, bookmarks and Top Sites

They're awesome and easy to use. See the pics to love them. 



{% figure /o_O/safari-iv-for-mac-os-10/topsites.jpg~The star on top right corner of site shows that there is new content %}



In <i>Top Sites</i> (saw something similar in Opera) you can collect from nine to 24 sites, pin them and always start every new window or tab with this collection. It even checks added sites if there is new content!



{% figure /o_O/safari-iv-for-mac-os-10/history.jpg~Okay! Let's put coverflow everywhere. Do you still brush your tees? Coverflow! I must admit that it is more useful in history of browser, than in iTunes %}



<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">+</span> Pretty looking
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">+</span> Easy to use
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">–</span> History halts the whole browser when you try to search
<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">–</span> Top Sites highlight is awkward



{% figure /o_O/safari-iv-for-mac-os-10/topsiteshighlight.jpg %}




## Sessions

Now Safari remembers your sessions and you can open all sites from the last session or reopen last closed window. It's a pitty Safari doesn't remember what you entered in text fields, but I understand that I want too much.

<span style="font-size: 24px; color: #005bcd;padding-right: 10px;">+</span> They exist


## ✖✖✖

Browser became faster and maybe even easier to use. We have to get used to it. At least all good old shortcuts work. As to me, I'll have to start using bookmarks, 'cause that input-field with it's own thoughts is just driving me crazy. And <a href="http://twitter.com/genn_org/status/1245220089">as I said</a> in Twitter: Looking at modern apps I can hear Apple rewriting their GUI Guidelines ;)


## Update

There is a way to make tabs look the old way and <i>Stop/Reload</i> button to act normal (as long as url-input field). Use this commands in Terminal:
<ol class="h4x0r">
	<li><code>defaults write com.apple.Safari DebugSafari4TabBarIsOnTop 0</code></li>
	<li><code>defaults write com.apple.Safari DebugSafari4IncludeToolbarRedesign 0
</code></li>
	<li><code>defaults write com.apple.Safari DebugSafari4LoadProgressStyle 0
</code></li>
</ol>
Thanks to <a href="http://farcaller.net/">farcaller</a> and <a href="http://dmitry.shaposhnik.name/">DM</a>.

You can also turn off fancy url suggestion:
<ol class="h4x0r">
	<li><code>defaults write com.apple.Safari DebugSafari4IncludeFancyURLCompletionList 0</code></li>
</ol>
To turn everything back just execute commands you executed replacing last 0 with 1 ;)