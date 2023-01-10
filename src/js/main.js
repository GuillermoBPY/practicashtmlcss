const body = document.querySelector("body")
const loading = document.querySelector(".loading");

setTimeout(function () {
  loading.style.display = "none";
  body.style.overflow = "visible";
}, 3000);