const menuIcon = document.querySelector('.menu');
const navbar = document.querySelector('nav');
const backdrop = document.getElementById('backdrop');


menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle('icon-x');
    navbar.classList.toggle('open');
    backdrop.classList.toggle('visible');
});

backdrop.addEventListener("click", () => {
    menuIcon.classList.toggle('icon-x');
    navbar.classList.toggle('open');
    backdrop.classList.toggle('visible');
});