---
layout: post
title: "SSL_Connect Certificate Error with Ruby Fix"
categories: [Ruby]
tags: 
- Ruby
---

<p>While setting up a static environment, I came across this error from running: <code>gem install github-pages</code> (a gem for syncing Jekyll with GitHub Pages):</p>


<pre>
Unable to download data from https://rubygems.org/ - SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (https://api.rubygems.org/specs.4.8.gz)
</pre>


<p>The problem came from outdated SSL certificates, as explained by Fletcher Nichol in this <a href="https://gist.github.com/fnichol/867550" target="_blank">gist</a>.</p>

<p>A <a href="http://stackoverflow.com/questions/19150017/ssl-error-when-installing-rubygems-unable-to-pull-data-from-https-rubygems-o" target="_blank">solution</a> was to temporarily replace the https source with http.</p>

<pre>
gem sources -r https://rubygems.org/
gem sources -a http://rubygems.org/
</pre>

<pre>
gem install github-pages
</pre>

<p>And then restore the SSL.</p>

<pre>
gem sources -r http://rubygems.org/
gem sources -a https://rubygems.org/
</pre>

<p>This was a quick fix, however, using http over https raised security concerns since http didn't include the SSL encryption when installing gems.</p>

<h2>The solution:</h2> 

<ul>
<li>Download the certificate authority <a href="https://curl.haxx.se/ca/cacert.pem" target="_blank">cacert.pem</a> file</li>
<li>Save it to the RailsInstaller folder located in the (C:)</li>
<li>Set an environment variable identifying the file path.</li>
</ul>

<p><strong>To set an environment variable:</strong></p>

<p>Go to the <em>Control Panel</em>, <em>System and Security</em>, <em>System</em>, and <em>Advanced System Settings</em>. Click on <em>Environment Variables...</em></p>

<p><em>New...</em></p>

<p>Variable name: <code>SSL_CERT_FILE</code></p>
<p>Variable value: <code>SSL_CERT_FILE=C:\RailsInstaller\cacert.pem</code></p>

<p>Click OK, close the control panel and re-lanch the command line. </p>

<p>Following this, I was able to install github-pages with success, CD to my project folder and successfully run <code>jekyll server --watch</code> without error.</p>