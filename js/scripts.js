"use strict";

const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll(".image-container img");
let counter = 0;
let n = images.length;

const next = () => {
  counter = (counter + 1) % n;
  imageContainer.style.transform = `translateX(-${counter * 100}%)`;
};

const interval = setInterval(next, 3000);

// get in touch btn in nav
const navGetInTouch = document.querySelector(".nav ul .btn");
const heroGetInTouch = document.querySelector(".hero .content .btn");
const nav = document.querySelector(".nav");

document.addEventListener("scroll", function () {
  if (
    pageYOffset >=
    heroGetInTouch.offsetTop + heroGetInTouch.offsetHeight - nav.offsetHeight
  ) {
    if (!navGetInTouch.classList.contains("show")) {
      navGetInTouch.classList.add("show");
    }
  } else {
    navGetInTouch.classList.remove("show");
  }
});

// nav expanding
const navOpener = document.querySelector(".nav-opener");

navOpener.addEventListener("click", function () {
  nav.classList.toggle("expand");
});
