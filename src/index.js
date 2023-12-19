import "./style.css";
import { homepage } from "./home";
import { menu } from "./menu";

function createNavbar() {
  const logo = document.createElement("a");
  logo.classList.add("logo");
  logo.textContent = "Restaurant City";
  logo.href = "#";

  const home = document.createElement("a");
  home.classList.add("button");
  home.textContent = "Home";
  home.href = "#";

  const menu = document.createElement("a");
  menu.classList.add("button");
  menu.textContent = "Menu";
  menu.href = "#";

  const nav = document.createElement("div");
  nav.classList.add("nav-links");
  nav.append(home, menu);

  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  navbar.append(logo, nav);

  content.appendChild(navbar);
}

const content = document.querySelector("#content");
createNavbar();
content.appendChild(homepage);
content.appendChild(menu);
