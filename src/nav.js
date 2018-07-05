document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("js-nav-menu-button").addEventListener("click", toggleMenu)
});

function toggleMenu() {
  document.getElementById("js-nav-menu").classList.toggle("hidden");
}
