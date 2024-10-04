import pizzaLoungImg from '../assets/aldward-castillo-Lys3krd8jck-unsplash.jpg';
import { createDOMElement } from './elementFactory';

export function renderHome() {

    const mainContent = document.querySelector('#content');
    mainContent.textContent = "";

    const homeContent = createDOMElement('div', '', 'class', 'container');

    const title = createDOMElement('h2', 'Home');
    const welcome = createDOMElement('p', `Welcome to Luigi's Pizza Lounge! The best pizza lounge in all of Nutropolis. Please see our menu and about tabs for more information`);
    const image = createDOMElement('img', '', 'src', pizzaLoungImg, 'alt', `Warmly lit long room aligned with tables and chairs for dining`);
    const credit = createDOMElement('a', 'Photo by Aldward Castillo on Unsplash', 'class', 'credit');

    const childElements = [title, welcome, image, credit];

    for (let el of childElements) { homeContent.appendChild(el); }
    mainContent.appendChild(homeContent)
    
};
