import imgApple from "./images/menu/apple.png";
import imgOrange from "./images/menu/orange.png";
import imgWatermelon from "./images/menu/watermelon.png";

function createMenuItem(name, price, description, imagePath) {
  const image = document.createElement("img");
  image.src = imagePath;

  const priceText = document.createElement("p");
  priceText.classList.add("price");
  priceText.textContent = `$${price}`;

  const leftContainer = document.createElement("div");
  leftContainer.classList.add("left-container");
  leftContainer.append(image, priceText);

  const itemName = document.createElement("p");
  itemName.classList.add("name");
  itemName.textContent = name;

  const itemDescription = document.createElement("p");
  itemDescription.classList.add("description");
  itemDescription.textContent = description;

  const itemInfo = document.createElement("div");
  itemInfo.append(itemName, itemDescription);

  const container = document.createElement("div");
  container.classList.add("item");
  container.append(leftContainer, itemInfo);

  return container;
}

const menu = document.createElement("div");
menu.classList.add("menu");

// Menu
const apple = createMenuItem("Apple Smith", 2.55, "A is for Apple", imgApple);

const orange = createMenuItem(
  "Not the Color Orange",
  2.0,
  "Orange you glad you can understand these puns?",
  imgOrange
);

const watermelon = createMenuItem(
  "Watermelon Sugar",
  4.55,
  "Definitely not a drymelon.",
  imgWatermelon
);

const menuItems = [apple, orange, watermelon];
menu.append(...menuItems);

export { menu };
