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


// Navbar Scroll Effect 
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

  // Collapse navbar when any nav-link is clicked (for mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const toggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      
      // Collapse only if toggler is visible (mobile screen)
      if (window.getComputedStyle(toggler).display !== 'none') {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });


