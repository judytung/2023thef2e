import './assets/css/main.css';

const navToggle = document.querySelector('#nav-toggle');
const nav = document.querySelector('#nav');
const close = document.querySelector('#close');

navToggle.addEventListener('click', () => {
    nav.classList.remove('invisible');
    nav.classList.add('visible');
});

close.addEventListener('click', ()=> {
    nav.classList.add('invisible');
    nav.classList.remove('visible');
});

const swiper = new Swiper(".mySwiper", {});