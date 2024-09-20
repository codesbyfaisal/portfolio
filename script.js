const navbarElement = document.querySelector(".navbar");
const navBar = document.querySelector(".navlinks");
const navBarButton = document.querySelector(".navbar-button");
const navBarButtonIcon = document.querySelectorAll(".navbar-button i.fa-solid");
const scrollToTopButton = document.querySelector(".scroll-to-top");

navBarButton.addEventListener("click", () => {

  navBarButtonIcon.forEach(function (icon) {
    icon.classList.toggle("hidden");
  })

  if (!navBar.classList.contains("mobile")) {
    navBar.classList.add("mobile");
  } else {
    navBar.classList.remove("mobile");
  }
});

// Throttle function using chatgpt
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
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
const handleScroll = () => {
  window.scrollY > 150 ? navbarElement.classList.add("scrolled") : navbarElement.classList.remove("scrolled");
  window.scrollY > 300 ? scrollToTopButton.style.opacity = "1" : scrollToTopButton.style.opacity = "0";
};
window.onscroll = throttle(handleScroll, 200);

// scroll to top
[...document.querySelectorAll(".logo"), document.querySelector(".home-link"), scrollToTopButton].forEach((logo) => {
  logo.addEventListener('click', () => {
    window.scrollTo(0, 0);
  })
})

// by chatgpt
document.querySelectorAll('a[data-scroll-to]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.getElementById(this.getAttribute('data-scroll-to'));
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
