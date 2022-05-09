let menuToggle = document.querySelector('.menu-toggle');
let menu = document.querySelector('.js-menu');
let menuClose = document.querySelector('.menu-close');
console.log(menuToggle)



function showMenu() {
    menu.classList.add('is-show');    
}

// hideMenu => menu.classList.remove('is-show');
function hideMenu() {
    menu.classList.remove('is-show');
}

menuToggle.addEventListener('click',showMenu);
menuClose.addEventListener('click', hideMenu);