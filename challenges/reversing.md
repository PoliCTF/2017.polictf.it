---
layout: page
title: Challenges - reverse engineering
menu: false
---

# Challenges: Reverse Engineering

### HanoiPub [484 points, 3 solves]

<p>Welcome to the HanoiPub! To enter you will need to provide the bouncer the secret passphrase. Can you get it?</p><p>Hint: ATMega 328P</p>

<b>Download:</b> [hanoipub.tgz](/files/hanoipub.bdab7cd1353efc741882c2bd878a36bf46249360b83ce937e452a7efba4d9d84.tgz)

### Mail Downloader [509 points, 0 solves]

<p>We found this program used to download mails, among the features:<ul><li>Download new mails.</li><li>It "encrypts" the password used to login on mail server</li><li>It generates a password per-user.</li></ul>The author ensured us that it is impossible to retrieve the original string used to generate
the password. Can you retrieve it?</p>

<b>Download:</b> [maildownloader.tgz](/files/maildownloader.c2e53196541062af9fd025fd3e7a5c24291c0bb208ead8cb802552c498bbff92.tgz)

### Powder Toy CPU [500 points, 1 solve]

<p>Why reverse a program when you can reverse a computer & CPU with custom ISA?</p><p><b>Update: </b>Open me with <a href="http://powdertoy.co.uk">http://powdertoy.co.uk</a></p>

<b>Download:</b> [powdertoy.tgz](/files/powdertoy.0a671ae48ae6c79ea4ee0a1f5f859866bc65f6095cbee356b57057fe016d0711.tgz)

<b>Source code and author's writeup: </b> [github](https://github.com/PoliCTF/sources2017/tree/master/reversing-PowderToyCPU), [blog post](https://toh.necst.it/polictf2017/reversing/PowderToy-CPU/)

### Kompreplicants [446 points, 8 solves]

<p>Someone thinks it's safe to hide his data compressing it... I don't think so...</p>

<b>Download:</b> [kompreplicants.tgz](/files/kompreplicants.3c02c932a9ce6feb1021ade84bc4fe498aecee3d88a40d1a16535d4b782d27a2.tgz)

### Pasticciotto [0 solves]

<p>We found this executable and we think it must have something in common with the baddies' infrastructure. We would be glad to understand what data they are hiding from us...</p><p><b>Update: </b>maybe the real architecture isn't <code>x86_64</code>...</p><p>nc pasticciotto.chall.polictf.it 31337</p><p><b>Update: </b>Updated client (and server)</p>

<b>Download:</b> [pasticciotto.tgz](/files/pasticciotto_new.tgz)

<b>Source code and author's writeup:</b> [github](https://github.com/PoliCTF/pasticciotto), [blog post](https://toh.necst.it/polictf/reversing/Pasticciotto/)