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