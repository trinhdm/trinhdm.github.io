---
layout: post
title:  "Changing Content on Hover"
date:   2016-05-07 06:03:00 -0700
description: Through the use of pseudo-elements and data-attributes - 100% CSS, no JavaScript included.
categories: blog, tutorial, web development
---

<!-- old:
title: "Changing content on hover by animating pseudo-elements and using data-attributes."
description: 100% CSS, no JavaScript included. -->

In this blog post, I'll discuss how I did [Foreground Studio's][fgs] navigation, where I used data-attributes and pseudo-elements to create interesting CSS hovers. I used WordPress as my CMS, so I'll be basing my post on that. Please note that animating pseudo-elements isn't supported by all browsers.

HTML5 data-attributes allow us to store little snippets of data in an element. I always thought that using data-attributes were useful, since the developer could add supplemental content without crowding the link. These could easily come in a form of a tooltip or changing the text on hover.

From an UI/UX perspective, this shouldn't be used for displaying important content since it won't be accessible for mobile/tablet users, since those users lack the ability to hover. And as far as I know, search engines can't index data-attributes because their semantic value is undetermined. Those are the only cons I could think of off the top of my head, but I'll probably revisit this topic in another time.

On the other hand, CSS pseudo-elements are used to style specific parts of an element, or insert content before or after an element. Pseudo-elements use <code>selector::before</code> or <code>selector::after</code>. For example, it could be coded as:

<pre>
  p::before {
    content: 'Hi!';
    color: #000;
  }
</pre>

<h2 style="padding-top:30px;">Creating the data-attribute</h2>

Let's start with the markup first:

<pre>
  &lt;li&gt;
    &lt;a href="/portfolio.html"&gt;
      &lt;span data-hover="Portfolio">Portfolio</span&gt;
    &lt;/a&gt;
  &lt;/li&gt;
</pre>

We define a data-attribute called <code>data-hover</code>, and its value will be stored in the pseudo-element <code>::before</code>. Next, we'll style it.

<div class="col-md-12" style="padding-bottom: 50px"><pre>
  #fgsnav li a {
    border-bottom: 2px solid #fff;
    padding: 15px 30px;
  }

  #fgsnav li a::after {
    content: '';
    border-bottom: 4px solid #fff;
    padding-bottom: 14px;
    width: 0;
    display: block;
    position: absolute;
    left: 0;
  }

  #fgsnav li a:hover::after {
    width: 100%;
  }
</pre>
<small>
The <code>a</code> element will have a 2px <code>border-bottom</code>, and when hovered, will have transform to a 4px <code>border-bottom</code>.<br>
We give the <code>::after</code> element a <code>width: 0</code>, a <code>display:block</code>, a <code>position: absolute</code>, and a <code>left: 0</code>, so it won't be visible when the user isn't hovering over it.<br>
It transforms to a 4px <code>border-bottom</code> because when we style the <code>:hover::after</code> element, we change the <code>width</code> from 0 to 100%.
</small>
</div>

<div class="col-md-12" style="padding-bottom: 50px"><pre>
  #fgsnav ul li a span {
    font: .8em 'Helvetica Neue Bold', Verdana, sans-serif;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 4px;
    display: block;
    position: relative;
    white-space: nowrap;
  }

  #fgsnav ul li a span::before {
    content: attr(data-hover);
    font-family: 'Helvetica Neue Bold', Verdana, sans-serif;
    display: block;
    position: absolute;
    top: 20px;
    height: 100%;
    width: 100%;
  }
</pre>
<small>We create a data-attribute called <code>data-hover</code> in the <code>::before</code> element. It also styles and positions the data-attribute.</small>
</div>


After writing the above code, it should look similar to this:
<img src="/assets/img/blog_05-07_data-attr_1.png" style="padding-bottom: 30px">

To hide it and make the bold text only visible on hover, we add <code>visibility: hidden</code> to <code>#fgsnav ul li a span::before</code> and <code>visibility: hidden</code> to the <code>#fgsnav ul li a:hover span</code>.

<img src="/assets/img/blog_05-07_data-attr_2.png" style="padding-bottom: 30px">

Now, when you hover on an element, it'll look like this:

<img src="/assets/img/blog_05-07_data-attr_3.png" style="padding-bottom: 30px">

That was easy, wasn't it? This will work on any static site, but in order to implement it for WordPress, we have to take on a couple more steps.

<h2 style="padding-top:30px;">Implementing data-attributes in WordPress</h2>
If you wanted to wrap each menu link on wp_nav_menu with a span (or any other tag), you could easily do so by including this snippet of code in wp_nav_menu:

<pre>
  'link_before' => '&lt;span&gt;',
  'link_after' => '&lt;/span&gt;',
</pre>

But what if you wanted to use our nifty data-hovers that we made above in our <code>wp_nav_menu</code>? You would have to use a customized [walker][walker] to wrap each menu item. The customized walker that I used was found on [this thread][walker] on WordPress Development Stack Exchange.

<pre>
class Nav_Walker_Nav_Menu extends Walker_Nav_Menu {
  function start_el(&$output, $item, $depth, $args){
      global $wp_query;
      $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
      $class_names = $value = '';
      $classes = empty( $item->classes ) ? array() : (array) $item->classes;
      $class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) );
      $class_names = ' class="'. esc_attr( $class_names ) . '"';

      $output .= $indent . '<li id="menu-item-'. $item->ID . '"' . $value . $class_names .'>';

      $attributes  = ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
      $attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
      $attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
      $attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';

      $description  = ! empty( $item->description ) ? '&lt;span&gt;'.esc_attr( $item->description ).'&lt;/span&gt;' : '';

      $item_output = $args->before;
      $item_output .= '<a'. $attributes .'>&lt;span data-hover="'. $item->title .'"&gt;';
      $item_output .=$args->link_before .apply_filters( 'the_title', $item->title, $item->ID );
      $item_output .= $description.$args->link_after;
      $item_output .= '&lt;/span&gt;&lt;/a&gt;';
      $item_output .= $args->after;

      $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
    }
  }
</pre>
<small style="padding-bottom: 30px">If you're using the Bootstrap NavWalker as your customized Walker, you can replace <code>Nav_Walker_Nav_Menu extends Walker_Nav_Menu</code> with <code>class Nav_Walker_Nav_Menu extends wp_bootstrap_navwalker</code></small>

After creating a custom walker and including it in our <code>functions.php</code>, include this code snippet in your <code>header.php</code> to actually create the menu.

<pre>
&lt;?php wp_nav_menu( array( 'container_class' => 'menu-header', 'theme_location' => 'primary', 'walker' => new Nav_Walker_Nav_Menu() ) ); ?&gt;
</pre>

And that's it! Thanks for making this far, and I hope whoever is reading this learned one or two things about pseudo-elements, how to use data-attributes for some nifty CSS hovers, and how to animate them. Stay tuned for other roaming thoughts about CSS and WordPress!



[fgs]:      www.foregroundstudios.net/demo-home/
[walker]:   http://wordpress.stackexchange.com/questions/216286/how-to-add-span-to-each-menu-link-with-link-text-to-data-attr
