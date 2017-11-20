---
layout: post
title: "Deploy a Node Website with Express and Heroku"
categories: [JavaScript]
---

<p>Node.js is a server-side JavaScript environment built on Google Chrome’s engine. It allows you to write JS on the server for quick front and back-end development. In this tutorial, we're going to install Node and use NPM (Node Package Manager) to include dependencies for our project. Once our website is up an running, we will deploy it to Heroku, a cloud application platform.</p>

<p>Download Node and NPM: <a href="https://nodejs.org/en/" target="_blank">https://nodejs.org/en/</a></p>

<p>For Linux users,</p>

{% highlight bash %}
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
{% endhighlight %}

<h2>Package.json</h2>

<p>Create a package.json file that includes our project dependencies.</p>

{% highlight json %}
{
    "name": "myApp",
        "version": "0.0.1",
        "private": "true",
    "dependencies": {
        "express": "4.13.3",
        "jade": "*",
        "ejs": "2.3.4"
    }
}
{% endhighlight %}

<p>Express is the web framework. You can declare other tools such as jade and/or ejs templating engines.
Server.js</p>
<ul>
    <li>Requires Express as our main framework to build the Node application.</li>
    <li>The localhost port is set to 5000 for testing locally.</li>
    <li>The static file public folder location is where our main web files such as index.html, css and image files will live.</li>
</ul>

{% highlight javascript %}
/*
 * Module dependencies
 */
var express = require('express'); 
var app = express(); 
app.set('port', (process.env.PORT || 5000));
 
// set location for the static files 
app.use(express.static(__dirname + '/public')); 
// Set default template engine to "ejs"
app.engine('html', require('ejs').renderFile); 
// Views directory for all template files
app.set('views', __dirname + '/views'); 
app.set('view engine', 'html'); 
app.get('/', function (req, res) { 
    res.render('index');
});

app.listen(app.get('port'), function () { 
    console.log('Node app is running on port',
    app.get('port'));
});
{% endhighlight %}

<p>The server will render the index file as our home page. To test the Node application, open the command prompt, navigate to the project folder root and type in:</p>


{% highlight bash %}
node server.js
{% endhighlight %}


<p>You should get the message:</p>

{% highlight bash %}
Node app is running on port 5000
{% endhighlight %}

<p>Test in a browser by navigating to localhost:5000</p>

<p>Now that we have a website running on the local machine, we’ll use Heroku to send it live. Heroku is a cloud platform service that supports several programming languages. Once deployed, the website URL will look like this: `generated-app-name.herokuapp.com`</p>

<h2>Heroku</h2>

<p>Go to Heroku Dev Center: <a href="https://devcenter.heroku.com/" target="_blank">https://devcenter.heroku.com/</a></p>

<ul>
<li>Setup a free account</li>
<li>Download Heroku Toolbelt (Package for using the command line)</li>
</ul>

<p>Open Git Bash and clone the working project to your local GitHub folder:</p>

{% highlight bash %}
git clone https://github.com/url.git
{% endhighlight %}

<p>Navigate to the project’s root in GitHub:</p>

{% highlight bash %}
cd node-app
{% endhighlight %}

<p>Create a new file called, Procfile, which tells Heroku what command should be executed to start the app. Include the following:</p>

{% highlight bash %}
web: node server.js
{% endhighlight %}

<p>Prepare Heroku to receive the source code by entering:</p>

{% highlight bash %}
heroku create
{% endhighlight %}

<p>Heroku will generate a random name for the app that can be changed later.</p>

<p>Deploy the code:</p>

{% highlight bash %}
git push heroku master
{% endhighlight %}

<p>Open the website by entering:</p>

{% highlight bash %}
heroku open
{% endhighlight %}

<p>Or by navigating to the app’s url, generated-app-name.herokuapp.com.</p>

<p>Our site is now live on the Heroku platform and we can easily edit and monitor changes using Git.</p>
