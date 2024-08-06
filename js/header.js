const navBar = document.querySelector(".sidebar-cont"), 
      menuBtns = document.querySelectorAll(".bars-icon"),
      overlay = document.querySelector(".sidebar-overlay");
menuBtns.forEach((menuBtns) => {
  menuBtns.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});
overlay.addEventListener("click", () => {
  navBar.classList.remove("open");
});

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})
document.addEventListener("DOMContentLoaded", function() {
  function updateText() {
      const responsiveText = document.querySelector('.nav-title a h1');
      
      if (responsiveText) {
          if (window.matchMedia("(max-width: 450px)").matches) {
              responsiveText.textContent = "CEC";
              responsiveText.style.fontSize = "40px";
          }
      }
  }
  updateText();
  window.addEventListener('resize', updateText);
});

