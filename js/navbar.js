const nav = document.getElementById('nav');
const toggleMenuOpen = document.getElementById('toggle-menu__open');
const toggleMenuClose = document.getElementById('toggle-menu__close');
const mainMenu = document.getElementById('main-menu');

toggleMenuOpen.addEventListener('click', e => {
    nav.classList.toggle('nav--show');
    mainMenu.classList.toggle('main-menu--show');
});

toggleMenuClose.addEventListener('click', e => {
    nav.classList.toggle('nav--show');
    mainMenu.classList.toggle('main-menu--show');
});

window.addEventListener('resize',() => {
    if (nav.classList.contains('nav--show')) {
        nav.classList.remove('nav--show');
        mainMenu.classList.remove('main-menu--show');
    }
});