const navigationButtons = document.getElementById('navigation-buttons')

function openBurger() {
    navigationButtons.style.visibility = 'visible'
}

function closeBurger() {
    navigationButtons.style.visibility = 'hidden'
}

const burgerButton = document.getElementById('burger-button');
const closeBurgerButton = document.getElementById('close-burger');

burgerButton.addEventListener('click', openBurger);
closeBurgerButton.addEventListener('click', closeBurger);