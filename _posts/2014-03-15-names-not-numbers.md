---
layout: post
date: 2014-03-15
title: Names not numbers
category: "b-reel"
role: "Lead Developer"
client: "Médecins du Monde"
agency:
  - B-REEL
tech:
  - html5
  - javascript
  - php
  - aws
tags:
  - b-reel
  - html5
  - javascript
  - video
image: "medecins-du-monde--names-not-numbers"
image_home: "medecins-du-monde--names-not-numbers"
www: null
awards: ["award-awwwards_site_of_the_day", "thefwa_site_of_the_day"]
priority: "priority-2"
---

This website/experience has one thing: a video.

A video that must be in synchronization on each single frame.

The name that you see on the card is one of the four hundred png images that should be placed in top of the video.

Every time the video starts we pick one of those 400 images. Then we put it on top of the video and we sync in order to create the illusion that we have a unique video for each name.

I have used a technique which I explain more in depth in <a href="https://blog.singuerinc.com/javascript/video/html5/sync/2014/01/22/code-day-022-perfect-html5-video-sync/" target="_blank" rel="noopener">my blog</a>.

TL;DR Basically you have to encode the frame number in binary code in the video using black and white pixels. Using the `requestAnimationFrame()` function and drawing the video on a canvas you can extract those pixels and transform them into numbers.

Below is the video that we used as base:

<div class="video-wrapper">

<video style="position: absolute; top: 0; left: 0; width: 100%;height: 100%;" controls>
    <source src="https://singuerinc-b-reel.gitlab.io/org.names-not-numbers.www/files/video/MDM_INTRO_ASSEMBLE_EDIT_BLACK_720p_4.mp4" type="video/mp4">
    <source src="https://singuerinc-b-reel.gitlab.io/org.names-not-numbers.www/files/video/MDM_INTRO_ASSEMBLE_EDIT_BLACK_720p_4.webm" type="video/webm; codecs=&quot;vp8, vorbis&quot;">
    <source src="https://singuerinc-b-reel.gitlab.io/org.names-not-numbers.www/files/video/MDM_INTRO_ASSEMBLE_EDIT_BLACK_720p_4.ogv" type="video/ogg; codecs=&quot;theora, vorbis&quot;"></video>

</div>

Check it on the <a href="https://singuerinc-b-reel.gitlab.io/org.names-not-numbers.www/en_int/" target="_blank" rel="noopener">website</a> to see the final result.
