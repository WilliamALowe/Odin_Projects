function createMain() {
    const main = document.createElement('main');
    main.classList.add('main-content')
    
    return main;
}

function loadMain() {
    const content = document.getElementById('content');
    content.appendChild(createMain());
}
export default loadMain;