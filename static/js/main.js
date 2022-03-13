const menu = document.getElementById("burger-menu");
const navbar = document.getElementById("navigation");

menu.addEventListener("click", () => {
  // Toggle the navigation's active state
  navbar.classList.toggle("active");
})
