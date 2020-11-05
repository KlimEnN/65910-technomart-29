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



const mapLink = document.querySelector(".show-popup");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function () {
  mapPopup.classList.add("modal-show");
});


mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});



const formLink = document.querySelector(".button-show-popup");
const formPopup = document.querySelector(".modal-form");
const formClose = formPopup.querySelector(".modal-close");

formLink.addEventListener("click", function () {
  formPopup.classList.add("modal-show");
});

formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.remove("modal-show");
});



const buyLink = document.querySelectorAll(".buy-btn");
const buyPopup = document.querySelector(".modal-order");
const buyClose = buyPopup.querySelector(".modal-close");
const buyCloseButton = buyPopup.querySelector(".order-esc-btn");

for (var i = 0; i < buyLink.length; i++) {
  buyLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");
  });
}

  buyClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-show");
});


buyCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});


