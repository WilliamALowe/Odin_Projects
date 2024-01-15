import './styles/reset.css';
import './styles/general.css'

import createHeader from './pages/header';
import createMain from './pages/main';

console.log('dev environment is working... test');

// function component() {
//     const element = document.createElement('div');
//     element.innerHTML = 'Hello, this is some text';

//     return element;
// }

// const content = document.querySelector('#content');
// content.append(component());
 const content = document.querySelector('#content');
 const header = createHeader();
 const main = createMain();

 content.appendChild(header);
 content.appendChild(main);