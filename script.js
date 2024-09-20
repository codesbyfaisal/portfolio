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

window.onscroll = () => {
  console.log(window.scrollY);
  if (window.scrollY > 150) {
    navbarElement.classList.add("scrolled");
  } else {
    navbarElement.classList.remove("scrolled");
  }  
}