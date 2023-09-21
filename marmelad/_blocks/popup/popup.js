const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  catchFocus: true,
  waitTransitions: true,
  closeOnEsc: false,
  afterClose: function (modal) {
    document.querySelector(".js-video").setAttribute("src", "");
  },
});

