import '../styles/header.css';

const createHeader = function() {
    const headerContainer = document.createElement("div");
    headerContainer.id = "headerContainer";

    const header = document.createElement("h1");
    header.innerText = 'Example Restaurant'

    const navbar = document.createElement("nav");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add('navButton');
    homeBtn.id = 'homeBtn';
    homeBtn.innerText = 'Home';
    const menuBtn = document.createElement("button");
    menuBtn.classList.add('navButton');
    menuBtn.id = 'menuBtn';
    menuBtn.innerText = 'Menu';
    const aboutBtn = document.createElement("button");
    aboutBtn.classList.add('navButton');
    aboutBtn.id = 'menuBtn';
    aboutBtn.innerText = 'About';

    navbar.append(homeBtn);
    navbar.append(menuBtn);
    navbar.append(aboutBtn);
 
    headerContainer.append(header);
    headerContainer.append(navbar);

    return headerContainer;
}

export default createHeader;