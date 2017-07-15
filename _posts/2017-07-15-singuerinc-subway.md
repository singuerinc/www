---
layout: post
title: "Subway"
category: "singuerinc"
role: "Developer"
client: "singuerinc"
agency:
    - "singuerinc"
tech:
    - "es6"
    - "javascript"
    - "PixiJS"
tags:
    - "es6"
    - "PixiJS"
image: "singuerinc--subway-viz"
image_home: "singuerinc--subway-viz"
www: "https://singuerinc-labs.gitlab.io/subway/"
more: ""
priority: 'priority-2'
---

Barcelona Subway Simulation.

This is a personal experiment. I am quiet a fan of transportation systems. I used to play a lot to
OpenTTD, an open source version of Transport Tycoon.

I was always fascinated by the (almost) perfect synchronization that the system should have.

A few statements about this simulation:

1. There is no API connected to the app.

    I was considering the idea to use an API to get the data but
the problem is that if you use it this simulation becomes a visualization.

2. It includes a simple AI:
 
    - Trains unload and loads cargo on each station
    - Trains decide when to wait or enter to a waypoint/station by status (free/occupied)
    - Trains have a predefined itinerary and routes that have to follow
    - Stations get cargo (passengers) continuously to be delivered to other stations
    - Trains have different capacity (1, 2, 3 or more wagons)
    - Trains max speed is affected by the cargo and the size of the train
    - Trains could have failures that can generate big congestion
    
There is a lot more that can be added. I'm planning to add more and more features in the coming weeks. Stay tuned!

[https://singuerinc-labs.gitlab.io/subway/](https://singuerinc-labs.gitlab.io/subway/)

