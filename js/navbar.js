const nav = document.getElementById('nav');
const toggleMenuOpen = document.getElementById('toggle-menu__open');
const toggleMenuClose = document.getElementById('toggle-menu__close');
const dropdownContent0 = document.getElementById('dropdown__content0');
const dropdownToggle0 = document.getElementById('dropdown__toggle0');
const dropdownContent1 = document.getElementById('dropdown__content1');
const dropdownToggle1 = document.getElementById('dropdown__toggle1');
const mainMenu = document.getElementById('main-menu');

toggleMenuOpen.addEventListener('click', e => {
    nav.classList.toggle('nav--show');
    mainMenu.classList.toggle('main-menu--show');
});

toggleMenuClose.addEventListener('click', e => {
    nav.classList.toggle('nav--show');
    mainMenu.classList.toggle('main-menu--show');
});

dropdownToggle0.addEventListener('click', e => {
    dropdownContent0.classList.toggle('dropdown__content--show');
});

dropdownToggle1.addEventListener('click', e => {
    dropdownContent1.classList.toggle('dropdown__content--show');
});

window.addEventListener('resize',() => {
    if (nav.classList.contains('nav--show')) {
        nav.classList.remove('nav--show');
        mainMenu.classList.remove('main-menu--show');
    }
});