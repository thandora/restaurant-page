import "./style.css";
import { homepage } from "./home";
import { menu as menupage } from "./menu";

function createNavbar() {
  const logo = document.createElement("a");
  logo.classList.add("logo");
  logo.textContent = "Restaurant City";
  logo.href = "#";

  const home = document.createElement("a");
  home.classList.add("button");
  home.textContent = "Home";
  home.addEventListener("click", () => {
    // Replace active tab with new tab if applicable
    if (menu.classList.contains("active")) {
      content.removeChild(menupage);
      showPage(home, homepage);
      menu.classList.toggle("active");
    }
  });

  const menu = document.createElement("a");
  menu.classList.add("button");
  menu.textContent = "Menu";
  menu.addEventListener("click", () => {
    if (home.classList.contains("active")) {
      // Replace active tab with new tab if applicable
      content.removeChild(homepage);
      showPage(menu, menupage);
      home.classList.toggle("active");
    }
  });

  const nav = document.createElement("div");
  nav.classList.add("nav-links");
  nav.append(home, menu);

  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  navbar.append(logo, nav);

  content.appendChild(navbar);
  home.classList.toggle("active");
  content.appendChild(homepage);
}

function showPage(node, page) {
  if (!node.classList.contains("active")) {
    content.appendChild(page);
    node.classList.toggle("active");
  }
}

const content = document.querySelector("#content");
createNavbar();
