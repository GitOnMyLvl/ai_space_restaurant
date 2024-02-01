import Chef from '../src/chef.png';

var contactInfo = {
    address: "1234 Milky Way, Andromeda Galaxy",
    phone: "17%4-8€0-5§5-12#4",
    email: "chef.galactica@cosmicgastronova.com",
};

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateContact(){
    let contact = document.createElement('div');
    contact.classList.add('contact');
    let heading = document.createElement('h1');
    let image = document.createElement('img');
    let chef = document.createElement('p');
    let contactDetails = document.createElement('ul');
    heading.textContent = "Contact Us";
    image.src =Chef;
    image.alt = "Chef";
    chef.textContent = `Chef Galactica Nova`;
    chef.style.fontWeight = "bold";
    for(var key in contactInfo){
        let item = document.createElement('li');
        item.innerHTML = "<b>" + capitalize(key) + ":</b> " + contactInfo[key];
        contactDetails.appendChild(item);
    }
    contact.appendChild(heading);
    contact.appendChild(image);
    contact.appendChild(chef);
    contact.appendChild(contactDetails);
    return contact;
}

export default generateContact;