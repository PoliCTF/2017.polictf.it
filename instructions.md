---
layout: page
title: Instructions
menu: true
menu_order: 1
---

# Instructions

Capture The Flags (CTFs) are competitions that involve many aspects of information security: 
cryptography, steganography, binary analysis, reverse engineering, mobile security and others.

There are two common CTF styles: jeopardy and attack-defense.
{{ site.polictf }} is a jeopardy CTF: teams are presented with a set of
specific questions (i.e., challenges) in a range of categories: pwnable,
reverse engineering, forensics and steganography, crypto and ``grab bag’’
(i.e., web and misc challenges).

* The goal of each challenge is to recover a special string called flag.
* {{ site.polictf }} flags are in the format `flag{}` or `FLAG{}`. The whole
  string including `flag{` and `}` needs to be submitted as flag. The entire
  string is case sensitive. When the flag is not in this standard format, it is
  clearly stated in the problem description.
* Teams gain points for every solved challenge.
* NEW: This year we are introducing a ``dynamic scoring system’’. Each
  challenge is worth a maximum of 500 points. Every time a team solves a
  challenge, the score of that challenge decreases (also for the team that
  already solved that challenge!). This way, the difficulty of each challenge
  is set by how many teams managed to solve it.
* Some challenges are initially locked. They will unlock only after some team
  solve unlocked challenges.
* The official communication channels are #polictf on hackint and the messages
  displayed through the PoliCTF dashboard during the competition. For any
  technical issue, please contact the organizers at info@polictf.it or via IRC.
* Attacking the scoring infrastructure (i.e., everything not belonging to the
  subdomain .chall.polictf.it) and performing voluntary or involuntary
  denial-of-service attempts against the challenge VMs is prohibited. This
  includes sending a lot of useless traffic through automated tools (e.g.,
  dirbuster). Teams caught doing so will be banned from the competition.
  Instead, if you find a problem with our infrastructure, please let us know,
  so that we can fix it and improve the overall quality of the game.
