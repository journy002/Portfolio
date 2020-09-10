'use strict'

// Make navbar transparent when it is on the top
// 제일 위 목록 고정 상단바 밑 배경 만드는 코드.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
})

// Handle click on "contact me" button on home
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', () => {
    scrollIntoView('#contact');
});

// 중복되는 스크롤 코드가 있기에 스크롤 함수를 하나 만들었다.
// (selector)를 넣어주면 scrollIntoView() <- 괄호안에 원하는 셀렉터를 주면 된다.
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}
