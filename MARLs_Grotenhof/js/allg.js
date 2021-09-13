var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  }
  else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach
  (
    function (menuLink) {
      menuLink.addEventListener("click", toggleMenu)
    }
  )
// https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 5;
let next = 1;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 5 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }

  if (next == 6) {
    next = 0;
  }

  if (prev == -1) {
    prev = 5;
  }

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
  if (prev == -1 || next == 1) {
    document.getElementById("Emma").style.display = "none";
    document.getElementById("Heiner").style.display = "block";
    document.getElementById("Lena").style.display = "none";
  }
  if (prev == 0 || next == 2) {
    document.getElementById("Heiner").style.display = "none";
    document.getElementById("Lena").style.display = "block";
    document.getElementById("Heinrich").style.display = "none";
  }
  if (prev == 1 || next == 3) {
    document.getElementById("Lena").style.display = "none";
    document.getElementById("Heinrich").style.display = "block";
    document.getElementById("Marianne").style.display = "none";
  }
  if (prev == 2 || next == 4) {
    document.getElementById("Heinrich").style.display = "none";
    document.getElementById("Marianne").style.display = "block";
    document.getElementById("Jörg").style.display = "none";
  }
  if (prev == 3 || next == 5) {
    document.getElementById("Marianne").style.display = "none";
    document.getElementById("Jörg").style.display = "block";
    document.getElementById("Emma").style.display = "none";
  }
  if (prev == 4 || next == 6) {
    document.getElementById("Jörg").style.display = "none";
    document.getElementById("Emma").style.display = "block";
    document.getElementById("Heiner").style.display = "none";
  }

}
// https://codepen.io/YousifW/pen/LKBxZX

var btnTexta = document.getElementById("myBtna");
btnTexta.addEventListener("click", () => {
  var dotsa = document.getElementById("dotsa");
  var moreTexta = document.getElementById("morea");
  if (dotsa.style.display === "none") {
    dotsa.style.display = "initial";
    btnTexta.innerHTML = "mehr";
    moreTexta.style.display = "none";
  } else {
    dotsa.style.display = "none";
    btnTexta.innerHTML = "weniger";
    moreTexta.style.display = "block";
  }
});

var btnTextb = document.getElementById("myBtnb");
btnTextb.addEventListener("click", () => {
  var dotsb = document.getElementById("dotsb");
  var moreTextb = document.getElementById("moreb");

  if (dotsb.style.display === "none") {
    dotsb.style.display = "initial";
    btnTextb.innerHTML = "mehr";
    moreTextb.style.display = "none";
  } else {
    dotsb.style.display = "none";
    btnTextb.innerHTML = "weniger";
    moreTextb.style.display = "block";
  }
});

var btnTextc = document.getElementById("myBtnc");
btnTextc.addEventListener("click", () => {
  var dotsc = document.getElementById("dotsc");
  var moreTextc = document.getElementById("morec");
  var btnTextc = document.getElementById("myBtnc");

  if (dotsc.style.display === "none") {
    dotsc.style.display = "initial";
    btnTextc.innerHTML = "mehr";
    moreTextc.style.display = "none";
  } else {
    dotsc.style.display = "none";
    btnTextc.innerHTML = "weniger";
    moreTextc.style.display = "block";
  }
});

var btnTextd = document.getElementById("myBtnd");
btnTextd.addEventListener("click", () => {
  var dotsd = document.getElementById("dotsd");
  var moreTextd = document.getElementById("mored");
  var btnTextd = document.getElementById("myBtnd");

  if (dotsd.style.display === "none") {
    dotsd.style.display = "initial";
    btnTextd.innerHTML = "mehr";
    moreTextd.style.display = "none";
  } else {
    dotsd.style.display = "none";
    btnTextd.innerHTML = "weniger";
    moreTextd.style.display = "block";
  }
});
//https://www.w3schools.com/howto/howto_js_read_more.asp

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//https://www.w3schools.com/howto/howto_js_slideshow.asp