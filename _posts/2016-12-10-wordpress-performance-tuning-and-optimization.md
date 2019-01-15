---
layout: post
title: "WordPress Performance Tuning and Optimization"
---

<p>There are a number of ways to optimize your site. I recommend<a href="https://gtmetrix.com/" target="_blank"> GTmetrix</a> which provides a detailed, performance report and is great for identifying which areas need improvement.</p> 
<p>In this post, I'm going to share some of the methods and tools I use to optimize WordPress.</p>

Jump to section:<br>
<a href="#scale">Scale and compress images</a><br>
<a href="#compress">Compress and combine files</a><br>
<a href="#optimize">Further optimization for performance</a><br>

<hr />

<h2 id="scale">Scale and compress images</h2>

<p>Images are an important factor when it comes to page speed because they're usually the biggest files.</p>

<h3>Scale</h3>

<p>Edit your images so that they match the size needed for your page. WordPress already creates multiple sizes but they may need some tweaking to fit certain dimensions. If you are displaying a 400X200 pixel image from a 2560X1440 upload, a lot of unnecessary bytes will need to transfer for the image to show.</p>

<h3>Compress</h3>

<p>Before uploading an image, compress it through a compression site such as <a href="https://tinypng.com/" target="_blank">TinyPNG</a>, or use a WordPress plugin such as <a href="https://en-ca.wordpress.org/plugins/wp-smushit/" target="_blank">WP Smush</a> that provides a simple interface for optimizing all of your uploaded images.</p>

<hr />

<h2 id="compress">Compress and Combine Files</h2>

<p>Files sizes should not be overlooked since they can get quite large, especially when there are a lot of comments and white-space to render. In my experience, JavaScript and CSS libraries pile up the most. They should be compressed and combined for optimal loading.</p>

<h3>W3 Total Cache plugin</h3>

<p>W3 Total Cache provides various cache settings and adjustments for HTML, CSS and JavaScript files.</p>

<p>From the <strong>General Settings</strong> &gt; <strong>Minify</strong> section, check the Enable box. If the mode is set to <strong>Auto</strong>, Each file type (HTML, CSS, JS) you check from the <strong>Minify tab</strong> will be compressed. If certain parts of the website break from compressing, select <strong>Manual</strong> from the General Settings and include each file URL you want minified from the Minify tab.</p>

<p>In W3 Total Cache General Settings, <strong>enable Page Cache</strong> and <strong>Browser Cache</strong> to improve responsive time, and <strong>enable HTTP (gzip) compression</strong> under General from the <strong>Browser Cache tab</strong> settings. This reduces text-based file download time. W3 Total Cache offers a multitude of settings, but I find the minification and browser cache settings to be the most useful.</p>

<hr />

<h2>Load JavaScript at the bottom</h2>

<p>By moving your JavaScript files to the bottom before the closing <code></body></code> tag, the page will load visibly before running the scripts, improving user experience.</p>

<p>To make sure scripts load at the bottom in WordPress, edit the enqueued scripts in the <strong>functions.php</strong> file. Set true within your wp_register_script functions.</p>


<div class="codehilite">
{% highlight ruby %}
function custom_scripts() {
wp_register_script('script_name','get_template_directory_uri() . /js/example-script.js', '', '1.0.0', true );
wp_enqueue_script('script_name');
}
add_action ('wp_enqueue_scripts', 'custom_scripts');
{% endhighlight %}
</div>

<p>Save the file and refresh you website source code (Ctrl+U) to check and make sure the script is now at the bottom.</p>

<hr />

<h2 id="optimize">Further optimization for performance</h2>
<p>Use a <strong>content delivery network</strong> to reduce page load time.</p>

<p><strong> Disable Emojis</strong> if you don't use them. Within your <strong>functions.php</strong> file, add the following lines.</p>

<div class="codehilite">
{% highlight ruby %}
// Remove Emoji Icons
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
{% endhighlight %}
</div>

<h3>Remove unused plugins</h3>

<p>Switch to a better host such as Bluehost, Site5 or HostGator.</p>