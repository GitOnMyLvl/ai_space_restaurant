class MenuCard {
  constructor(name, price, description, image) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }

  createCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardImage = document.createElement("img");
    cardImage.src = this.image;
    cardImage.alt = this.name;
    const cardTitle = document.createElement("h3");
    cardTitle.textContent = this.name;
    const cardDescription = document.createElement("p");
    cardDescription.textContent = this.description;
    cardDescription.classList.add("description");
    const cardPrice = document.createElement("p");
    cardPrice.classList.add("price");
    cardPrice.innerHTML = `<b>Price:</b> ${this.price}§`;
    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardPrice);
    return card;
  }
}

export default MenuCard;