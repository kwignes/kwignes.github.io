---
layout: post
title: "WordPress to Jekyll"
categories: [Jekyll]
---

<p>Finally got around to putting this site together - powered by Jekyll and hosted on GitHub. The setup was smooth thanks to great documentation by <a href="http://jmcglone.com/guides/github-pages/" target="_blank">Jonathan McGlone</a>.</p>

<p>I always used WordPress for projects and portfolios. It was my go-to CMS. Overtime, and through experience, I eventually realized it was something I didn't need for every project.</p> 

<h2>Performance:</h2>

<p>My WordPress site didn't have a lot of content but still felt bulky going from page-to-page. WordPress uses PHP and MySQL, producing high processing overhead since it has to make server calls and connect to a database.</p>

<h2>More than I needed:</h2> 

<p>My goal for a website was to share code, showcase projects, and advertise myself as a freelancer. I didn't need a wealth of plugins, ecommerce functionality or a heavy set database. I also avoided features such as the visual text editor since it would sometimes add unwanted elements to the HTML.</p>

<h2>Security:</h2> 

<p>As one of the most popular blogging platforms, WordPress is a target for hackers. While its core is well built, poorly built plugins and themes pose a high risk for attacks. WordPress also uses a database which raises extra security concern. With a static site generator, fewer resources are used, minimizing the risk of entry.</p>

<h2>Why I Went With Jekyll Static Site Generator</h2>

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
