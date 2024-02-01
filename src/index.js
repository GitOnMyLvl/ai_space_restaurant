import './style.css';
import generateHome from './home.js';
import generateContact from './contact.js';
import generateMenu from './menu.js';
import ButtonLogic from './buttonLogic.js';

const buttonLogic = new ButtonLogic();

function component() {
    const element = document.createElement('div');
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    const content = document.createElement('div');

    content.id = 'content';
    header.appendChild(nav);
    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact';
    homeBtn.onclick = () => {
        buttonLogic.handleClick(homeBtn, generateHome());
    };
    menuBtn.onclick = () => {
        buttonLogic.handleClick(menuBtn, generateMenu());
    };
    contactBtn.onclick = () => {
       buttonLogic.handleClick(contactBtn, generateContact());
    };
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    element.appendChild(header);
    element.appendChild(content);
    document.addEventListener('DOMContentLoaded', function () {
        const contentElement = document.getElementById('content');
    
        if (contentElement) {
           homeBtn.click();
        } else {
            console.error("Element with id 'content' not found");
        }
    });
    return element;
}



document.body.appendChild(component());


