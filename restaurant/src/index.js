import './styles/reset.css';
import './styles/general.css'

import createNavbar from './pages/navbar';
import createHome from './pages/home';

console.log('dev environment is working... test');

// function component() {
//     const element = document.createElement('div');
//     element.innerHTML = 'Hello, this is some text';

//     return element;
// }

// const content = document.querySelector('#content');
// content.append(component());
 const content = document.querySelector('#content');
 const navbar = createNavbar();

 content.appendChild(navbar);
