import MenuCard from './menuCard';
import Drinks from './drinks.png';
import Puffs from './puffs.png';
import Salad from './salad.png';
import Steak from './steak.png';
import Sushi from './sushi.png';

const menuItems = [
    {
        name: 'Celestial Harmony Sushi Rolls',
        price: 18.99,
        description: 'Embark on a culinary journey with our Celestial Harmony Sushi Rolls. Meticulously crafted using alien seaweed, comet-spiced rice, asteroid avocado, and starfruit soy sauce, each roll is a symphony of tastes that harmonize in your mouth. A celestial dance of ingredients for sushi enthusiasts and intergalactic explorers alike.',
        image: Sushi
    },
    {
        name: 'Asteroid Grilled Quasar Steaks',
        price: 29.99,
        description: 'Savor the bold flavors of the cosmos with our Asteroid Grilled Quasar Steaks. Marinated in a blend of exotic spices sourced from distant planets, these succulent steaks are grilled to perfection, offering a taste of the celestial. A carnivorous delight that transcends the boundaries of earthly grilling.',
        image: Steak
    },
    {
        name: 'Gravitational Spherules Salad',
        price: 14.99,
        description: 'Immerse your taste buds in a symphony of textures with our Gravitational Spherules Salad. Marvel at the suspended spherules, defying gravity, each bursting with the crisp essence of alien greens, crunchy celestial seeds, and a drizzle of tangy starfruit vinaigrette. A gravitational dance of flavors that transcends earthly salads.',
        image: Salad
    },
    {
        name: 'Crystalline Stardust Puffs',
        price: 9.99,
        description: 'Indulge in the ethereal sweetness of our Crystalline Stardust Puffs. Delicate orbs of sugary enchantment, each dusted with edible stardust, these cosmic confections melt on your palate, revealing layers of interstellar flavors. A dessert that sparkles with the magic of distant galaxies.',
        image: Puffs
    },
    {
        name: 'Cosmic Elixir Eruption',
        price: 7.99,
        description: 'Experience a sensory eruption with our Cosmic Elixir. This visually captivating beverage defies gravity, featuring vibrant liquids that burst with intergalactic flavors. A mix of rare fruits, celestial nectars, and effervescent bubbles, this elixir promises a refreshing journey through the cosmic spectrum.',
        image: Drinks
    },
];

function generateMenu(){
    let content = document.getElementById('content');
    let menu = document.createElement('div');
    menu.classList.add('menu');
    menuItems.forEach(item => {
        let card = new MenuCard(item.name, item.price, item.description, item.image);
        menu.appendChild(card.createCard());
    });
    content.appendChild(menu);
}

export default generateMenu;