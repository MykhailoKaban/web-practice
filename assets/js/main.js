// === BURGER MENU ===
const burger = document.getElementById('burger');
const nav = document.getElementById('main-nav');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
});

// Закрити меню при кліку на посилання
const navLinks = nav.querySelectorAll('a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        burger.classList.remove('active');
        nav.classList.remove('open');
    });
});

// === STICKY HEADER ===
const header = document.getElementById('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// === BLOG TABS ===
const tabBtns = document.querySelectorAll('.tab-btn');

tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        tabBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
    });
});

console.log('FutureTech — project started');
