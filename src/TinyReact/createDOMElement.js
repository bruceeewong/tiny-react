import mountElement from "./mountElement";
import updateDOMElement from "./updateDOMElement";

export default function createDOMElement(virtualDOM) {
  let domElement;

  if (virtualDOM.type === "text") {
    domElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    domElement = document.createElement(virtualDOM.type);
    // add attrs / event listeners / class to the dom element
    updateDOMElement(domElement, virtualDOM);
  }

  // append child elements recursively
  virtualDOM.children.forEach((child) => {
    mountElement(child, domElement);
  });

  return domElement;
}
