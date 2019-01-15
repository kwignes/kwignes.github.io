---
layout: post
title: "Setup a Virtual Host in WampServer 3.0"
---

<p>A virtual host (vhost) is recommended to prevent uploading conflicts between your local and live site. It sets the project name as the document root, rather than localhost to avoid directory issues and better match a live server environment. WampServer 3 offers an incredibly easy way to create virtual hosts for your projects.</p>

<h2>Virtual Host Setup</h2>

<strong>Steps:</strong>

<ol>
	<li>Create a project folder in the www directory (e.g. project1).</li>
	<li>Launch WAMP and navigate to <a href="http://localhost/" target="_blank">http://localhost/</a>.</li>
	<li>From the Localhost page, Click on Add a Virtual Host at the bottom left.</li>
	<li>Name the Virtual Host name in the first field. Use the same name as the project (e.g. project1). Set the complete path to the project in the third field (e.g. C:/wamp64/www/project1/). Finally, click Start the creation of the VirtualHost (May take a while) button.
	Upon completion, you should receive, <blockquote>The files have been modified. Virtual host project1 was created.</blockquote></li>
	<li>Restart the DNS:</li>
</ol>

<ul>
	<li>Right-click the green WAMP icon</li> 
	<li>Go to Tools</li>
	<li>Restart DNS</li>
</ul>

<p>If you go back to <a href="http://localhost/" target="_blank">http://localhost/</a>, test to make sure your project can be accessed under Your Projects and that the URL root is the project name instead of localhost. You should also have a new VirtualHost created under YourVirtualHost.</p>

<p>When we created the vhost using the GUI, 2 files were updated:</p>

<p>--httpd-vhosts.conf</p>

<p>Location: C:\wamp64\bin\apache\apache2.4.23\conf\extra</p>

<div class="codehilite">
{% highlight conf %}
# Virtual Hosts

<VirtualHost *:80>
	ServerName localhost
	DocumentRoot c:/wamp64/www
	<Directory  "c:/wamp64/www/">
		Options +Indexes +Includes +FollowSymLinks +MultiViews
		AllowOverride All
		Require local
	</Directory>
</VirtualHost>

<VirtualHost *:80>
	ServerName kriswignes
	DocumentRoot "c:/wamp64/www/kriswignes"
	<Directory  "c:/wamp64/www/kriswignes/">
		Options +Indexes +Includes +FollowSymLinks +MultiViews
		AllowOverride All
		Require local
	</Directory>
</VirtualHost>
{% endhighlight %}
</div>

<p>--hosts</p>

<p>Location: C:\Windows\System32\drivers\etc</p>

<div class="codehilite">
{% highlight conf %}
# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#

127.0.0.1 localhost
::1 localhost
127.0.0.1	kriswignes
::1	kriswignes
{% endhighlight %}
</div>