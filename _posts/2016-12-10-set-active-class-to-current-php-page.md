---
layout: post
title: "Set Active Class to Current PHP Page"
---

<p>Development is a lot quicker with PHP templates - header.php, footer.php, etc., since there is only one file dynamically included into each page. When there's only one header template that contains the primary menu, active classes need to be dynamically inserted.</p> 

<p>A prior solution was to go into each page and manually insert a class for each link. In PHP, we can use a condition to check which page is currently active.</p>

<hr />

<h3>Create a PHP Variable</h3>
<ul>
 	<li>At the top of each page, set a variable to collect the URL path from the server.</li>
</ul>
<div class="codehilite">
{% highlight php %}
<?php $page = basename($_SERVER['SCRIPT_NAME']); ?>
{% endhighlight %}
</div>
<ul>
 	<li><em>basename</em> returns the URL path</li>
 	<li><em>$_SERVER</em> is an array containing headers, paths, and script location information</li>
 	<li><em>SCRIPT_NAME</em> contains the current script's path</li>
</ul>
<h3>Add PHP to the HTML Menu</h3>
<ul>
 	<li>PHP will check which page is currently set and attach the active class.</li>
</ul>

<div class="codehilite">
{% highlight php %}
<nav>
     <li <?php if ($page == 'index.php') { ?>class="active"<?php } ?>><a href="index.php">Home</a></li>
     <li <?php if ($page == 'works.php') { ?>class="active"<?php } ?>><a href="works.php">Work</a></li>
     <li <?php if ($page == 'blog.php') { ?>class="active"<?php } ?>><a href="blog.php">Blog</a></li>
</nav>
{% endhighlight %}
</div>
<h3>Style the Active Class</h3>

<div class="codehilite">
{% highlight css %}
nav ul li {
  list-style-type: none;
}
nav ul li a {
  text-decoration: none;
}
.active a {
  color: #28ADE6;
}
{% endhighlight %}
</div>