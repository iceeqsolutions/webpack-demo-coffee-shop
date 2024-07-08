function createFormElement(
    elementType,
    appendChild,
    attribute,
    innerText,
    innerHtml,
    elementInsertion,
    elementBefore
  ) {
    if (elementType) {
      const element = document.createElement(elementType);
      if (innerText) {
        element.innerText = innerText;
      }
      if (innerHtml) {
        element.innerHTML = innerHtml;
      }
      if (attribute) {
        Object.keys(attribute).forEach((key) => {
          element.setAttribute(`${key}`, attribute[key]);
        });
      }
      if (appendChild) {
        appendChild.appendChild(element);
      }
      if (elementInsertion && elementBefore) {
        elementInsertion.insertBefore(element, elementBefore);
      }
      return element;
    }
  }
  
  export default createFormElement;
  