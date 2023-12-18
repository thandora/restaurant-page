import restaurantImg from "./restaurant.png";

const logo = document.createElement("img");
logo.src = restaurantImg;

const logoAttrib = document.createElement("a");
logoAttrib.setAttribute("href", "https://www.flaticon.com/free-icons/restaurant");
logoAttrib.setAttribute("title", "restaurant icons");
logoAttrib.textContent = "Icon by Eucalyp - Flaticon";

const logoContainer = document.createElement("div");
logoContainer.classList.add("logo-container");
logoContainer.appendChild(logo);
logoContainer.appendChild(logoAttrib);

const restaurantMessage = document.createElement("p");
restaurantMessage.textContent =
  "Welcome to Restaurant City's homepage! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quae voluptatum, odit deleniti nesciunt voluptas praesentium.";

const homepage = document.createElement("div");
homepage.classList.add("homepage");
homepage.appendChild(logoContainer);
homepage.appendChild(restaurantMessage);

export { homepage };
