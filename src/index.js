import "./styles/styles.css";
import home from "./modules/home";
import about from "./modules/about";
import menu from "./modules/menu";
import contact from "./modules/contact";
import icsStatement from "./modules/icsFootnote";

// Initial Page Rendering
const homePage = document.querySelector(".home");
const aboutPage = document.querySelector(".about");
const menuPage = document.querySelector(".menu");
const contactPage = document.querySelector(".contact");

const content = document.querySelector("#content");
content.appendChild(home());
content.appendChild(icsStatement());

// Navigation
homePage.addEventListener("click", goToHome);
aboutPage.addEventListener("click", goToAbout);
menuPage.addEventListener("click", goToMenu);
contactPage.addEventListener("click", goToContact);

function goToHome() {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(home());
    homePage.classList.add("active");
    aboutPage.classList.remove("active");
    menuPage.classList.remove("active");
    contactPage.classList.remove("active");
    content.appendChild(icsStatement());
}

function goToAbout() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    content.appendChild(about());
    homePage.classList.remove("active");
    aboutPage.classList.add("active");
    menuPage.classList.remove("active");
    contactPage.classList.remove("active");
    content.appendChild(icsStatement());
}

function goToMenu() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    content.appendChild(menu());
    homePage.classList.remove("active");
    aboutPage.classList.remove("active");
    menuPage.classList.add("active");
    contactPage.classList.remove("active");
    content.appendChild(icsStatement());
}

function goToContact() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    content.appendChild(contact());
    homePage.classList.remove("active");
    aboutPage.classList.remove("active");
    menuPage.classList.remove("active");
    contactPage.classList.add("active");
    content.appendChild(icsStatement());
}