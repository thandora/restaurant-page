import "./style.css";
import { homepage } from "./home";
import { menu } from "./menu";

const content = document.querySelector("#content");
content.appendChild(homepage);
content.appendChild(menu);
