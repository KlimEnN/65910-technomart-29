const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll(".slider-item");
const dots = slider.querySelectorAll(".slider-dot");
const sliderButtons = slider.querySelectorAll(".slider-btn");
let currentSlide = 0;
const activeClassName = 'active';

sliderButtons.forEach((button) => {
  button.addEventListener('click', sliderMove);
})

function sliderMove(evt) {
  evt.preventDefault();
  slides[currentSlide].classList.remove(activeClassName);
  dots[currentSlide].classList.remove(activeClassName);
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add(activeClassName);
  dots[currentSlide].classList.add(activeClassName);
};
