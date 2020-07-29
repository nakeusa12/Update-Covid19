const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("change-nav", window.scrollY > 0)
})

