// Navbar scroll color
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const backToTop = document.getElementById("backToTop");

  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
    backToTop.classList.remove("d-none");
  } else {
    navbar.classList.remove("scrolled");
    backToTop.classList.add("d-none");
  }
});
