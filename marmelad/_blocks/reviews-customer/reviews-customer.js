function reviewsCustomerSliderInit() {
  const reviewsCustomerSlider = new Swiper(".js-reviews-customer-slider", {
    slidesPerView: "auto",
    spaceBetween: 50,
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 15,
        freeMode: true,
      },
      // when window width is >= 641px
      641: {
        spaceBetween: 40,
      },
      // when window width is >= 1281px
      1281: {
        spaceBetween: 50,
        freeMode: false,
      },
    }
  });
}

if (document.querySelectorAll(".js-reviews-customer-slider").length) {
  reviewsCustomerSliderInit();
}

const reviewsCustomer = document.querySelectorAll(".js-reviews-customer");
const video = document.querySelector(".js-video");

reviewsCustomer.forEach(function(item) {
  item.addEventListener("click", function(event) {
    const getDataSrc = event.currentTarget.dataset.src;
    video.setAttribute("src", getDataSrc);
  });
});