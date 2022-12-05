const botonNav = document.querySelector(".boton-nav")
const navLinks = document.querySelector(".nav-links")

botonNav.addEventListener("click", () => {
    navLinks.classList.toggle("nav-menu_visible")
} )