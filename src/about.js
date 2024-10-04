import { createDOMElement } from './elementFactory';

export function renderAbout() {

    const mainContent = document.querySelector('#content');
    mainContent.textContent = "";

    const aboutContent = createDOMElement('div', '', 'class', 'container');

    const title = createDOMElement('h2', 'About');
    const about = createDOMElement('p', `Luigi founded his pizza lounge in 2045. He brought his love of pizza from his home in Italy to the heart of Nutropolis city. The pizza lounge became a cozy retreat from the hussle of the busy surrounding city, a place people come to enjoy a warm and hearty meal.`);
    const moreinfo = createDOMElement('p', `Since it's establishment Luigi has added many signature dishes to the menu including the famous 'Green Lui ThinSlice', 'MaMa's Pomodoro Cheez' and 'PaPa's Meatbol Sooprem'.`);
    const childElements = [title, about, moreinfo];

    for (let el of childElements) { aboutContent.appendChild(el); }
    mainContent.appendChild(aboutContent)
    
};