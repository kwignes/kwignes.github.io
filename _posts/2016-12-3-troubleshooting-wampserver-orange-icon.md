---
layout: post
title: "Troubleshooting WampServer Orange Icon"
categories: [WAMP]
---

<p>The WAMP orange icon occurs when there's an issue connecting to localhost. Common reasons are from mis-configured ports, Skype interference, and missing services. If you experience this problem, here are a number of ways to troubleshoot the network.</p>

<ul>
<li><a href="#install-service">Install Apache Service</a></li>
<li><a href="#skype">Turn off Port 80 in Skype</a></li>
<li><a href="#wwwps">Stop World Wide Web Publishing Service</a></li>
<li><a href="#service-started">Make Sure Apache and MySQL is started</a></li>
<li><a href="#uninstall-servers">Uninstall Servers Incompatible with WAMP</a></li>
<li><a href="#packages">Ensure Microsoft Redistributable Packages are Installed</a></li>
<li><a href="#firewall">Adjust Firewall and Anti-Virus Settings</a></li>
<li><a href="#change-port">Change Port Number for Apache</a></li>
</ul>

<hr>
<h3 id="install-service">Install Apache Service</h3>

<p>Click on the <strong>WAMP icon &gt; Apache &gt; Service Administration &gt; Install Service</strong>.
Restart All Services from the WampServer menu. Wait for the icon to turn green.</p>
<hr>
<h3 id="skype">Turn off Port 80 in Skype</h3>

<p>Skype usually takes port 80 which causes a conflict with WampServer. To allow WampServer the use of port 80, change Skype settings so that it does not use that port.</p>

<p>Within Skype, go to <strong>Tools &gt; options &gt; Advanced &gt; Connection</strong>. Uncheck, <strong>Use port 80 and 443 as an alternative for incoming connections</strong>. Save and restart Skype. Restart All Services from the WampServer icon menu.</p>

<hr>
<h3 id="wwwps">Stop World Wide Web Publishing Service</h3>

<p>Upgrading to Windows 10 may cause an issue with WampServer, since Microsoft sets World Wide Web Publishing Service to listen on port 80. To stop this service, go to the search menu in Windows and type, <strong>services.msc</strong>, and open the app. From the list, find <strong>World Wide Web Publishing Service</strong>, right-click, and Stop. Restart All Services from the WampServer menu.</p>

<p>Note: Newer versions of Windows 10 may not show World Wide Web Publishing Service in the list.</p>

<hr>
<h3 id="service-started">Make Sure Apache and MySQL is started</h3>

<p>Go to the Search menu in Windows and type, <strong>services.msc</strong>, and open the app. Find <strong>wampapache64</strong> and <strong>wampmysqld64</strong> and view the status to make sure they are Running. If not, go to the <strong>WAMP icon &gt; Apache &gt; Service Administration &gt; Start/Resume Service</strong>. Repeat for MySQL.</p>

<hr>
<h3 id="uninstall-servers">Uninstall Servers Incompatible with WAMP</h3>

<p>Before installing WampServer, make sure other servers are uninstalled such as XAMP and IIS, which may cause conflicts.</p>

<hr>
<h3 id="packages">Ensure Microsoft Redistributable Packages are Installed</h3>

<p>Before installing WampServer, make sure you have important system elements installed. To check, go to <strong>Control Panel &gt; Programs &gt; Programs and Features</strong>. In the list of programs, look for Microsoft Visual C + + Redistributable packages.</p>

<p>Note: VC9, VC10 and VC11 are required for WampServer 2.4 – 3.0<br>
VC13 and VC14 are required for PHP 7 and Apache 2.4.17</p>

<h4>VC9 Packages</h4>
x86 - <a href="http://www.microsoft.com/en-us/download/details.aspx?id=5582" target="_blank">http://www.microsoft.com/en-us/download/details.aspx?id=5582</a><br>
x64 - <a href="http://www.microsoft.com/en-us/download/details.aspx?id=2092" target="_blank">http://www.microsoft.com/en-us/download/details.aspx?id=2092</a><br>

<h4>VC10 Packages</h4>
x86 - <a href="http://www.microsoft.com/en-us/download/details.aspx?id=8328" target="_blank">http://www.microsoft.com/en-us/download/details.aspx?id=8328</a><br>
x64 - <a href="http://www.microsoft.com/en-us/download/details.aspx?id=13523" target="_blank">http://www.microsoft.com/en-us/download/details.aspx?id=13523</a><br>

<h4>VC11 Packages</h4>
x86/x64 - <a href="http://www.microsoft.com/en-us/download/details.aspx?id=30679" target="_blank">http://www.microsoft.com/en-us/download/details.aspx?id=30679</a><br>

<h4>VC13 Packages</h4>
x86/x64 - <a href="https://www.microsoft.com/en-us/download/details.aspx?id=40784" target="_blank">https://www.microsoft.com/en-us/download/details.aspx?id=40784</a><br>

<h4>VC14 Packages</h4>
x86/x64 - <a href="http://www.microsoft.com/fr-fr/download/details.aspx?id=48145" target="_blank">http://www.microsoft.com/fr-fr/download/details.aspx?id=48145</a><br>

<hr>
<h3 id="firewall">Adjust Firewall and Anti-Virus Settings</h3>

<p>Allow access to port 80 on your firewall and anti-virus programs.</p>

<p>To open port 80 in the Windows Firewall, go to <strong>Control Panel &gt; System and Security &gt; Windows Firewall &gt; Advanced Settings</strong>. Click on <strong>Inbound rules</strong> and select <strong>New Rule</strong> on the right. In the setup window, choose <strong>Port</strong>, <strong>TCP</strong>, Specific local ports set to <strong>80</strong>, <strong>Allow the connection</strong>, check each rule (Domain, Private, and Public), and provide a name for the rule (e.g. WAMP Access). <strong>Finish</strong>. Restart All Services from the WampServer icon menu.</p>

<hr>
<h3 id="change-port">Change Port Number for Apache</h3>

<p>If port 80 is being used by another program, WampServer will not work, since it listens to port 80 by default. To change the port number, click on the <strong>WAMP icon &gt; Apache &gt; httpd.conf</strong>.</p>

<p><pre>(C:\wamp64\bin\apache\apache2.4.23\conf\httpd.conf)</pre></p>

<p>The Apache configuration file will open in a text editor. Find Listen 80 and change it to <strong>Listen 8080</strong>.</p>

<p>Newer versions of WAMP will show:</p>

<div class="codehilite">
{% highlight conf %}
Listen 0.0.0.0:80
Listen [::0]:80
{% endhighlight %}
</div>

<p>Change to:</p>

<div class="codehilite">
{% highlight conf %}
Listen 0.0.0.0:8080
Listen [::0]:8080
{% endhighlight %}
</div>

<p>Save and close the httpd.conf file. Restart All Services from the WampServer icon menu. You can now access localhost from http://localhost:8080.</p>