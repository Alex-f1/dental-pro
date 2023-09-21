const onlineChatButton = document.querySelector(".js-online-chat");
const onlineChatOverlay = document.querySelector(".online-chat-overlay");
const html = document.querySelector("html");

onlineChatButton.addEventListener("click", function(event) {
  event.currentTarget.classList.add("_is-active");
  onlineChatOverlay.classList.add("_is-opened");
  html.classList.toggle("_is-overflow-hidden");
}); 

onlineChatOverlay.addEventListener("click", function (event) {
  event.currentTarget.classList.remove("_is-opened");
  onlineChatButton.classList.remove("_is-active");
  html.classList.remove("_is-overflow-hidden");
}); 