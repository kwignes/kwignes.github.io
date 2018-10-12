---
layout: post
title: "Fix Broken Project Links in WampServer"
---

<p>Newer versions of WAMP may throw a “Site can’t be reached” page after clicking on a localhost project. The issue is that the URL sets the project name as the root, rather than localhost (e.g. http://project/). This was originally meant to avoid root directory issues when dealing with PHP queries, for example.</p>

<h2>Fix #1</h2>

<p>Create a Virtual Host for each of your projects. A Virtual Host will set your project name as the host, server name, and document root, thus avoiding directory hierarchy issues, and also provides a cleaner URL.</p>

<h2>Fix #2</h2>

<p>Another way is to manually navigate the browser URL to the full path of the project (e.g. http://localhost/project), rather than clicking the project link under Your Projects.</p>

<h2>Fix #3</h2>

<p>In the www folder (C:\wamp64\www), open index.php in a text editor.</p>

<p>Find:</p>

{% highlight php %}
$suppress_localhost = ($wampConf['urlAddLocalhost'] == 'off' ? true : false);
{% endhighlight %}

<p>Change to:</p>

{% highlight php %}
$suppress_localhost = ($wampConf['urlAddLocalhost'] == 'on' ? true : false);
{% endhighlight %}