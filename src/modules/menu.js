import espresso from "../img/espresso.jpg";
import cappuccino from "../img/cappuccino.png";
import mochaccino from "../img/mochaccino.jpg";
import latte from "../img/latte.jpg";
import black from "../img/black.png";
import toGo from "../img/toGo.jpg";

function menu() {
    const container = document.createElement("div");
  container.className = "menuPage";
  const content = document.createElement("div");
  content.className = "menuContent";
  container.classList.add("activePage");

  const coffeeType = [
    {
      header: "Espresso",
      price: "3.00€",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      pic: `${espresso}`,
    },
    {
      header: "Cappuccino",
      price: "3.40€",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus cum nemo.",
      pic: `${cappuccino}`,
    },
    {
      header: "Mochaccino",
      price: "3.90€",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur neque eius temporibus commodi laborum.",
      pic: `${mochaccino}`,
    },
    {
      header: "Latte Macchiato",
      price: "3.10€",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic perferendis quasi aspernatur.",
      pic: `${latte}`,
    },
    {
      header: "Caffé Americano",
      price: "2.50€",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto blanditiis id libero debitis assumenda.",
      pic: `${black}`,
    },
    {
      header: "Caffé Americano ToGo",
      price: "2.00€",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      pic: `${toGo}`,
    },
  ];

  function updateMenu() {
    const coffeeMenu = document.createElement("div");
    coffeeMenu.classList = "coffeeMenu";
    coffeeType.forEach((element) => {
      const coffeeContainer = document.createElement("div");
      coffeeContainer.classList = "coffeeContainer";
      const menuTextContainer = document.createElement("div");
      menuTextContainer.classList = "menuTextContainer";
      const header = document.createElement("h3");
      header.textContent = element.header;
      const descr = document.createElement("p");
      descr.textContent = element.text;
      const price = document.createElement("p");
      price.classList = "price";
      price.textContent = element.price;
      const img = document.createElement("img");
      img.setAttribute("height", "60px");
      img.setAttribute("width", "60px");
      img.src = element.pic;

      menuTextContainer.appendChild(header);
      menuTextContainer.appendChild(descr);
      coffeeContainer.appendChild(img);
      coffeeContainer.appendChild(menuTextContainer);
      coffeeContainer.appendChild(price);

      coffeeMenu.appendChild(coffeeContainer);
    });

    return coffeeMenu;
  }

  content.appendChild(updateMenu());
  container.appendChild(content);

    return container;
}

export default menu;