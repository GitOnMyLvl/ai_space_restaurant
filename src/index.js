import './style.css';
import generateHome from './home.js';
import generateContact from './contact.js';
import generateMenu from './menu.js';
import ButtonLogic from './buttonLogic.js';
import Logo from './logo.png';


document.addEventListener('DOMContentLoaded', function () {
    const buttonLogic = new ButtonLogic();

    function component() {
        const element = document.createElement('div');
        const header = document.createElement('header');
        const nav = document.createElement('nav');
        const left = document.createElement('div');
        const right = document.createElement('div');
        const logo = document.createElement('div');
        const logoImage = document.createElement('img');
        const logoText = document.createElement('h1');
        const homeBtn = document.createElement('button');
        const menuBtn = document.createElement('button');
        const contactBtn = document.createElement('button');
        const content = document.createElement('div');

        content.id = 'content';
        left.classList.add('left');
        right.classList.add('right');
        logo.classList.add('logo');
        logoImage.src = Logo;
        logoImage.alt = 'Cosmic Gastronova';
        logoText.textContent = 'Cosmic Gastronova';
        homeBtn.textContent = 'Home';
        menuBtn.textContent = 'Menu';
        contactBtn.textContent = 'Contact';
        homeBtn.id = 'home';
        menuBtn.id = 'menu';
        contactBtn.id = 'contact';
        homeBtn.onclick = () => {
            buttonLogic.handleClick(homeBtn, generateHome());
        };
        menuBtn.onclick = () => {
            buttonLogic.handleClick(menuBtn, generateMenu());
        };
        contactBtn.onclick = () => {
            buttonLogic.handleClick(contactBtn, generateContact());
        };

        logo.appendChild(logoImage);
        logo.appendChild(logoText);
        left.appendChild(logo);
        right.appendChild(homeBtn);
        right.appendChild(menuBtn);
        right.appendChild(contactBtn);
        
        nav.appendChild(left);
        nav.appendChild(right);
        header.appendChild(nav);
        element.appendChild(header);
        element.appendChild(content);

        return element;
    }

    document.body.appendChild(component());
    document.querySelector('#contact').click();
});


