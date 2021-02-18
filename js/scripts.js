"use strict";

// get in touch btn in nav
const navGetInTouch = document.querySelector(".nav ul .btn");
const heroGetInTouch = document.querySelector(".hero .content .btn");
const nav = document.querySelector(".nav");

// nav expanding
const navOpener = document.querySelector(".nav-opener");

navOpener.addEventListener("click", function () {
  nav.classList.toggle("expand");
});
