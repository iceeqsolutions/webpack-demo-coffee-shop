import video from "../img/locationBackground.mp4";
import closeItemIcon from "../img/closeIcon.png";
import emailTemplate from "../img/mailTemplate.jpg";
import streetMap from "../img/streetMap.jpg";
import cafe1 from "../img/cafe1.jpg";
import cafe2 from "../img/cafe2.jpg";
import cafe3 from "../img/cafe3.jpg";
import cafe4 from "../img/cafe4.jpg";
import pin from "../img/locationPin.png";
import mail from "../img/emailIcon.png";

function location() {
    const container = document.createElement("div");
  container.classList.add("locationPage");
  const videoContainer = document.createElement("div");
  videoContainer.classList.add("videoContainer");
  const videoBkg = document.createElement("video");
  videoBkg.setAttribute("src", video);
  videoBkg.setAttribute("type", "audio/mp4");
  videoBkg.setAttribute("allow", "autoplay");
  videoBkg.setAttribute("autoplay", true);
  videoBkg.setAttribute("muted", true);
  videoBkg.setAttribute("loop", "");
  videoBkg.className = "videoBkg";

  const content = document.createElement("div");
  content.className = "locationContent";

  const locationArray = [
    {
      class: "cafe1",
      city: "City 1",
      street: "StreetName 1, ZipCode 1",
      phone: "PhoneNumber 1",
      img: cafe1,
    },
    {
      class: "cafe2",
      city: "City 2",
      street: "StreetName 2, ZipCode 2",
      phone: "PhoneNumber 2",
      img: cafe2,
    },
    {
      class: "cafe3",
      city: "City 3",
      street: "StreetName 3, ZipCode 3",
      phone: "PhoneNumber 3",
      img: cafe3,
    },
    {
      class: "cafe4",
      city: "City 4",
      street: "StreetName 4, ZipCode 4",
      phone: "PhoneNumber 4",
      img: cafe4,
    },
  ];

  function updateLocation() {
    const ourLocations = document.createElement("div");
    ourLocations.className = "ourLocations";
    locationArray.forEach((element) => {
      const locationContainer = document.createElement("div");
      locationContainer.className = "locationContainer";
      const locationTextContainer = document.createElement("div");
      locationTextContainer.className = "locationTextContainer";

      const cafeLocationContainer = document.createElement("div");
      cafeLocationContainer.className = "cafeLocationContainer";

      const cafeImg = document.createElement("img");
      cafeImg.src = element.img;
      cafeImg.setAttribute("height", "150px");
      cafeImg.className = "cafeImg";

      cafeLocationContainer.appendChild(cafeImg);

      const cityTextContainer = document.createElement("div");
      cityTextContainer.className = "textContainer";
      const city = document.createElement("h4");
      city.textContent = "City:";
      const cityValue = document.createElement("p");
      cityValue.textContent = element.city;
      cityTextContainer.appendChild(city);
      cityTextContainer.appendChild(cityValue);

      const streetTextContainer = document.createElement("div");
      streetTextContainer.className = "textContainer";
      const street = document.createElement("h4");
      street.textContent = "Street:";
      const streetValue = document.createElement("p");
      streetValue.textContent = element.street;
      streetTextContainer.appendChild(street);
      streetTextContainer.appendChild(streetValue);

      const phoneTextContainer = document.createElement("div");
      phoneTextContainer.className = "textContainer";
      const phone = document.createElement("h4");
      phone.textContent = "Phone:";
      const phoneValue = document.createElement("p");
      phoneValue.textContent = element.phone;
      phoneTextContainer.appendChild(phone);
      phoneTextContainer.appendChild(phoneValue);

      const iconContainer = document.createElement("div");
      iconContainer.className = "iconContainer";
      const pinImg = document.createElement("img");
      pinImg.src = pin;
      pinImg.setAttribute("height", "40px");
      pinImg.classList.add("locationPageIcon", element.class);
      const mailImg = document.createElement("img");
      mailImg.src = mail;
      mailImg.setAttribute("height", "40px");
      mailImg.classList.add("sendMailIcon", element.class);

      locationTextContainer.appendChild(cityTextContainer);
      locationTextContainer.appendChild(streetTextContainer);
      locationTextContainer.appendChild(phoneTextContainer);
      cafeLocationContainer.appendChild(locationTextContainer);
      locationContainer.appendChild(cafeLocationContainer);
      iconContainer.appendChild(pinImg);
      iconContainer.appendChild(mailImg);
      locationContainer.appendChild(iconContainer);

      ourLocations.appendChild(locationContainer);
    });

    return ourLocations;
  }

  const mapContainer = document.createElement("div");
  mapContainer.classList.add("mapContainer", "hidden");
  const closeMapIconContainer = document.createElement("div");
  closeMapIconContainer.classList.add("closeMapIconContainer");
  const closeMap = document.createElement("img");
  closeMap.src = closeItemIcon;
  const googleMapImg = document.createElement("img");
  googleMapImg.src = streetMap;

  closeMapIconContainer.appendChild(closeMap);
  mapContainer.appendChild(closeMapIconContainer);
  mapContainer.appendChild(googleMapImg);

  const emailContainer = document.createElement("div");
  emailContainer.classList.add("emailContainer", "hidden");
  const closeEmailIconContainer = document.createElement("div");
  closeEmailIconContainer.classList.add("closeEmailIconContainer");
  const closeEmail = document.createElement("img");
  closeEmail.src = closeItemIcon;
  const fakeEmail = document.createElement("img");
  fakeEmail.src = emailTemplate;

  closeEmailIconContainer.appendChild(closeEmail);
  emailContainer.appendChild(closeEmailIconContainer);
  emailContainer.appendChild(fakeEmail);

  content.appendChild(updateLocation());
  videoContainer.appendChild(videoBkg);
  container.appendChild(videoContainer);
  container.appendChild(content);
  container.appendChild(mapContainer);
  container.appendChild(emailContainer);

  setTimeout(() => {
    const sendMail1 = document.querySelector(".sendMailIcon.cafe1");
    const sendMail2 = document.querySelector(".sendMailIcon.cafe2");
    const sendMail3 = document.querySelector(".sendMailIcon.cafe3");
    const sendMail4 = document.querySelector(".sendMailIcon.cafe4");

    const location1 = document.querySelector(".locationPageIcon.cafe1");
    const location2 = document.querySelector(".locationPageIcon.cafe2");
    const location3 = document.querySelector(".locationPageIcon.cafe3");
    const location4 = document.querySelector(".locationPageIcon.cafe4");

    closeEmail.addEventListener("click", closeEmailTemplate);
    closeMap.addEventListener("click", closeMapTemplate);

    sendMail1.addEventListener("click", openMailTemplate);
    sendMail2.addEventListener("click", openMailTemplate);
    sendMail3.addEventListener("click", openMailTemplate);
    sendMail4.addEventListener("click", openMailTemplate);

    location1.addEventListener("click", openMap);
    location2.addEventListener("click", openMap);
    location3.addEventListener("click", openMap);
    location4.addEventListener("click", openMap);

    function openMailTemplate() {
      emailContainer.classList.toggle("hidden");
    }

    function openMap() {
      mapContainer.classList.toggle("hidden");
    }

    function closeEmailTemplate() {
      emailContainer.classList.add("hidden");
    }

    function closeMapTemplate() {
      mapContainer.classList.add("hidden");
    }
  }, 50);

    return container;
}

export default location;