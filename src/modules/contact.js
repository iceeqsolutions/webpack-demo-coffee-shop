import createElement from "./createFormElement";

function contact() {
    const container = document.createElement("div");
  const form = createElement("form", container, {
    class: "contactForm",
  });
  const h3 = createElement(
    "h3",
    form,
    {
      class: "formHeading formField",
    },
    "Contact Us / Give Us Feedback"
  );
  const firstName = createElement("input", form, {
    type: "text",
    placeholder: "First Name",
    class: "firstNameInput formField",
    required: true,
  });
  const lastName = createElement("input", form, {
    type: "text",
    placeholder: "Last name",
    class: "lastNameInput formField",
  });
  const phone = createElement("input", form, {
    type: "tel",
    placeholder: "Phone number",
    class: "phoneInput formField",
  });
  const email = createElement("input", form, {
    type: "email",
    placeholder: "Email",
    class: "emailInput formField",
    required: true,
  });
  const subject = createElement("textarea", form, {
    type: "text",
    placeholder: "Message",
    class: "subjectInput formField",
    required: true,
  });
  const submit = createElement(
    "button",
    form,
    { type: "submit", class: "submitForm" },
    "Send"
  );
  container.className = "contactPage";
  container.classList.add("activePage");

    return container;
}

export default contact;