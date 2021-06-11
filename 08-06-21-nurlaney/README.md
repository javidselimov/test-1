# PYP / Day - 27

Table of Contents :

1. [Prerequisites](#prerequisites)
1. [Lessons topics](#lessons-topics)  
1. [Assigment](#assigment)
1. [Resources](#resources)

---
## Prerequisites

Measures to take before starting

* Install [VS Code](https://code.visualstudio.com/download) on your local machine
* Setup [Github Desktop](https://desktop.github.com/) on your local machine

---

## Assigment:

MUSIC PLAYER

Required to use Typescript, Express, MongoDB

Create a REST API for music player service:


Entities you have to create C.R.U.D for:
Songs
Name, artists, upload date, media url (e.g: youtube link)
Playlists
Name, creation date, author
User can add/remove song to the playlist
Validate if song exists before adding it to the playlist


For the demonstration purposes REST API won’t check for the permissions

![image](https://user-images.githubusercontent.com/19148254/121011247-74ebac00-c7a7-11eb-88fb-b0c8f0fbeb9c.png)

```typescript 
{
  songs: [
    {type:string, required: true}
  ]
}
```

++++++++++++++++

Create UI for the previous task

---

## Resources:

- https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/#:~:text=REST%20determines%20how%20the%20API,link%20to%20a%20specific%20URL.
- https://scotch.io/bar-talk/a-quick-understanding-of-rest
- https://www.infoq.com/articles/rest-introduction/
