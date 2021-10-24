// Mostrare / nascondere menù principale

/* (.header-right > a ho preso il figlio diretto) */
const hamburger = document.querySelector('.header-right > a');
console.log('header-right');

const hamburgerMenu = document.querySelector('.hamburger-menu');
console.log('Hamburger-menu');

const chiusuraHamburger = document.querySelector('.close');
console.log('close');

//Apertura menù hamburger
hamburger.addEventListener('click', function(){
    hamburgerMenu.classList.add('active');
    console.log('active');
});

// Chiusura menù hamburger
chiusuraHamburger.addEventListener('click', function(){
    hamburgerMenu.classList.remove('active');
});