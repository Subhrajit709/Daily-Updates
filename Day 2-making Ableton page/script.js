
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const moreBtn = document.getElementById("moreBtn");
const megaMenu = document.getElementById("megaMenu");


menuBtn.addEventListener("click", function () {
  mainNav.classList.toggle("show");
});


moreBtn.addEventListener("click", function () {
  megaMenu.classList.toggle("show");
});


document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    megaMenu.classList.remove("show");
  }
});