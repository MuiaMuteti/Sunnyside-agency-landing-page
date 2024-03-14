let menu = document.querySelector("nav ul");
let menuBtn = document.querySelector("nav .menu");
let menuLinks = document.querySelectorAll("nav li");

menuBtn.addEventListener('click', e => {
    menu.classList.toggle('menu-open');
});

menuLinks.forEach(elem => {
    elem.addEventListener('click', e => {
        menu.classList.toggle('menu-open');
    });
});