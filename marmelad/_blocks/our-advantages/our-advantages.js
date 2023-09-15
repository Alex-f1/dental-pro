function ourAdvantagesSliderInit() {
  const ourAdvantagesSlider = new Swiper(".js-our-advantages-slider", {
    slidesPerView: "auto",
    spaceBetween: 47,
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
        spaceBetween: 47,
        freeMode: false,
      },
    }
  });
}

if (document.querySelectorAll(".js-our-advantages-slider").length) {
  ourAdvantagesSliderInit();
}