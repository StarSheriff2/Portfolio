function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.querySelector(".header").style.filter = "blur(8px)";
  document.querySelector("body").style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.querySelector(".header").style.filter = "none";
  document.querySelector("body").style.overflow = "scroll";
}
