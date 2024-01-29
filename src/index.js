import './style.css';
import generateHome from './home.js';

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
    homeBtn.onclick = generateHome;
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    element.appendChild(header);
    element.appendChild(content);
    return element;
}

document.body.appendChild(component());

