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


After redesign of the blog I mentioned, I needed to find the way to display <a href="http://twitter.com/genn_org/">my twitter</a> messages on <a href="/mega/">mega.genn.org</a>.  I used <a href="http://rick.jinlabs.com/code/twitter/">Twitter for WordPress</a> but it doesn't load message from time to time because of timeout when fetching RSS. So I improved it a little bit to cache the latest RSS of twitter messages, so we could load that cache if RSS from <a href="http://twitter.com/">twitter.com</a> is unavailable at the moment.<!--more-->


## Documentation ;)

To use the plugin, place the following function wherever you need to show your twitts, specifying parameters:
<ol class="h4x0r">
	<li><code>twitter_messages(<span style="color:#000">'username'</span>, [msgs], [list], [timestamp], ['link'], [hyperlinks], [twitter_users], [encode_utf8], ['cachefile']);</code></li>
</ol>
<span style="color:#000">username</span> text — your twitter username (required)
<span style="color:#000">msgs</span> int — number of messages to display, maximum is 20
<span style="color:#000">list</span> boolean — show twitts in unordered list
<span style="color:#000">timestamp</span> boolean — show relative timestamp
<span style="color:#000">link</span> text — <i>'all'</i> link all text to twitt / <i>'' or false</i> don't link / <i>true or 'text'</i> enable link and you can enter your own <i>text</i>
<span style="color:#000">hyperlinks</span> boolean — parse URLs as links
<span style="color:#000">twitter_users</span> boolean — parse <i>@username</i> as links
<span style="color:#000">encode_utf8</span> boolean — encode the twitts
<span style="color:#000">cachefile</span> text — name and path to file with cache of your twitts (created automatically)

It looks like this for my blog:
<ol class="h4x0r">
	<li><code>< ? twitter_messages('genn_org', 5, true, false, '', true, true, false, "twitter.rss"); ?></code></li>
</ol>


## Download

Feel free to download and use <a href='/o_O/twitter-advanced/twitteradv.zip'>Twitter Advanced 2.0</a> (8 Kbytes). After downloading upload it to your <i>wp-content/plugins</i> folder and activate from <i>Plugins</i> section in WP admin area.


## Bug reports

If anything goes wrong — just disable the plugin. I am waiting for your bug reports ;)