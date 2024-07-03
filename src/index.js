import "./styles/styles.css";
import home from "./modules/home";
import icsStatement from "./modules/icsFootnote";

const content = document.querySelector("#content");
content.appendChild(home());
content.appendChild(icsStatement());