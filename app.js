const menu = document.querySelector("#menu");
const nav = document.querySelector(".nav-menu")

menu.addEventListener("click",()=> {
    menu.classList.toggle(".nav-menu")
    nav.classList.toggle("active");
    
})