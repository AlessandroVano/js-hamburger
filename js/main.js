// Mostrare / nascondere menù principale
const hamburger = document.querySelector('.header-right > a');
console.log('header-right');

const hamburgerMenu = document.querySelector('.hamburger-menu');
console.log('Hamburger-menu');


//Apertura menù hamburger

hamburger.addEventListener('click', function(){
    hamburgerMenu.classList.add('active');
    console.log('active');
});