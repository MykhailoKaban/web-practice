// Burger menu
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

console.log('FutureTech — project started');
