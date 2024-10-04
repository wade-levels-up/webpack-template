import { createDOMElement } from './elementFactory';

import supremePizzaImg from '../assets/supreme.png';
import hawaiianPizzaImg from '../assets/hawaiian.png';
import meatloversPizzaImg from '../assets/meatlovers.png';
import pasta1 from '../assets/pasta1.jpg';

class MenuItem {
    constructor(name, desc, img, price) {
        this.name = name;
        this.desc = desc;
        this.img = img;
        this.price = `$${price}`;
    }
}

const pizza_supreme = new MenuItem('Supreme', 'Pepperoni, capsicum, onions, mushrooms, olives and cheese are all piled on for unbeatably hearty slices.', supremePizzaImg, 24);
const pizza_hawaiian = new MenuItem('Hawaiian', 'Combining pineapple, cheese, and ham, Hawaiian pizza is sweet, salty, and cheesy all in one bite.', hawaiianPizzaImg, 24);
const pizza_meatlovers = new MenuItem(`PaPa's Meatbol Sooprem`, `Fully loaded with pepperoni, Italian sausage, ham, bacon, seasoned pork & beef plus Luigi's special sauce`, meatloversPizzaImg, 24);
const pasta_mamas = new MenuItem(`MaMa's Pomodoro Cheez`, `Penne smothered in juicy vine-ripened roma tomatos and Mama's special triple-cheese entente`, pasta1, 19);

const menuArray = [pizza_supreme, pizza_hawaiian, pizza_meatlovers, pasta_mamas];

export function renderMenu() {

    const mainContent = document.querySelector('#content');
    mainContent.textContent = "";

    const menuContent = createDOMElement('div', '', 'class', 'container');

    const title = createDOMElement('h2', 'Menu');
    const para = createDOMElement('p', `Pizzas available in small, medium and large sizes. Please feel free to advise us of any dietary requirements`);
    const menuContainer = createDOMElement('div', '', 'class', 'menuContainer');
    
    for (let item of menuArray) {
        let menuCard = createDOMElement('div', '', 'class', 'menuCard');
        menuCard.appendChild(createDOMElement('h3', item.name));
        menuCard.appendChild(createDOMElement('p', item.desc));
        menuCard.appendChild(createDOMElement('img', '', 'src', item.img));
        menuCard.appendChild(createDOMElement('p', item.price));
        menuContainer.appendChild(menuCard);
    }

    const childElements = [title, para, menuContainer];
    for (let el of childElements) { menuContent.appendChild(el); }
    mainContent.appendChild(menuContent)
    
};