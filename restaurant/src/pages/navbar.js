import '../styles/navbar.css';
import FacebookIcon from '../assets/facebook-icon.svg';
import InstagramIcon from '../assets/instagram-icon.svg';

const createNavbar = function() {
    const navbar = document.createElement('nav');

    const leftNav = document.createElement('div');
    leftNav.id = 'left-nav';
    const centerNav = document.createElement('div');
    centerNav.id = 'center-nav';
    const rightNav = document.createElement('div');
    rightNav.id = 'right-nav';

    const homeBtn = document.createElement('button');
    homeBtn.id = 'home-button';
    homeBtn.textContent = 'Home';
    const menuBtn = document.createElement('button');
    menuBtn.id = 'menu-button';
    menuBtn.textContent = 'Menu';
    const aboutBtn = document.createElement('button');
    aboutBtn.id = 'about-button';
    aboutBtn.textContent = 'About'

    leftNav.append(homeBtn);
    leftNav.append(menuBtn);
    leftNav.append(aboutBtn);

    centerNav.textContent = 'Example Name';

    const fbIcon = new Image();
    fbIcon.src = FacebookIcon;
    fbIcon.classList.add('social-link');
    const igIcon = new Image();
    igIcon.src = InstagramIcon;
    igIcon.classList.add('social-link');

    const reserveBtn = document.createElement('button');
    reserveBtn.id = 'reserve-button';
    reserveBtn.innerText = 'Reservations';

    rightNav.append(fbIcon);
    rightNav.append(igIcon);
    rightNav.append(reserveBtn);

    navbar.append(leftNav);
    navbar.append(centerNav);
    navbar.append(rightNav);

    return navbar;
}
export default createNavbar;