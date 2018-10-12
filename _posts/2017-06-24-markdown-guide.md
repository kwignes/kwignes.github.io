---
layout: post
title: "Jekyll Markdown Guide"
categories: [Jekyll]
tags: 
- Jekyll
---

### Ordered List

1. Item 1 
2. Item 2 
	2. Item 1
	1. Item 2
		2. Item 1
		1. Item 2

### Unordered List

* Item 1 
* Item 2 
	* Item 1
	* Item 2
		* Item 1
		* Item 2


### Syntax Highlighting

Inline `code` uses `back-ticks`.

```
<!--Blocks of code uses three back-ticks.-->
<!DOCTYPE html>
<html>
<body>
	<h1>Hello</h1>
</body>
</html>
```

Highlight code by wrapping it with `highlight javascript` and `endhighlight`, and replace `javascript` with the code that you are highlighting.

#### JavaScript highlighted code
{% highlight javascript %}
var x;
x = 6;
document.getElementById("demo").innerHTML = x;
{% endhighlight %}


### Links 

`[Link to Google](https://www.google.com)`

[Link to Google](https://www.google.com)	

`[Link to Google with title](https://www.google.com "Google")`

[Link to Google with title](https://www.google.com "Google")


### Images

`![Wave](../img/wave.jpeg "Wave Surf")`

![Wave](../img/wave.jpeg "Wave Surf")


# H1
## H2
### H3
#### H4
##### H5
###### H6

<hr>

### Some text with a `<hr>` tag (thin grey line) above it

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum