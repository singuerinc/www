---
type: website
date: 2017-07-15
title: "Subway"
category: "singuerinc"
role: "Developer"
client: side project
agency:
  - "singuerinc"
tech:
  - "es6"
  - "javascript"
  - "typescript"
  - "PixiJS"
tags:
  - "es6"
  - "PixiJS"
  - "typescript"
image: "singuerinc--subway-viz"
image_home: "singuerinc--subway-viz"
www: "https://subway-singuerinc.netlify.com/"
more: "https://github.com/singuerinc/subway"
priority: "priority-2"
excerpt: Barcelona Subway Simulation is a personal experiment inspired by my fascination with transportation systems and games like OpenTTD. The simulation aims to replicate the synchronization of a subway system without relying on external APIs for data. It features a simple AI where trains load and unload cargo, make decisions based on their status and predefined routes, and encounter failures that can cause congestion.
---

Barcelona Subway Simulation.

This is a personal experiment. I am quiet a fan of transportation systems. I used to play a lot to
OpenTTD, an open source version of Transport Tycoon.

I was always fascinated by the (almost) perfect synchronization that the system should have.

A few statements about this simulation:

1.  There is no API connected to the app.

    I was considering the idea to use an API to get the data but the problem is that if you use it this simulation becomes a visualization.

2.  It includes a simple AI:

    - Trains unload and loads cargo on each station
    - Trains decide when to wait or enter to a waypoint/station by status (free/occupied)
    - Trains have a predefined itinerary and routes that have to follow
    - Stations get cargo (passengers) continuously to be delivered to other stations
    - Trains have different capacity (1, 2, 3 or more wagons)
    - Trains max speed is affected by the cargo and the size of the train
    - Trains could have failures that can generate big congestion

There is a lot more that can be added. I'm planning to add more and more features in the coming weeks. Stay tuned!

[https://subway-singuerinc.netlify.com/](https://subway-singuerinc.netlify.com/)
