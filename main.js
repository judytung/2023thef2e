import './assets/css/main.css';
import Swiper, {Autoplay} from 'swiper';
import 'swiper/css';

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


Swiper.use([Autoplay]);
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {delay: 2500},
});
