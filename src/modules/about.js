import img1 from "../img/aboutImg1.jpg";
import img2 from "../img/aboutImg2.png";
import img3 from "../img/aboutImg3.jpg";

function about() {
    const container = document.createElement("div");
    container.classList = "aboutPage";

    const aboutArray = [
        {
          header: "Finest Resources",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quas iusto. Ex sapiente molestias sequi harum, amet iusto odit cum consequatur obcaecati culpa error magnam enim dolores minus voluptatibus saepe aspernatur. Illum architecto illo voluptate!",
          pic: `${img1}`,
        },
        {
          header: "100% Taste",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ab laboriosam pariatur, neque, ut magni odio, animi vero nostrum tempora corporis nobis!",
          pic: `${img2}`,
        },
        {
          header: "Served With Love Every Time",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur neque eius temporibus commodi laborum.",
          pic: `${img3}`,
        },
      ];
    
    function updateAbout() {
    const aboutUs = document.createElement("div");
    aboutUs.classList = "aboutUs";
    aboutArray.forEach((element) => {
        const aboutContainer = document.createElement("div");
        const aboutTextContainer = document.createElement("div");
        const header = document.createElement("h3");
        const descr = document.createElement("p");
        const img = document.createElement("img");
        aboutContainer.classList = "aboutContainer";
        aboutTextContainer.classList = "aboutTextContainer";
        img.setAttribute("height", "160px");
        img.setAttribute("width", "210px");

        header.textContent = element.header;
        descr.textContent = element.text;
        img.src = element.pic;

        aboutTextContainer.appendChild(header);
        aboutTextContainer.appendChild(descr);
        aboutContainer.appendChild(img);
        aboutContainer.appendChild(aboutTextContainer);

        aboutUs.appendChild(aboutContainer);
    });

        return aboutUs;
    }

    container.appendChild(updateAbout());

    return container;
}

export default about;