import loadHome from './home';
import loadAbout from './about';
import loadMenu from './menu';

function createNavbar() {
    const navbar = document.createElement('nav');

    const navBtns = document.createElement('div');
    navBtns.classList.add('nav-buttons');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = 'About';
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';

    homeBtn.addEventListener('click', () => {
        loadHome();
    });
    aboutBtn.addEventListener('click', () => {
        loadAbout();
    });
    menuBtn.addEventListener('click', () => {
        loadMenu();
    })

    navBtns.append(homeBtn, aboutBtn, menuBtn);

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = `Will's Burgers & Beer`;

    const otherNav = document.createElement('div');
    otherNav.classList.add('other-nav');

    const reservationBtn = document.createElement('button');
    reservationBtn.textContent = 'Reservations';

    otherNav.appendChild(reservationBtn);

    navbar.append(navBtns, logo, otherNav);
    return navbar;
}

function createMain() {
    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    return main;
}

function initializeApp() {
    const content = document.getElementById("content");

    content.append(createNavbar(), createMain());
    loadHome();
}
export default initializeApp;