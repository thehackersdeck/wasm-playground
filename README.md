# wasm-playground
A playground for compiling and running WebAssembly applications.
#

# Aim 🎯

This project was inspired when the idea of getting started with WebAssembly became a difficult task for many of the Org's members.

The aim of wasm-playground is to allow people who are getting started with wasm quickly get their hands dirty on the go, without having to be concerned about installing a whole bunch of nerdy stuffs!

The project not only plans to allow people compile their codes written in another language (with only C supported for now) to wasm, the download the ```.wasm/wast``` file(s), it will also allow people write their codes in their language(s) **in an integrated (light) text editor** and still use all the other features of the playground.
#

# What wasm-playground isn't 🛑

This playground is just for people who want to get into wasm without installing a whole bunch of things. This is the [ES6 console](https://es6console.com/) equivalent of wasm.

This playground isnt a substitute for the local setup of your wasm toolkit. Maybe as time goes on it can actually be a worthy substitute for your local setup but we're NOT there yet. If you feel comfortable grabbing the bull by the horn and setting up your local development, perhaps this playground isn't for you. We'll love your contributions though! 😉
#

# How far have we gone? 🏃

Right now, this project is so young. So things are a little bit yet to take off. Actually, we just implemented our basic proof of concept! Below are some of the things we've done:

1. [x] Basic web client to upload ```.c``` files

2. [x] Basic server to compile ```.c``` and return downloadable compiled file

#

# Where are we going? ⤴️

The following list is not exhaustive. We plan to make this work and as such, we think about new features to implement. Here are some of the things we hope to do:

1. [ ] Intuitive and clear client to upload file

2. [ ] Support other languages apart from C

3. [ ] Provide support for downloading as a text file

4. [ ] Integrated text editor

5. [ ] Run compiled wasm

#


### Okay, Can I see some codes apart from just this readme? 🤔

Of course! We are good code craftspeople 😉. We love showing off our work. Please checkout the `structure/init` branch. For now, we're developing the proof of concept there. Feel free to see some 'code'.
