const navbarElement = document.querySelector(".navbar");
const navBar = document.querySelector(".navlinks");
const navbarButton = document.querySelector(".navbar-button");
const navbarButtonIcons = document.querySelectorAll(".navbar-button i.fa-solid");
const scrollToTopButton = document.querySelector(".scroll-to-top");

// Toggle mobile navigation
navbarButton.addEventListener("click", () => {
  navbarButtonIcons.forEach(icon => icon.classList.toggle("hidden"));
  navBar.classList.toggle("mobile");
});

// Throttle function
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Handle scroll events
const handleScroll = () => {
  navbarElement.classList.toggle("scrolled", window.scrollY > 150);
  scrollToTopButton.style.opacity = window.scrollY > 300 ? "1" : "0";
};

// Attach scroll event with throttling
window.onscroll = throttle(handleScroll, 200);

// Scroll to top functionality
const scrollToTopElements = [...document.querySelectorAll(".logo"), document.querySelector(".home-link"), scrollToTopButton];
scrollToTopElements.forEach(element => {
  element.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[data-scroll-to]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.getElementById(this.getAttribute('data-scroll-to'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});