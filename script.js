const navbarElement = document.querySelector(".navbar");
const navBar = document.querySelector(".navlinks");
const navBarButton = document.querySelector(".navbar-button");
const navBarButtonIcon = document.querySelectorAll(".navbar-button i.fa-solid");

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
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
const handleScroll = () => {
  console.log(window.scrollY);
  if (window.scrollY > 150) {
    navbarElement.classList.add("scrolled");
  } else {
    navbarElement.classList.remove("scrolled");
  }  
};
window.onscroll = throttle(handleScroll, 300);