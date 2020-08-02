const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("change-nav", window.scrollY > 0)
})

// -----------

const scrolltoTop = document.getElementById("scroll-to-top");
let dataShow = false;

window.addEventListener("scroll", () => {
    if(window.scrollY > 50 && !dataShow){
        scrolltoTop.setAttribute("data-show", "true");
        dataShow = true;
    }

    if(window.scrollY <= 50 && dataShow){
        scrolltoTop.setAttribute("data-show", "false");
        dataShow = false;
    }
} )

scrolltoTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})