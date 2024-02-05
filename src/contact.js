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
    let info = document.createElement('div');
    let image = document.createElement('img');
    let imageAndInfo = document.createElement('div');
    let chef = document.createElement('p');
    let contactDetails = document.createElement('ul');
    heading.textContent = "Contact Us";
    info.classList.add('info');
    image.src =Chef;
    image.alt = "Chef";
    imageAndInfo.classList.add('imageAndInfo');
    chef.textContent = `Chef Galactica Nova`;
    chef.style.fontWeight = "bold";
    for(var key in contactInfo){
        let item = document.createElement('li');
        item.innerHTML = "<b>" + capitalize(key) + ":</b> " + contactInfo[key];
        contactDetails.appendChild(item);
    }
    info.appendChild(chef);
    info.appendChild(contactDetails);
    imageAndInfo.appendChild(info);
    imageAndInfo.appendChild(image);
    contact.appendChild(heading);
    contact.appendChild(imageAndInfo);
    return contact;
}

export default generateContact;