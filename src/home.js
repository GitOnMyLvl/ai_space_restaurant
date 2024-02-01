import Restaurant from './restaurant.png';

function generateHome() {
    let content = document.getElementById('content');
    let home = document.createElement('div');
    home.classList.add('home');
    let heading = document.createElement('h1');
    let image = document.createElement('img');
    let text = document.createElement('p');
    heading.textContent = "Cosmic Gastronova";
    image.src = Restaurant;
    image.alt = "Restaurant";
    text.textContent = `Welcome to "Cosmic Gastronova," an exquisite dining establishment nestled on the surreal landscapes of an uncharted alien planet. This avant-garde restaurant transcends the boundaries of earthly dining, offering patrons an unparalleled gastronomic journey through the cosmos.

    As you step through the transparent entryway, the majesty of the extraterrestrial scenery unfolds before your eyes. Walls made of crystalline materials reveal panoramic views of celestial landscapes, showcasing otherworldly flora and fauna dancing in harmony with the cosmic tides. Luminescent pathways guide you to your table, where uniquely shaped chairs await your presence.
    
    The interior of Cosmic Gastronova reflects the rich cultural tapestry of the alien inhabitants, with architectural marvels that seem to defy gravity and mesmerizing ambient lighting that shifts through the hues of distant galaxies. Soft, ambient music, composed from the harmonic frequencies of celestial bodies, sets the mood for an unforgettable dining experience.
    
    The menu at Cosmic Gastronova is a symphony of flavors inspired by the far reaches of the cosmos. Culinary artisans craft dishes with ingredients sourced from distant planets, creating a fusion of tastes and textures that defy earthly conventions. From the ethereal glow of "Galactic Nebula Noodles" to the gravitational allure of "Quasar-infused Ice Crystals," each dish is a masterpiece that transports diners to uncharted realms of culinary delight.
    
    Our stellar service team, clad in attire reminiscent of intergalactic explorers, guides you through the celestial menu, ensuring a seamless and delightful dining experience. The Cosmic Gastronova sommelier curates an exceptional selection of cosmic elixirs and interstellar wines to complement your gastronomic journey.
    
    Whether you are a discerning galactic traveler or a curious terrestrial explorer, Cosmic Gastronova invites you to embark on a culinary odyssey beyond the stars. Immerse yourself in the cosmic ambiance, savor the flavors of the cosmos, and discover a universe of unparalleled dining at this extraordinary intersection of gastronomy and interstellar elegance.`;
    home.appendChild(heading);
    home.appendChild(image);
    home.appendChild(text);
    return home;
}

export default generateHome;