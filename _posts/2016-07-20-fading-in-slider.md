---
layout: post
title:  Parallax Slider
date:   2016-07-20 06:03:00 -0700
description: A tutorial on how I created the parallax slider for Bound.
categories: blog
---

<!-- old:
title:  "Fade out parallax layers on scroll."
description: If you're looking for a fancy way to introduce your website, this simple slider will do the job. -->


The title for this blog post may have been hard to describe with words, but basically, it's a walkthrough of how I created [this slider][bound-slider]. It's basically a three layered "slider" that fades from layer to layer on scroll.

Have a look at the demo below:
<iframe width="100%" height="500" src="//jsfiddle.net/1dfrw9h1/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

At the time of writing, I haven't figured out how to implement a way for the user to add more pages to the slider (for WordPress), but if anyone has any ideas, that would be great. Perhaps I could create a custom post type for the slider, store each slider (text/image/other things) in a post, and then create a new WP Loop to generate the posts to the slider; though I would love to implement it through a theme options page rather than a custom post type. It's a topic to explore in the near future.

<h2 style="padding-top:30px;">The markup</h2>
I'll introduce the HTML, CSS and JS prior to explaining the structure.

<b>The HTML:</b>
<pre>
&lt;div id="slider">
  &lt;div class="slider-container">
    &lt;div class="slider-item first">
    &lt;/div>
    &lt;div class="slider-caption">
      &lt;div class="slider-body left">
        &lt;div class="slider-title">
        &lt;/div>
        &lt;div class="slider-caption">
        &lt;/div>
      &lt;/div>
    &lt;/div>
  &lt;/div>

  &lt;div class="slider-container">
    &lt;div class="slider-item second">
    &lt;/div>
    &lt;div class="slider-caption">
      &lt;div class="slider-body right">
        &lt;div class="slider-title">
        &lt;/div>
        &lt;div class="slider-caption">
        &lt;/div>
      &lt;/div>
      &lt;div class="clear"></div>
    &lt;/div>
  &lt;/div>

  &lt;div class="slider-container">
    &lt;div class="slider-item third">
    &lt;/div>
    &lt;div class="slider-caption">
      &lt;div class="slider-body left">
        &lt;div class="slider-title">
        &lt;/div>
        &lt;div class="slider-caption">
        &lt;/div>
      &lt;/div>
    &lt;/div>
  &lt;/div>

  &lt;div class="slider-container">
    &lt;div class="slider-item fade-to-white">
    &lt;/div>

    &lt;div class="slider-caption small">
      &lt;div class="slider-body">
      &lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/div>
</pre>

<b>The CSS:</b>
<pre>
.slider-item {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.slider-item.first {
  background: url('https://yourbackgroundimagehere.com') no-repeat center center fixed;
  z-index: 9;
}

.slider-item.second {
  background: url('https://yourbackgroundimagehere.com') no-repeat center center fixed;
  z-index: 7;
}

.slider-item.third {
  background: url('https://yourbackgroundimagehere.com') no-repeat center center fixed;
  z-index: 5;
}

.slider-caption {
  position: relative;
  margin-top: 81px;
  height: calc(100vh - 61px);
  z-index: 10;
}

.slider-caption.small {
  height: 25vh;
}

.slider-body {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  text-shadow: 0 1px 2px #ccc;
  max-width: 400px;
}

.slider-body.left {
  padding-left: 7%;
}

.slider-body.right {
  float: right;
  text-align: right;
  padding-right: 7%;
}

.slider-title h3 {
  font-size: 3.5em;
}

.fade-to-white {
  background: #fff;
  height: 400px;
  z-index: 2;
}

.slider-none {
  opacity: 0;
  display: none;
}
</pre>

<b>The JS:</b>
<pre>
var target = $('div.slider-item');
var targetHeight = target.height();
var containerHeight = $('#slider').outerHeight();

var maxScroll = containerHeight - targetHeight;
var scrollRange = (maxScroll / (target.length - 1)) + 250;

$(document).scroll(function(e) {
  var scrollY = $(window).scrollTop();
  var scrollPercent = (scrollRange - scrollY % scrollRange) / scrollRange;
  var divIndex = Math.floor(scrollY / scrollRange);
  target.slice(0,divIndex).css('opacity', 0);
  target.eq(divIndex).css('opacity', scrollPercent);
  target.slice(divIndex+1).css('opacity', 1);
});
</pre>

<h2 style="padding-top:30px;">The explanation of the markup</h2>
After looking at all three of the components, it will be easier to explain how they link together.

The slider is wrapped by a <code>#slider</code> DIV. Each slide and their respective title and caption is located within a <code>.slider-container</code>. The background of each slide is located within <code>.slider-item.number</code>, where <code>.number</code> corresponds to the order of the slide (<code>.first</code>/<code>.second</code>/<code>.third</code>). The respective title and caption are located within <code>.slider-body</code>, which is located in <code>.slider-caption</code>. The <code>.left</code> and <code>.right</code> classes are meant for the alignment of the DIV, whether it's on the left or right of the screen. The last slide, <code>.fade-to-white</code>, fades the slider to a white background.

Since we want each slider to be on top of one another, with the first slide to be on top, we set each <code>.slider-item</code> DIV to be <code>position: fixed</code> and <code>top: 0</code>. <code>.slider-item</code> also has a <code>height: 100%</code>, <code>width: 100%</code>, and  <code>background-size: cover</code> because we want each slider background to be full-screened at all screen resolutions.

I set each slider's background and its <code>z-index</code> within <code>.slider-item.number</code>. The slider that's on top will have the highest z-index, the slider below the first slider will have the second highest z-index, and so on and so forth.

The <code>.slider-caption</code> and <code>.slider-body</code> DIVs have <code>position: relative</code> so I could position the DIV easily with <code>.left</code> and <code>.right</code>. The rest of the CSS is just styling for the slider's elements.

As the user scrolls through the document, we find the DIV's index number and change the opacity of the respective DIV based on the scroll percentage. We then create several variables to help us with the math to actually make it fade on scroll. <code>target</code>, <code>targetHeight</code> and <code>containerHeight</code> are variables that will help us with the math that's further in the script. <code>scrollRange</code> calculates the amount of scrolling needed for each slide. I added 250 to the <code>scrollRange</code> because I felt like it was fading too early. <code>scrollY</code> returns the vertical scrollbar position from the top of the window, which is used to calculate the <code>scrollPercent</code>, or how much you've scrolled. <code>divIndex</code> corresponds to which slide the window is on.

We then call on the <code>.slice()</code> and the <code>.eq()</code> methods to fade the top DIV onto the DIV that's located underneath based on the <code>divIndex</code> and <code>scrollPercent</code>.

<!--
We take the .slider-item's height
maxscroll
Math.floor(rounds to the nearest integer)
divIndex takes the  nearest integer of (window's vertical scroll position / -->


Thanks for reading, and if you happen to recreate the slider, I'd love to see the results -- feel free to email me at <a href="mailto:doreenmtrinh@gmail.com">doreenmtrinh@gmail.com</a>.

[bound-slider]:       bound.staging.wpengine.com
