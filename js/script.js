const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", () => {
    //toogle
    nav.classList.toggle("nav-active");
    //animate links
    /* 
        navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.8s ease forwards ${index / 7 +
          1}s`;
      }
    });
    */
    burger.classList.toggle("toggle");
  });
};

navSlide();
