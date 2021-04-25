---
layout: post
title: "Fix HTML White-Space Rendering from Inline-Block"
categories: [HTML, CSS]
---

<p>Using the CSS property, <code>inline-block</code> provides an alternative to floats where elements align side by side without having to clear. They can be given a height and width, opposed to the <code>inline</code> property. The issue with this display property is that it renders HTML white-space, sometimes causing an alignment to break. Here are a number of ways to prevent this.</p>

<a class="btn" href="http://codepen.io/kwignes/pen/zKyBqj" target="_blank">Grid using inline-block Demo</a>

<p>The <strong>vertical line</strong> is set at the baseline by default. When using <code>inline-block</code>, add <code>vertical-align: top</code> so that elements align at the top of their respected containers.</p>

<div class="codehilite">
{% highlight css %}
.content, .sidebar {
  display: inline-block;
  vertical-align: top;
}
{% endhighlight %}
</div>

<p>Use HTML Comment tags.</p>

<div class="codehilite">
{% highlight html %}
<ul><!--
--><li><a href="">Home</a></li><!--
--><li><a href="">About</a></li><!--
--><li><a href="">Contact</a></li><!--
--></ul>
{% endhighlight %}
</div>

<p>Set a CSS negative margin.</p>

<div class="codehilite">
{% highlight css %}
ul li a { 
  margin-left: -4px; 
}
{% endhighlight %}
</div>

<p>Remove white-space from the HTML.</p>

<div class="codehilite">
{% highlight html %}
<ul>
<li><a href="">Home</a></li><li><a href="">About</a></li><li><a href="">Contact</a></li>
</ul>
{% endhighlight %}
</div>

<p>Although these methods may seem a little hacky, inline-block is still a good alternative to avoid clearing...Just make sure to check for whitespace.</p>

<h2>From Floats, to Inline-block, to Flexbox</h2>

<p>Flexbox presents a new way of how we do CSS layouts. Simply add the flex property, <code>display: flex</code>, to the container, and its children can be set horizontally or vertically along an axis. The container automatically adjusts elements to fit according to its dimensions. Once <code>flex</code> is set, child elements can use various properties to define the layout. Here's an example.</p>

<a class="btn" href="http://codepen.io/kwignes/pen/yaGJVz" target="_blank">Simple grid using flex - CodePen demo</a>

<p><code>Flex-direction</code> <code>flex-end</code> and <code>justify-content</code> are just a few of the many cool things you can do with flexbox, and there’s no clearing or white-space issues.</p>

<p>This website uses <code>flex</code> on its container as follow:</p>

<div class="codehilite">
{% highlight css %}
.container {
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
}
.content {
  width: 80%;
}
.sidebar {
  width: 20%;
}
{% endhighlight %}
</div>
<a href="http://caniuse.com/#feat=flexbox" target="_blank">caniuse.com - Flexbox</a>