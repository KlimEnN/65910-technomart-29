const slides = document.querySelectorAll(".slider-item");
let currentSlide = 0;
const slideInterval = setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5000);
