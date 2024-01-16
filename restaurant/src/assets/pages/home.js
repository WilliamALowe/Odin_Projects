import BurgerImg from '../images/burger.svg';
import DrinksImg from '../images/drinks.svg';

function createHome() {
    const home = document.createElement('div');
    home.setAttribute('id', 'home-container');

    const leftContainer = document.createElement('div');
    leftContainer.classList.add('left');
    const middleContainer = document.createElement('div');
    middleContainer.classList.add('middle');
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('right');

    const leftHeader = document.createElement('h3');
    leftHeader.textContent = 'Great Food!';
    const leftPara = document.createElement('p');
    leftPara.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque deserunt hic exercitationem cum maiores temporibus? Culpa ad recusandae autem suscipit dolores tempora delectus, odit modi illo inventore earum dicta!'

    leftContainer.append(leftHeader, leftPara);

    const middleHeader = document.createElement('h3');
    middleHeader.textContent = 'Great Drinks!';
    const middlePara = document.createElement('p');
    middlePara.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque deserunt hic exercitationem cum maiores temporibus? Culpa ad recusandae autem suscipit dolores tempora delectus, odit modi illo inventore earum dicta!'

    middleContainer.append (middleHeader, middlePara);

    const rightHeader = document.createElement('h3');
    rightHeader.textContent = 'Great Vibes!';
    const rightPara = document.createElement('p');
    rightPara.textContent = 'Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Laboriosam doloremque deserunt hic exercitationem cum maiores temporibus? Culpa ad recusandae autem suscipit dolores tempora delectus, odit modi illo inventore earum dicta!'

    rightContainer.append(rightHeader, rightPara);

    const burgerImage = new Image();
    burgerImage.classList.add('burger-image');
    burgerImage.src = BurgerImg;

    const drinksImage = new Image();
    drinksImage.classList.add('drinks-image');
    drinksImage.src = DrinksImg;

    home.append(leftContainer, middleContainer, rightContainer, burgerImage, drinksImage);

    return home;
}
function loadHome() {
    const main = document.getElementById('main');

    main.innerHTML = '';
    main.append(createHome());
}
export default loadHome;