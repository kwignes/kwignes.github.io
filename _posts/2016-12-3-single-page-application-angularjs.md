---
layout: post
title: "Single-Page Application (SPA) with AngularJS Routing and Animation"
categories: [JavaScript]
---

   <img src="{{ site.url }}/img/angular.jpeg" alt="Kris Wignes">


<p>AngularJS is a JavaScript framework for building web-apps. It extends HTML syntax with directives that provide specific behavior to the DOM and uses the Model View Controller (MVC) pattern to separate logic (controller) from the data (Model) and what the user sees (View).</p>

<p>In this tutorial, we're going to build a basic single-page app that uses Angular routing, and finally include an animation module to create smooth page changes.</p>

<p>Folder structure:</p>

<div class="codehilite">
{% highlight ruby %}
-index.html
-css
  --style.css
-js
  --script.js
-pages
  --home.html
  --about.html
  --contact.html
{% endhighlight %}
</div>

<p>The index.html page will call in the Angular framework and routing library, and communicate with the script.js controllers to provide dynamic updates to the app.</p>

<div class="codehilite">
{% highlight html %}
<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0" name="viewport">
    <title>Angular App</title>
    <link href="css/style.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
</head>
<body ng-controller="mainController">
{% endhighlight %}
</div>

<p>In the head section, add ng-app to the html tag. This tells Angular that this is the start of our app, therefore, look for any Angular directives. I named it "app", but this can be whatever you like.</p>

<h2>Place Angular Libraries in the head section</h2>

<p>It is recommended to place Angular libraries in the head or beginning of the body, oppose to the bottom. The reason for this is so that modules can correctly compile from an initially called library. <a href="http://www.w3schools.com/angular/angular_modules.asp" target="_blank">http://www.w3schools.com/angular/angular_modules.asp</a></p>

<p>Angular can be loaded at the bottom of the page, however, directives (ng-cloak or ng-bind) would need to be used to avoid a "flash" from uncompiled content. <a href="http://stackoverflow.com/questions/15538125/angularjs-in-head-vs-body" target="_blank">http://stackoverflow.com/questions/15538125/angularjs-in-head-vs-body</a></p>

<h2>jQuery / jQLite</h2>

<p>Angular uses its own built-in version of jQuery, called jQLite, which is a stripped down version. If jQuery is called before Angular, Angular will use jQuery, hence the initial call. It is recommended, however, to avoid using jQuery unless necessary and find Angular alternatives. Consequently, application performance would increase. <a href="http://stackoverflow.com/questions/15722066/does-angularjs-really-need-jquery" target="_blank">http://stackoverflow.com/questions/15722066/does-angularjs-really-need-jquery</a></p>

<p>Following the head section, attach "mainController" to the body which will communicate with our script.js logic. This allows us to dynamically add content to the view, producing a web page that users can see and interact with.</p>

<p>In the body, add the navigation.</p>

<div class="codehilite">
{% highlight html %}
<nav id="nav">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#works">About</a></li>
    <li><a href="#blog">Contact</a></li>
  </ul>
</nav>
{% endhighlight %}
</div>

<p>Hashtag links are used for the routing system to locate and generate content. Below the navigation, add a div that contains the ng-view directive.</p>

<div class="codehilite">
{% highlight html %}
<div ng-view class="view"></div>
{% endhighlight %}
</div>

<p>The ng-view directive renders routed templates into the index.html file and dynamically injects content between the div tags.</p>

<p>At the bottom,  add our script.js file.</p>

<div class="codehilite">
{% highlight html %}
<script src="js/script.js" type="text/javascript"></script>
</body>
</html>
{% endhighlight %}
</div>

<h2>script.js</h2>

<p>First, we'll store our modules into a variable called "app". The first one is the name of our app and the second, ngRoute, provides us with routing capabilities.</p>

<div class="codehilite">
{% highlight javascript %}
// create app module
    var app = angular.module('app', ['ngRoute']);
{% endhighlight %}
</div>

<p>Next, we'll configure the routes using $routeProvider. When a link is link is clicked, the page will route to a specified template and use a specified controller.</p>

<div class="codehilite">
{% highlight javascript %}
// configure routes
    app.config(function($routeProvider) {
        $routeProvider

            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController',
                animation: 'first'
            })

            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController',
                animation: 'first'
            })

            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController',
                animation: 'first'
            })

            .otherwise({
                templateUrl : 'pages/home.html',
                controller  : 'mainController',
                animation: 'first'
            });

 });
{% endhighlight %}
</div>

<p>Following our routing system, we'll use controllers to setup the $scope's (application object) initial state and to add behaviour to the object such as data binding.</p>

<h2>Animate Angular page views</h2>

<p>To achieve a slide-in effect when changing templates, we'll add the ngAnimate module. This module supports Angular CSS and JavaScript animations.</p>

<p>In the head section, include Angular's Animate library.</p>

<div class="codehilite">
{% highlight html %}
<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.16/angular-animate.min.js"></script>
{% endhighlight %}
</div>

<p>Attach the directive, `ng-class="animation"` to the body tag.</p>

<div class="codehilite">
{% highlight html %}
<body ng-controller="mainController" ng-class="animation">
{% endhighlight %}
</div>

<p>In our script.js, add 'ngAnimate' within our module variable.</p>

<div class="codehilite">
{% highlight javascript %}
var app = angular.module('app', ['ngRoute', 'ngAnimate']);
{% endhighlight %}
</div>

<p>At the bottom of our script.js file, attach the animation function to our mainController.</p>

<div class="codehilite">
{% highlight javascript %}
app.controller('mainController', function($scope, $rootScope){
  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
    $rootScope.animation = currRoute.animation;
  });
});
{% endhighlight %}
</div>

<p>Now that our index.html and script.js files are setup, let's add templates to our pages folder so we can test out our application. Note: To test routing, run the application on a web server such as WAMP or LAMP.</p>

<p>--home.html</p>

<div class="codehilite">
{% highlight html %}
<section id="home">
    <article>
        <h1>Home template </h1>
    </article>
</section>
{% endhighlight %}
</div>

<p>--about.html</p>

<div class="codehilite">
{% highlight html %}
<section id="about">
    <article>
        <h1>About template</h1>
    </article>
</section>
{% endhighlight %}
</div>

<p>--contact.html</p>

<div class="codehilite">
{% highlight html %}
<section id="contact">
    <article>
        <h1>Contact template</h1>
    </article>
</section>
{% endhighlight %}
</div>

<p>And finally, some CSS.</p>

<div class="codehilite">
{% highlight css %}
* {
    margin: 0;
    padding: 0;
}

html {
    overflow: hidden;
}

body {
    color: #222;
    line-height: 25px;
    font-family: helvetica;
}

a {
    text-decoration: none;
    color: #fff;
}

#nav {
    width: 100%;
    padding: 20px 15px;
    background-color: #222;
}

#nav ul {
    margin: 0 auto;
    max-width: 345px;
}

#nav ul li { 
    display: inline-block;
    margin: 0 20px;
 }

 #nav ul li a {
    font-size: 22px;
    font-weight: bold;
 }

 h1, h2 {
    font-weight: bold;
    text-align: center;
    padding: 60px 15px 40px;
 }

 h1 {
    font-size: 32px;
 }

 h2 {
    font-size: 28px;
 }

 p {
    max-width: 720px;
    padding: 20px 15px;
    margin: 0 auto;
 }
{% endhighlight %}
</div>