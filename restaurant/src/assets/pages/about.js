function createAbout() {
    const about = document.createElement('div');
    about.setAttribute('id', 'about-container');
    about.textContent = 'about';

    return about;
}
function loadAbout() {
    const main = document.getElementById('main');

    main.innerHTML = '';
    main.append(createAbout());
}
export default loadAbout;