"use strict";

const startBtn = document.querySelector('#start').addEventListener('click', start);
const h1Text = document.querySelector('.typewritten').textContent;
const h1 = document.querySelector('#typewriter');
const splited = h1Text.split('');

const typesound1 = new Audio('./typekey1.mp3');
const typesound2 = new Audio('./typekey2.mp3');
const typesound3 = new Audio('./typespace.mp3');
h1.textContent = ''

let i = 0;
function start() {
  if (i < h1Text.length) {
    h1.textContent += h1Text[i]
    typesound2.play();
    i++;
    typesound1.play();
    setTimeout(start, 400);
  }
}