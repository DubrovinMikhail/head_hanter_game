/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/HeadHanter.js
class HeadHanter {
  randomWindow(windowsList) {
    const randindex = Math.floor(Math.random() * (windowsList.length - 1));
    if (windowsList[0].parentElement.querySelector(".head")) {
      const headindex = Array.from(windowsList).findIndex(element => element.classList.contains("head"));
      windowsList[headindex].classList.remove("head");
      let randindex = Math.floor(Math.random() * (windowsList.length - 1));
      while (randindex == headindex) {
        randindex = Math.floor(Math.random() * (windowsList.length - 1));
      }
      windowsList[randindex].classList.add("head");
    } else {
      windowsList[randindex].classList.add("head");
    }
  }
}
;// CONCATENATED MODULE: ./src/index.js


const windows = document.querySelectorAll(".window");
document.addEventListener("DOMContentLoaded", () => {
  const headChange = setInterval(() => {
    HeadHanter.prototype.randomWindow(windows);
  }, 1000);
});
/******/ })()
;