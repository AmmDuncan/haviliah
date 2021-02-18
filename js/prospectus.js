"use strict";

const btns = document.querySelectorAll(".classes>*");
const classes = document.querySelector(".classes");
const content = document.querySelector(".prospectus .content");
const arrOfButtons = Array.from(btns);
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
  if (pageYOffset >= 150) {
    classes.classList.add("stick");
    content.style.marginTop = `${classes.offsetHeight + 16}px`;
  } else {
    classes.classList.remove("stick");

    content.style.marginTop = `0px`;
  }
});
