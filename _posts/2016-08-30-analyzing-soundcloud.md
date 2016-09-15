---
layout: post
title:  "I love SoundCloud."
date:   2016-08-30 06:03:00 -0700
description: A case study of my favorite website's UX/UI (with a mock-up redesign included).
categories: blog
---


A friend recently gave me a book called [100 Things Every Designer Needs to Know About People][100thingsdesign]. The knowledge within this book is applicable for any area of design, whether it's web design, print or industrial. It combines science and examples to show what (actions, colors, etc) elicit responses from people. I decided to apply the knowledge that I gained from this book in my redesign of SoundCloud.

<img src="/assets/img/blog_8-30_sc_macbook_preview_mine.jpg" class="blog-full-width-img">

If you haven't heard of SoundCloud, it's a music application that fills the void that MySpace desperately tried to conquer - free music streaming, easy track sharing and more. Back in the days of MySpace, music streaming was only a portion of the whole "MySpace experience", though there was no platform solely dedicated for sharing music. Other music distribution platforms came along, such as [Pandora][pandora] (launched in 2000) and [HypeM][hypem] (launched in 2005), but they weren't nearly as successful as SoundCloud (launched in 2007).

SoundCloud's current design gets the job done, but I feel like they could make several improvements to their UX/UI. It has come a long way since I started using SoundCloud back in 2013, but their interface still feels cluttered and unclean. My <b>main goal</b> with this was to revamp SoundCloud with a clean and clear design that is easy to navigate and isn't too heavy on visual clutter / cognitive load. In addition to that, I wanted to increase social engagement with the platform and boost visibility of lesser known SoundCloud features, such as stations.

I'll start first with the issues. If you click on any of the images below, they'll lead you to the full sized versions.





<h2 style="padding-top:30px;">A crowded navigation bar</h2>
<img src="/assets/img/blog_8-30_sc_navbar_old.png"  class="blog-full-width-img"  data-action="zoom"><center><small><i>Their current design.</i></small></center>

<b>The upload button doesn't need to be placed in the navbar.</b> A large amount of SoundCloud's users are purely listeners - [175 million monthly users][sc-monthly-users] compared to [10 million (yearly) content creators][sc-music-creators]. The upload link could be moved elsewhere because it doesn't need to be accessed all of the time.

<div style="height: 250px; margin-bottom: 15px;"><img src="/assets/img/blog_8-30_sc_navbar_profile_dropdown_old.png"  style="float: left; padding-right: 25px;" data-action="zoom">
<b>Clicking on my name leads to a dropdown</b> instead of my profile. I noticed that their 'Collection' button also leads to an overview of your profile (it shows your likes, following, followers, etc). I feel like it's more intuitive if clicking my name leads directly to my profile, rather than a dropdown that is basically "Collection" in dropdown form.</div>
<div style="clear: both;"></div>

<div style="height: auto; float: right; margin: 10px 0 15px; padding-left: 25px;">
<img src="/assets/img/blog_8-30_sc_navbar_ellipsis2_old.png" style=" max-height: 320px; width: auto;" data-action="zoom"></div>
<b>The ellipsis on the navigation bar</b> seems like a synonym for the hamburger menu icon, though less intuitive. <a href="http://www.uxmovement.com/buttons/how-to-use-arrow-and-ellipsis-affordances/">UX Movement</a> has remarked that " ..on a user interface, designers use ellipsis on buttons and menus for unfinished actions. The user completes the action on the modal window." This behavior is odd, since when you click on the three dots on SoundCloud, it brings you to a menu instead of performing an action (some examples are <i>open..</i> or <i>new..</i> as seen on other apps such as Word or Photoshop). Although there isn't a set definition of when to use ellipsis and when to use hamburger menus, I feel like in this case, a hamburger menu would've been more intuitive.

<b>There are multiple instances of promoting SoundCloud Go</b>, as seen in the navbar, in the ellipsis menu and in the various ad spaces throughout the site. As the [Nielsen Norman Group][nngroup], a company based on researching UI/UX, has stated, "..designers know these links are duplicates, but users do not. So, they often end up scanning both sets of links – effectively doubling the amount of analysis they need to conduct to select the best link. Repeating links burdens your visitors." I understand that they're trying to promote people purchasing a subscription of Go, but it causes cognitive strain and it also crowds the web page. It would be best if SoundCloud removed all but the link to the right of the search bar for SoundCloud Go.
<div style="clear: both;"></div>



<h3>Solution</h3>
<img src="/assets/img/blog_8-30_sc_navbar_old.png"  class="blog-full-width-img" data-action="zoom">
<img src="/assets/img/blog_8-30_sc_navbar_mine.jpg"  class="blog-full-width-img" data-action="zoom"><center><i><small>Their current design (above) and my suggested changes (below).</small></i></center>

To decrease the amount of clutter on the navbar, I used the whole width of the screen by increasing the white space between every element. Since there were multiple instances of SoundCloud Go, I removed all but one. I also decreased the width of the search bar, because I felt like the current search bar takes up more than enough space. Clicking on the username now leads you to your profile instead of a dropdown, which seems more intuitive for me. I replaced the ellipsis with a slight variant of the hamburger icon - the third bar is a bit shorter than the other bars to represent sound waves. Finally, I removed the 'upload' button on the navbar (it's now in the 'Stream' page in my design). There are some other changes that I've made to the navbar, but I'll discuss them within the next sections.

<h2 style="padding-top:30px;">Notifications</h2>
<div style="height: auto; margin-bottom: 10px; float: right; padding-left: 25px;">
<center><img src="/assets/img/blog_8-30_sc_notifications_old.png" data-action="zoom"><br>
SoundCloud's current notification box.</center></div>

<b>Humans are innately social beings.</b> The only notifications that SoundCloud provides are when your network is faulty or when someone follows you back, but what about all of the other features that SoundCloud has? As <i>100 Things Every Designer Needs to Know About People</i> has stated, people are motivated to keep seeking information due to the neurotransmitter called Dopamine (p. 122-124). Having notifications subtly increases engagement for a design's users because it motivates people to seek more information due to the [Pavlovian effect][pavlovian] since the user associates a certain ringtone to a notification. Plus, it's fun to know if your followers interacted with any of the tracks you reposted. In addition to that, allowing users to mention other users in a comment would also add more engagement (maybe only if they're both following each other as it can get messy).
<div style="clear: both;"></div>



<h3>Solution</h3>
<div style="height: 500px; margin-bottom: 15px;">
<img src="/assets/img/blog_8-30_sc_notifications_mine.jpg" style="float: left; padding-right: 25px;" data-action="zoom">

The user would get notifications if someone liked or reposted your repost, if someone mentioned you in a comment in a song, and more. It's more socially engaging this way. Humans are social creatures, after all.
</div>
<div style="clear: both;"></div>





<h2 style="padding-top:30px;">Music Player</h2>
<img src="/assets/img/blog_8-30_sc_player_old.png"  class="blog-full-width-img" data-action="zoom"><center><i><small>Their current design.</small></i></center>

If the user wanted to <b>repost or add a certain song to a playlist from the player</b>, they needed to navigate to the song's page. It's one extra step to share music, which could get annoying if you're constantly reposting or if you continuously find new music to put in a playlist. Other than that, the current design for the music player gets the job done, but I chose to redesign it to match the rest of my design's look and feel.



<h3>Solution</h3>
<img src="/assets/img/blog_8-30_sc_player_mine.jpg"  class="blog-full-width-img" data-action="zoom"><center><i><small>My proposed solution concept.</small></i></center>

By moving the song progression bar to the very bottom in its own row, I felt like the music player matches with the "clean and organized" feel my redesign was going for. Since we're using the full width of the screen, the player now has room for more buttons, so I included buttons for reposting and adding to a playlist.





<h2 style="padding-top:30px;">The Stream</h2>
<img src="/assets/img/blog_8-30_sc_stream_old.png"  class="blog-full-width-img" data-action="zoom"><center><i><small>Their current design. The Stream appears to be visually cluttered with icons, words and other sorts of information.</small></i></center>

<b>The buttons</b> to like, repost, add-to-playlist, share and station have unnecessary text attached to each icon. The icons used are concrete and conveys their purpose well enough. There are [multiple tests][icon-effectiveness] on the web that could test the effectiveness of an icon.

<div style="height: auto; margin-bottom: 10px; float: right; padding-left: 25px;">
<center><img src="/assets/img/blog_8-30_sc_likes_old.png" data-action="zoom"></center></div>
<b>The user doesn't need to know</b> the amount of reposts, comments, and maybe other statistics when it comes to tracks in our "liked songs" section. This type of information is otherwise known as irrelevant text that increases [cognitive load][nngroup2].
<div style="clear: both;"></div>

<b>The statistics</b> aren't grouped together. The number of likes and reposts are to the left of the track, and the number of plays and comments are to the right.

<div style="margin-top: 40px;">
<center><img src="/assets/img/blog_8-30_sc_ads1_old.png" style="padding-right: 25px;" data-action="zoom"><img src="/assets/img/blog_8-30_sc_ads2_old.png" style="vertical-align: top" data-action="zoom"></center>
</div>
<b>Half of the time, the ads aren't even there</b> but when they are there, they advertise various parts of SoundCloud. They encourage you to upgrade to SoundCloud Go or to check out the Top 50 weekly charts, but that just clutters the Stream Page as they don't really provide much value. In their current design, 'Upgrade (to SoundCloud Go)' is already located in the navbar, and the Charts button is already located next to the "Stream" header on the page itself. It seems redundant to advertise different parts of the website.

<img src="/assets/img/blog_8-30_sc_comments_old.png"  class="blog-full-width-img" data-action="zoom">
<b>User comments and icons on the tracks are insignificant on the Stream page</b>. The purpose of having those icons is to signify the amount of users who commented on the track and what they said, but I think it's safe to assume that users tend to listen to SoundCloud tracks in the background and that the average user doesn't read comments on the Stream page. If the comments/icons get removed, the result would be a cleaner interface. Plus, the icons are too small to generate any real value.



<h3>Solution</h3>
<img src="/assets/img/blog_8-30_sc_stream_mine.jpg"  class="blog-full-width-img" data-action="zoom"><center><small><i>My proposed solution concept. <a href="/assets/img/blog_8-30_sc_stream_mine.jpg">Click here for the full sized image.</a></i></small></center>

Removing the ad space as well as comments on individual tracks makes the stream page look less busy. Those elements were visually distracting and I'm a firm believer that less is more.

I've also moved several elements around. The upload button (that was removed earlier) is now located on the top of the Stream page. It seemed more intuitive to link the upload button to the feed, rather than have it on the navbar. The "Charts / Discover" links that were on the current design were combined into "Discover" and moved to the navbar, which will be discussed in the next section.

I added a "Suggested Stations" section on the right sidebar because it goes with the sidebar's theme of discovering new music. I also feel like Stations are an underrated feature that needs more visibility, but maybe that's my personal anecdote.

<img src="/assets/img/blog_8-30_sc_comments_mine.jpg"  class="blog-full-width-img" data-action="zoom"><center><small><i>Close-up of a single track on the stream.</i></small></center>

I've grouped the statistics together on the right side of the track. As stated earlier, the icons used are concrete and conveys their purpose well, so discarding the text will keep the interface neat. The icons could also have a tooltip that says their purpose that appears on hover.





<h2 style="padding-top:30px;">Discover</h2>
<img src="/assets/img/blog_8-30_sc_discover_old.png"  class="blog-full-width-img" data-action="zoom"><center><small><i>Their current design - Discover (Grid View).</i></small></center>

<b>To view more song suggestions for a certain song</b> requires you to click left/right to see more songs, and to view suggestions for <i>other songs</i>, you need to scroll up and down. The conventional mouse and wheel allows people to easily scroll up and down, so why break that convention? It does save vertical space by introducing a slider, but as users, we're already used to [reading left and right within the confines of the page, that introducing horizontal scroll could break a predefined convention][experienceux], or induce headaches and problems for the users.

<b>The ad space</b> is pretty redundant and it takes up unnecessary space, as mentioned before.

<img src="/assets/img/blog_8-30_sc_discover2_old.png"  class="blog-full-width-img" data-action="zoom"><center><small><i>Their current design - Discover (List View).</i></small></center>

<b>Or if the user opted for list view</b>, they have to keep scrolling to see suggestions for other songs. This renders list view completely insignificant, as it takes more time than needed to get to the next suggestion section.



<h3>Solution</h3>
<img src="/assets/img/blog_8-30_sc_discover_mine.jpg"  class="blog-full-width-img" data-action="zoom"><center><small><i>My proposed solution concept. <a href="/assets/img/blog_8-30_sc_discover_mine.jpg">Click here for the full sized image.</a></i></small></center>

Having the same sidebar as the Stream page is fine, but I've replaced the sidebar with a chart listing of the top 10 songs played this week instead of having a separate link for charts. The new sidebar with the charts allows the user to easily view top songs of that week, rather than navigating to a new page. This plays into the theme of 'discovering new music' for that page. In this design, the user would have the option to change their default chart to something else (such as the Top 10 tracks of the Rock & Rock genre) within the account settings page.

Instead of scrolling left and right to view more song suggestions, having a link that would lead to a separate playlist would keep the interface clean and clear. It won't strain users to scroll left and right to view more suggestions. If the user opts for list view, it'll list 2-3 songs and then a link to view the rest of the playlist, rather than the whole playlist.





<h2 style="padding-top:30px;">An individual song page</h2>
<img src="/assets/img/blog_8-30_sc_track_old.png"  class="blog-full-width-img" data-action="zoom"><center><small><i>Their current design.</i></small></center>

<b>User icons and comments on the sound wave are yet again insignificant</b>, for the same reasons mentioned above. It clutters the interface with small icons that are barely recognizable, and comments you could view in the comment section below.

<div style="height: auto; float: right; margin: 10px 0 15px; padding-left: 25px;">
<img src="/assets/img/blog_8-30_sc_track_likes_old.png" data-action="zoom"></div>
<b>Statistics are all over the place.</b> The number of views and likes are located under the song, but the number of comments is listed below the description, and the number of reposts are located on the bottom of the sidebar. They also repeated the number of likes above the reposts.

In addition to that, SoundCloud lists out who has liked or reposted the song with their user icons, which is meaningless. I don't think I've recognized any icon within that section.



<h3>Solution</h3>

<img src="/assets/img/blog_8-30_sc_track2_mine.jpg"  class="blog-full-width-img" data-action="zoom"><center><small><i>My proposed solution concept. <a href="/assets/img/blog_8-30_sc_track2_mine.jpg">Click here for the full sized image.</a></i></small></center>

I removed the comments on the individual song page. Maybe a toggle button to show and hide the comments would work here if a user wants to view the comments on the sound waves.

Underneath the link to the artist's page is a link to their station. It may be slightly repetitive because under the song contains a link to create a station based on the song, but an artist's station is different from the song's station. This is part of my goal to my stations more visible.

For the recent comments section, I would limit it to the 5-10 most recent comments. Clicking 'View All Comments' could lead to a lightbox that shows all of the comments, instead of having the user scroll endlessly through the comments.

<center><img src="/assets/img/blog_8-30_sc_track_likes_mine.jpg" data-action="zoom"></center>
On the sidebar, I grouped all of the likes, reposts and playlists together instead of listing each user icon.
Clicking on one of these links could open up a lightbox displaying who has liked, reposted, or put this song in their playlist.

<h2 style="padding-top:30px;">Other small changes</h2>
All icons are square shaped, instead of having circles for users and squares for everything else. Although forming patterns such as shapes help users recognize objects (<i>100 Things Every Designer Needs to Know About People</i>, p. 8), I wanted to make the shapes uniform for a cleaner interface.


<!-- [Redundancy increases cognitive load][omniplex], as stated by Tom DiMartini in the Omniplex blog. -->

<h2 style="padding-top:30px;">Closing Notes: So why not take a stab at redesigning my favorite website for fun?</h2>
This is my first journey into the UI/UX world. I've never analyzed anything this in-depth, but I've learned quite a few things from picking apart my favorite web app. This is by no means a complete list of critiques and ideas, and my list may or may not have been beneficial. There are more screens that I'd like to touch upon on (Collections, user profiles, and more) which I will probably discuss in another blog post.



[pandora]:              https://www.pandora.com
[hypem]:                http://hypem.com/
[100thingsdesign]:      https://www.amazon.com/Things-Designer-People-Voices-Matter/dp/0321767535
[uxmovement]:           http://www.uxmovement.com/buttons/how-to-use-arrow-and-ellipsis-affordances/

[sc-monthly-users]:     http://www.nytimes.com/2016/06/15/business/media/twitter-invests-70-million-in-soundcloud-music-service.html?_r=1
[sc-music-creators]:    https://techcrunch.com/2014/08/21/soundcloud-launches-ad-platform-and-preps-ad-free-subscription-service/?ncid=rss

[pavlovian]:        https://en.wikipedia.org/wiki/Classical_conditioning
[omniplex]:         http://blog.omniplex.co/the-effects-of-cognitive-load-on-design
[nngroup]:          https://www.nngroup.com/articles/navigation-cognitive-strain/
[nngroup2]:         https://www.nngroup.com/articles/minimize-cognitive-load/
[experienceux]:     http://www.experienceux.co.uk/ux-blog/2011/12/12/a-ux-perspective-on-horizontal-scrolling/
[icon-effectiveness]: http://www.measuringu.com/blog/icon-tests.php
