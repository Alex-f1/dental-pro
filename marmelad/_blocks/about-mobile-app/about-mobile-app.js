function aboutMobileAppAccordion() {
  const itemInfo = document.querySelectorAll(".js-about-mobile-app-item");

  itemInfo.forEach(function (item) {
    item.addEventListener("click", function (event) {
      this.classList.toggle("_is-active");
    })
  });
}


if (document.querySelectorAll(".js-about-mobile-app-item").length) {
  aboutMobileAppAccordion();
}