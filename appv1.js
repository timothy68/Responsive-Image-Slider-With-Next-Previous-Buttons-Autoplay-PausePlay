const slider = document.querySelector(".slider");
const nextBtn = slider.querySelector(".next-btn");
const prevBtn = slider.querySelector(".prev-btn");
const slides = slider.querySelectorAll(".slide");
const slideIcons = slider.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
let slideNumber = 0;
let playSlider;

// function to change slide
const changeSlide = (direction) => {
  slides[slideNumber].classList.remove("active");
  slideIcons[slideNumber].classList.remove("active");

  if (direction === "next") {
    slideNumber++;
    if (slideNumber >= numberOfSlides) {
      slideNumber = 0;
    }
  } else {
    slideNumber--;
    if (slideNumber < 0) {
      slideNumber = numberOfSlides - 1;
    }
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
};

// click event listener for buttons
slider.addEventListener("click", (event) => {
  if (event.target === nextBtn) {
    changeSlide("next");
  } else if (event.target === prevBtn) {
    changeSlide("prev");
  }
});

// autoplay function
const startAutoplay = () => {
  playSlider = setInterval(() => {
    changeSlide("next");
  }, 4000);
};

// start autoplay on load
window.addEventListener("load", startAutoplay);

// stop autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

// start autoplay again on mouseout
slider.addEventListener("mouseout", startAutoplay);
