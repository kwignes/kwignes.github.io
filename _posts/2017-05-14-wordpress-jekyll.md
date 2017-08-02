---
layout: post
title: "WordPress to Jekyll"
categories: [Jekyll]
tags: 
- Jekyll
---

<p>Finally got around to putting this site together - powered by Jekyll and hosted on GitHub. The setup was smooth thanks to great documentation by <a href="http://jmcglone.com/guides/github-pages/" target="_blank">Jonathan McGlone</a>.</p>

<p>I've been using WordPress for the past year to showcase projects and articles. It was the first CMS I went with, mainly to learn PHP and from recommendations. WordPress was great at the beginning: Easy to setup, install a theme, configure the functions file and start sharing with the community. During this phase though, I came across a few drawbacks.</p> 

<h3>Performance</h3>

<p>My WordPress site didn't have a lot of content but still felt bulky going from page-to-page. WordPress uses PHP and MySQL, producing high <strong>processing overhead</strong> since it has to make server calls and connect to a database. This was overkill for me.</p>

<h3>More than I needed</h3> 

<p>My goal for a website was to share code, showcase projects, and advertise myself as a freelancer. I didn't need a wealth of plugins, ecommerce functionality or a heavy set database. I also avoided features such as the visual text editor since it would sometimes add unwanted elements to the HTML.</p>

<h3>Security</h3> 

<p>As one of the most popular blogging platforms, WordPress is a target for hackers. While its core is well built, poorly built plugins and themes pose a high risk for attacks. WordPress also uses a database which raises extra security concern. With a static site generator, fewer resources are used, minimizing the risk of entry.</p>

<hr />

<p>I work with HTML and CSS all the time and as a developer, I just wanted something minimal that provided me with full control and a secure foundation for delivering content.</p> 

<p>This is when I came across Jekyll, a static site generator, well known and documented. It serves HTML pages built from templates directly to the client, immensely improving load time. The folder structure looks like:</p>

<pre>
project
|________ _includes
|		header.html
|		footer.html
|________ _layouts
|		default.html
|		page.html
|		post.html
|________ _posts
|________ _sass
_config.yml
index.html
</pre>

<p>Each file is well organized to build out the site, allowing complete control over the output. The setup was quick and it was easy to learn. I created a repo on GitHub and added the initial Jekyll templates to get started.</p>

<p>So far, the switch has been great. Jekyll has given me the minimal functionality and speed that I was looking for. As I read more about web performance and security, static site generators are gaining more popularity with businesses and personal sites.</p>
