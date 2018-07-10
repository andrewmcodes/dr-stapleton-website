"use strict";

document.addEventListener("DOMContentLoaded", function(){
  var menu = document.getElementById("js-nav-menu")
  var closeElements = document.getElementsByClassName("js-menu-dismiss")
  for (var i=0; i< closeElements.length; i++){
    closeElements[i].addEventListener("click", function(){
      if(!menu.classList.contains("hidden")){
        menu.classList.add("hidden");
      }
    })
  }
  document.getElementById("js-nav-menu-button").addEventListener("click", toggleMenu)
});

function toggleMenu() {
  document.getElementById("js-nav-menu").classList.toggle("hidden");
}

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x;
    x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 7000);
}
