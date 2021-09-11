var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() 
{
  if (menu.classList.contains("showMenu")) 
  {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } 
  else 
  {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach
(
  function (menuLink) 
  {
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
      if (prev == -1 || next == 1)
      {
        document.getElementById("Emma").style.display="none";
        document.getElementById("Heiner").style.display="block";
        document.getElementById("Lena").style.display="none";
      }
      if (prev == 0|| next == 2)
      {
        document.getElementById("Heiner").style.display="none";
        document.getElementById("Lena").style.display="block";
        document.getElementById("Heinrich").style.display="none";
      }
      if (prev == 1 || next == 3)
      {
        document.getElementById("Lena").style.display="none";
        document.getElementById("Heinrich").style.display="block";
        document.getElementById("Marianne").style.display="none";
      }
      if (prev == 2 || next == 4)
      {
        document.getElementById("Heinrich").style.display="none";
        document.getElementById("Marianne").style.display="block";
        document.getElementById("Jörg").style.display="none";
      }
      if (prev == 3 || next == 5)
      {
        document.getElementById("Marianne").style.display="none";
        document.getElementById("Jörg").style.display="block";
        document.getElementById("Emma").style.display="none";
      }
      if (prev == 4 || next == 6)
      {
        document.getElementById("Jörg").style.display="none";
        document.getElementById("Emma").style.display="block";
        document.getElementById("Heiner").style.display="none";
      }
    
    }
    // https://codepen.io/YousifW/pen/LKBxZX