---
layout: post
title: "Basic Git Command Line Reference"
---

<p>Git can be difficult to get used to so I made a quick reference guide of the basic, most common commands I use. I normally check the status of the working directory for changes, commit them, and push to the master branch.</p>

Jump to section:<br>
<a href="#edit">Push an edit to the master branch</a><br>
<a href="#one">Push a specific edited page to the master</a><br>
<a href="#new">Add a new File</a><br>
<a href="#multiple">Add multiple new files</a><br>
<a href="#undo">Undo a staged change</a><br>
<a href="#discard">Discard unstaged changes to a specific file</a><br>
<a href="#remove">Remove a File from the branch</a>

<h2 id="edit">Push an edit to the master branch</h2>

<p>Run git status to displays changes:</p>

{% highlight ruby %}
git status
{% endhighlight %}

<p>Modified pages will display:</p>

{% highlight ruby %}
modified: _layout/header.html
modified: _posts/hello.html
{% endhighlight %}

<p>Commit all (-a) changes with a message (m):</p>

{% highlight ruby %}
git commit -am "Updated header and hello post"
{% endhighlight %}

<p>Push changes to the master branch:</p>

{% highlight ruby %}
git push
{% endhighlight %}



<h2 id="one">Push a specific edited page to the master</h2>

{% highlight ruby %}
git status
{% endhighlight %}

<p>Modified pages will display:</p>

{% highlight ruby %}
modified: _posts/test.html
modified: _posts/test1.html
{% endhighlight %}

<p>Commit and push the specific page with a message:</p>

{% highlight ruby %}
git commit _posts/test1.html -m "Added content"
git push
{% endhighlight %}



<h2 id="new">Add a new File</h2>

<p>After manually adding a file to my project folder, I want to add it to the master branch.</p>

{% highlight ruby %}
git status
{% endhighlight %}

<p>Untracked files will display:</p>

{% highlight ruby %}
test.html
{% endhighlight %}

<p>Add the file to be committed:</p>

{% highlight ruby %}
git add test.html
{% endhighlight %}

<p>Commit with a message and push the file to the master branch:</p>

<div class="codehilite">
{% highlight ruby %}
git commit -m "Added test.html"
git push
{% endhighlight %}
</div>



<h2 id="multiple">Add multiple new files</h2>

{% highlight ruby %}
git status
{% endhighlight %}

<p>Untracked files will display:</p>

{% highlight ruby %}
test.html
test1.html
{% endhighlight %}

<p>Add all with capital, "-A". Commit with a message and push:</p>

{% highlight ruby %}
git add -A
git commit "Added test and test1"
git push
{% endhighlight %}



<h2 id="undo">Undo a staged change</h2>

<p>E.g. Undo adding a page:</p>

{% highlight ruby %}
git add test.html
{% endhighlight %}

<p>Unstage the commit using reset HEAD and specifying the page:</p>

{% highlight ruby %}
git reset HEAD test.html
{% endhighlight %}



<h2 id="discard">Discard unstaged changes to a specific file</h2>

<p>E.g. Edited a file on the branch but decided that I no longer want the edit:</p>

{% highlight ruby %}
git status
{% endhighlight %}

<p>Changes not staged for commit:</p>

{% highlight ruby %}
modified: test.html
{% endhighlight %}

<p>Checkout will delete changes to the file specified:</p>

{% highlight ruby %}
git checkout test.html
{% endhighlight %}

<h2 id="remove">Remove a File from the branch with <em>rm</em>.</h2>

{% highlight ruby %}
git rm test.html
git status
{% endhighlight %}

<p>Changes to be committed:</p>

{% highlight ruby %}
deleted: test.html
{% endhighlight %}

<p>Commit all changes with a message and push:</p>

{% highlight ruby %}
git commit -am "removed test.html"
git push
{% endhighlight %}