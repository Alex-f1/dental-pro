'use strict';
/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */

function setViewportProperty() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

/* ^^^
 * Полифил для NodeList.forEach(), на случай если забыл про IE 11
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 * ========================================================================== */

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
/* ^^^
 * Scripts
 * ========================================================================== */


function servicesSliderInit() {
  const servicesSlider = new Swiper(".js-services-slider", {
    slidesPerView: "auto",
    // initialSlide: 3,
    spaceBetween: 30,
    // centeredSlides: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 20,
        freeMode: true
      },
      // when window width is >= 641px
      641: {
        spaceBetween: 30
      },
      // when window width is >= 1281px
      1281: {
        spaceBetween: 30,
        freeMode: false
      }
    }
  });
}

if (document.querySelectorAll(".js-services-slider").length) {
  servicesSliderInit();
}

function mobilePanel() {
  const buttonBurger = document.querySelector(".js-button-burger");
  const mobileMenu = document.querySelector(".js-mobile-menu");
  const html = document.querySelector("html");
  buttonBurger.addEventListener("click", function () {
    this.classList.toggle("_is-active");
    mobileMenu.classList.toggle("_is-show");
    html.classList.toggle("_is-show-mobile-menu");
  });
  mobileMenu.addEventListener("click", function () {
    buttonBurger.classList.remove("_is-active");
    mobileMenu.classList.remove("_is-show");
    html.classList.remove("_is-show-mobile-menu");
  });
}

if (document.querySelectorAll(".js-button-burger").length) {
  mobilePanel();
}