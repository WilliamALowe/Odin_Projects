function createMenu() {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu-container');
    menu.textContent = 'menu';

    return menu;
}
function loadMenu() {
    const main = document.getElementById('main');

    main.innerHTML = '';
    main.append(createMenu());
}
export default loadMenu;