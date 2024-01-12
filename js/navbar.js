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


const dropdownList0 = document.getElementById('dropdown-list0');
const dropdownToggle0 = document.getElementById('dropdown-toggle0');
const dropdownList1 = document.getElementById('dropdown-list1');
const dropdownToggle1 = document.getElementById('dropdown-toggle1');

dropdownToggle0.addEventListener('click', e => {
    dropdownList0.classList.toggle('dropdown-list--show');
    dropdownToggle0.querySelector('.fa-angle-down').classList.toggle('rotated');
    imgCloseChecker();
});
dropdownToggle1.addEventListener('click', e => {
    dropdownList1.classList.toggle('dropdown-list--show');
    dropdownToggle1.querySelector('.fa-angle-down').classList.toggle('rotated');
    imgCloseChecker();
});

function imgCloseChecker() {
    // Verifica si ambos toggles están activados
    if (dropdownList0.classList.contains('dropdown-list--show') || dropdownList1.classList.contains('dropdown-list--show')) {
        // Asegura que la clase esté presente para ocultar la imagen
        nav.classList.add('nav-logo--hidden');
    } else {
        // Asegura que la clase esté ausente para mostrar la imagen
        nav.classList.remove('nav-logo--hidden');
    }
}

window.addEventListener('resize',() => {
    if (nav.classList.contains('nav--show')) {
        nav.classList.remove('nav--show');
        mainMenu.classList.remove('main-menu--show');
    }
});