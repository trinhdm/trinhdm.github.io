---
layout: post
title:  "Using radio buttons in WordPress theme options."
date:   2016-06-13 06:03:00 -0700
description: Ever wondered how to implement radio buttons in your theme options page?
categories: blog, tutorial, web development
---

Radio buttons are a great way for the user to select a single value from a mutually exclusive set of options. I understand that coding radio buttons into a theme options page may be difficult for some, but hopefully this guide explains how to implement radio buttons as easy as possible. Before we go on ahead, I'm going to assume that you know how to create a theme options page. If not, there are numerous guides out there that could guide you in the right path.

<h2 style="padding-top:30px;">Here's what we are going to do</h2>
<ul><li>Introduce three options for the user to choose from and their labels.
  <ul><li>The first option will have the label 'Left' and will have the value 'left'.</li>
  <li>The second option will have the label 'Right' and will have the value 'right'.</li>
  <li>The third option will have the label 'Center' and will have the value 'center'.</li></ul></li>
<li>Store the options in an array.</li>
<li>Iterate through the array using a foreach loop to generate the HTML mark-up for each option.</li>
</ul>


<h2 style="padding-top:30px;">Creating and storing the values</h2>
After listing out all of the options I needed, I stored all of the options within an array:

<pre>
function radio_buttons_callback() {
  $radio_buttons_settings = array(
    'left' => array(
      'value' => 'left',
      'label' => 'Left'
      ),
    'center' => array(
      'value' => 'center',
      'label' => 'Center'
      ),
    'right' => array(
      'value' => 'right',
      'label' => 'Right'
      ),
  );

  return apply_filters( 'radio_buttons_callback', $radio_buttons_settings );
}
</pre>

I created a callback function called <code>radio_buttons_callback</code>, which contains a variable <code>$radio_buttons_settings</code>. This variable stores all of the options and their corresponding values and labels.

<h2 style="padding-top:30px;">Understanding the mark-up</h2>
Next, let's call the <code>radio_buttons_callback</code> in a function that creates the setting, like this:

<pre>
function div_alignment_callback() {
  $settings = get_option('div_alignment');
  echo '&lt;div class="setting"&gt;';
  echo '&lt;div class="setting-header half-width-header"&gt;';
  esc_attr_e('DIV Alignment');
  echo '&lt;/div&gt;';
  echo '&lt;div class="setting-body" style="margin-top: 5px"&gt;';

  // RADIO BUTTONS
  foreach ( radio_buttons_callback() as $radio_button_option ) {
    echo '&lt;label class="description" style="margin-right: 40px"&gt;';
    echo "&lt;input type='radio'" . checked( $settings['s1_radio_buttons_settings'], $radio_button_option['value'], false ) . " name='div_alignment' value='" . esc_attr( $radio_button_option['value'] ) . "'/&gt;";
    echo $radio_button_option['label'];
    echo '&lt;/label&gt;';
  }

  echo '&lt;/div&gt;';
  echo '&lt;div class="clear">&lt;/div&gt;';
  echo '&lt;/div&gt;';
}
</pre>

The first thing to note is the <code>foreach</code> loop, but other than that, the HTML mark-up looks like your normal code snippet for a theme option setting. This <code>foreach</code> loops iterates through the array given by <code>radio_buttons_callback</code>, and on each iteration, the value of the current element is stored within <code>$radio_button_option</code> and the array pointer is advanced by one. It creates the HTML mark-up for each option, and assigns each option their respective value and marks whether or not the user checked it. I used WordPress's [checked][checked-function] function, which adds the <i>checked</i> attribute when the user checks a certain radio button. I added <i>false</i> to the third parameter for the function to return an attribute instead of a string.

Outside of the <code>foreach</code> loop, there is some HTML that I used to create the settings field. There's also a variable called <code>$settings</code>, where we store the selected option value. If you'd like to read more about this, check out WordPress's [get_option][get_option-function] function.

The last step would be to update the front-end of the theme to make sure that the radio button's values, wich will be discussed in the next section.

<h2 style="padding-top:30px;">Generating the selected theme option to the front-end</h2>
What you'd want to do with the newly created settings field is totally up to you and your theme, but with the above code snippet I had a goal in mind of allowing the user to select the DIV's alignment (hence the left/right/center).

I created several CSS classes that corresponded with the radio button's options:

<pre>
.left {
  padding-left: 7%;
}

.right {
  float: right;
  text-align: right;
  padding-right: 7%;
}

.center {
  margin: 0 auto;
  text-align: center;
}
</pre>

The HTML mark-up, on the other hand, is pretty easy to create. I created a variable named <code>$selected_radio_button</code> that retrieves the option based on the option name (in my case, I called it <code>div_alignment</code>), and then I echo the value of <code>$selected_radio_button</code>, which contains a key <code>['radio_buttons_settings']</code> that has the option selected from the theme options.

<pre>
&lt;?php
$selected_radio_button = get_option('div_alignment');
echo $selected_radio_button['radio_buttons_settings'];
?&gt;
</pre>

Refresh your website and see the magic happen. :) Thanks for reading, and I hope you've learned a few things for it (because I did while writing this blog post)! Stay tuned to more posts regarding front-end development and design. If there's any questions, comments or concerns (such as corrections), feel free to email me at <a href="mailto:doreenmtrinh@gmail.com">doreenmtrinh@gmail.com</a>.



[checked-function]:            https://codex.wordpress.org/Function_Reference/checked
[get_option-function]:         https://developer.wordpress.org/reference/functions/get_option/
