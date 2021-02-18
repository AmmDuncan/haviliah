"use strick";

const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll(".image-container img");
let counter = 0;
let n = images.length;

const next = () => {
  counter = (counter + 1) % n;
  imageContainer.style.transform = `translateX(-${counter * 100}%)`;
};

const interval = setInterval(next, 3000);

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
