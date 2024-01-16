import '../styles/navbar.css';

function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.textContent = 'navbar';

    return navbar;
}

function loadNavbar() {
    const content = document.getElementById('content');
    content.appendChild(createNavbar());
}
export default loadNavbar;