function servicesSliderInit() {
  const servicesSlider = new Swiper(".js-services-slider", {
    slidesPerView: "auto",
    // initialSlide: 3,
    spaceBetween: 30,
    // centeredSlides: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 20,
        freeMode: true,
      },
      // when window width is >= 641px
      641: {
        spaceBetween: 30
      },
      // when window width is >= 1281px
      1281: {
        spaceBetween: 30,
        freeMode: false,
      },
    }
  });
}

if (document.querySelectorAll(".js-services-slider").length) {
  servicesSliderInit();
}