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


new WOW().init();

function aboutMobileAppAccordion() {
  const itemInfo = document.querySelectorAll(".js-about-mobile-app-item");
  itemInfo.forEach(function (item) {
    item.addEventListener("click", function (event) {
      this.classList.toggle("_is-active");
    });
  });
}

if (document.querySelectorAll(".js-about-mobile-app-item").length) {
  aboutMobileAppAccordion();
}

const onlineChatButton = document.querySelector(".js-online-chat");
const onlineChatOverlay = document.querySelector(".online-chat-overlay");
const html = document.querySelector("html");
onlineChatButton.addEventListener("click", function (event) {
  event.currentTarget.classList.add("_is-active");
  onlineChatOverlay.classList.add("_is-opened");
  html.classList.toggle("_is-overflow-hidden");
});
onlineChatOverlay.addEventListener("click", function (event) {
  event.currentTarget.classList.remove("_is-opened");
  onlineChatButton.classList.remove("_is-active");
  html.classList.remove("_is-overflow-hidden");
});

function ourAdvantagesSliderInit() {
  const ourAdvantagesSlider = new Swiper(".js-our-advantages-slider", {
    slidesPerView: "auto",
    spaceBetween: 47,
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
        spaceBetween: 47,
        freeMode: false
      }
    }
  });
}

if (document.querySelectorAll(".js-our-advantages-slider").length) {
  ourAdvantagesSliderInit();
}

const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  catchFocus: true,
  waitTransitions: true,
  closeOnEsc: false,
  afterClose: function (modal) {
    document.querySelector(".js-video").setAttribute("src", "");
  }
});

function reviewsCustomerSliderInit() {
  const reviewsCustomerSlider = new Swiper(".js-reviews-customer-slider", {
    slidesPerView: "auto",
    spaceBetween: 50,
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 15,
        freeMode: true
      },
      // when window width is >= 641px
      641: {
        spaceBetween: 40
      },
      // when window width is >= 1281px
      1281: {
        spaceBetween: 50,
        freeMode: false
      }
    }
  });
}

if (document.querySelectorAll(".js-reviews-customer-slider").length) {
  reviewsCustomerSliderInit();
}

const reviewsCustomer = document.querySelectorAll(".js-reviews-customer");
const video = document.querySelector(".js-video");
reviewsCustomer.forEach(function (item) {
  item.addEventListener("click", function (event) {
    const getDataSrc = event.currentTarget.dataset.src;
    video.setAttribute("src", getDataSrc);
  });
});

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
    html.classList.toggle("_is-overflow-hidden");
  });
  mobileMenu.addEventListener("click", function () {
    buttonBurger.classList.remove("_is-active");
    mobileMenu.classList.remove("_is-show");
    html.classList.remove("_is-overflow-hidden");
  });
}

if (document.querySelectorAll(".js-button-burger").length) {
  mobilePanel();
}

function fixedHeaderPanelPanel() {
  const headerTopPanel = document.querySelector(".js-header-top-panel");
  const topPanel = document.querySelector(".top-panel");
  const topPanelOffsetTop = topPanel.offsetTop;
  window.addEventListener("scroll", function () {
    if (window.scrollY > topPanelOffsetTop) {
      headerTopPanel.classList.add("_is-fixed");
    } else {
      headerTopPanel.classList.remove("_is-fixed");
      headerTopPanel.style.top = 0;
    }

    let oldScroll = this.oldScroll || 0;
    let newScroll = this.scrollY;

    if (newScroll < oldScroll) {
      headerTopPanel.style.top = 0;
    }

    this.oldScroll = newScroll;

    if (newScroll >= oldScroll) {
      headerTopPanel.style.top = "".concat(-topPanelOffsetTop, "px");
    }

    if (newScroll == 0) {
      headerTopPanel.classList.remove("_is-fixed");
    }
  });
}

fixedHeaderPanelPanel();