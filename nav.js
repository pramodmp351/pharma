const header = document.getElementById("mainHeader");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelectorAll(".mobile-link");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

const toggleMenu = () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.body.style.overflow = mobileMenu.classList.contains("active")
    ? "hidden"
    : "auto";
};

hamburger.addEventListener("click", toggleMenu);
navLinks.forEach((link) => link.addEventListener("click", toggleMenu));
