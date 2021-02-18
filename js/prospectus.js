"use strict";

const btns = document.querySelectorAll(".classes>*");
const classes = document.querySelector(".classes");
let arrOfButtons = Array.from(btns);
const allProspectus = document.querySelectorAll(".content__container>*");
const prospectusContentContainer = document.querySelector(
  ".content__container"
);

arrOfButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    btns.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    prospectusContentContainer.style.transform = `translateX(-${100 * index}%)`;
  });
});

document.addEventListener("scroll", function () {
  if (pageYOffset >= 90) {
    classes.classList.add("stick");
  } else {
    classes.classList.remove("stick");
  }
});
