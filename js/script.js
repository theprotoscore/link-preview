const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
console.log(toggleButton, navbarLinks);

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
