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

