---
layout: default
category: mega
lang: en
title: Twitter + Wordpress
slug: twitter-advanced
mainpicture: twpitter.png
tags: gui information numbers stuff twitter wordpress 
postid: 1356
---


After redesign of the blog I mentioned, I needed to find the way to display [my twitter](http://twitter.com/genn_org/) messages on [mega.genn.org](http://mega.genn.org/).  I used [Twitter for WordPress](http://rick.jinlabs.com/code/twitter/) but it doesn't load message from time to time because of timeout when fetching RSS. So I improved it a little bit to cache the latest RSS of twitter messages, so we could load that cache if RSS from [twitter.com](http://twitter.com/) is unavailable at the moment.<!--more-->


## Documentation ;)

To use the plugin, place the following function wherever you need to show your twitts, specifying parameters:
<ol class="h4x0r">
	<li><code>twitter_messages(<span style="color:#005bcd">'username'</span>, [msgs], [list], [timestamp], ['link'], [hyperlinks], [twitter_users], [encode_utf8], ['cachefile']);</code></li>
</ol>
<span style="color:#005bcd">username</span> text — your twitter username (required)
<span style="color:#005bcd">msgs</span> int — number of messages to display, maximum is 20
<span style="color:#005bcd">list</span> boolean — show twitts in unordered list
<span style="color:#005bcd">timestamp</span> boolean — show relative timestamp
<span style="color:#005bcd">link</span> text — <i>'all'</i> link all text to twitt / <i>'' or false</i> don't link / <i>true or 'text'</i> enable link and you can enter your own <i>text</i>
<span style="color:#005bcd">hyperlinks</span> boolean — parse URLs as links
<span style="color:#005bcd">twitter_users</span> boolean — parse <i>@username</i> as links
<span style="color:#005bcd">encode_utf8</span> boolean — encode the twitts
<span style="color:#005bcd">cachefile</span> text — name and path to file with cache of your twitts (created automatically)

It looks like this for my blog:
<ol class="h4x0r">
	<li><code>< ? twitter_messages('genn_org', 5, true, false, '', true, true, false, "twitter.rss"); ?></code></li>
</ol>


## Download

Feel free to download and use <a href='http://mega.genn.org/=^_^=/uploads/2009/03/twitteradv.zip'>Twitter Advanced 2.0</a> (8 Kbytes). After downloading upload it to your <i>wp-content/plugins</i> folder and activate from <i>Plugins</i> section in WP admin area.


## Bug reports

If anything goes wrong — just disable the plugin. I am waiting for your bug reports ;)