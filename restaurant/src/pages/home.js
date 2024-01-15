import '../styles/home.css';
import CoffeeImg from '../assets/coffee.svg';
import DrinksImg from '../assets/drinks.svg'

const createHomepage = function() {
    const homepage = document.createElement('div');
    homepage.id = 'homepage-container';

    const upperLeft = document.createElement('div');
    upperLeft.classList.add('upper-left');
    const upperRight = document.createElement('div');
    upperRight.classList.add('upper-right');
    const lowerLeft = document.createElement('div');
    lowerLeft.classList.add('lower-left');
    const lowerRight = document.createElement('div');
    lowerRight.classList.add('lower-right');

    const coffeeImg = new Image();
    coffeeImg.src = CoffeeImg;
    coffeeImg.classList.add('food-image')
    upperLeft.append(coffeeImg);

    const drinksImg = new Image();
    drinksImg.src = DrinksImg;
    drinksImg.classList.add('food-image')
    lowerRight.append(drinksImg);

    const rightHeader = document.createElement('h3');
    rightHeader.innerText = 'Great Coffee, Better Staff'
    upperRight.append(rightHeader);

    const leftHeader = document.createElement('h3');
    leftHeader.innerText = 'Join Us For Happy Hour'
    lowerLeft.append(leftHeader);

    const rightBody = document.createElement('p');
    rightBody.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nesciunt commodi molestias consequatur repellendus, veritatis vero. Saepe, ad. Sint amet reprehenderit minus animi excepturi quibusdam, quaerat odio laboriosam commodi neque?';
    upperRight.append(rightBody);

    const leftBody = document.createElement('p');
    leftBody.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nesciunt commodi molestias consequatur repellendus, veritatis vero. Saepe, ad. Sint amet reprehenderit minus animi excepturi quibusdam, quaerat odio laboriosam commodi neque?';
    lowerLeft.append(leftBody);

    homepage.append(upperLeft, upperRight, lowerLeft, lowerRight);

    return homepage;
}
export default createHomepage;