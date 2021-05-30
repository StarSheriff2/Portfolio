function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var prevScrollpos = window.pageYOffset;
var navbarMobile = document.querySelector(".navbar")
var navbarWrapper = document.querySelector(".nav-wrapper")
const desktopViewport = window.matchMedia('(min-width: 768px)')

function navbarEffect() {
  var nav = desktopViewport.matches? navbarWrapper: navbarMobile;
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    //navbarMobile.style.top = "0";
    //navbarMobile.classList.add("nav-wrapper-scroll-class");
    nav.style.top = "0";
    nav.classList.add("nav-wrapper-scroll-class");
    if (window.scrollY == 0) {
      nav.classList.remove("nav-wrapper-scroll-class");
     }
  } else {
    //navbarMobile.style.top = "-50px";
    nav.style.top = `-${nav.getBoundingClientRect().height}px`
    nav.classList.remove("nav-wrapper-scroll-class");
  }
  prevScrollpos = currentScrollPos;
}

//window.addEventListener("scroll", navbarEffect());

//function myFunc(event) { console.log('Scrolling...'); }

window.addEventListener('scroll', (_) => navbarEffect());
