import mountElement from "./mountElement";

export default function createDOMElement(virtualDOM) {
  let domElement;

  if (virtualDOM.type === "text") {
    domElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    domElement = document.createElement(virtualDOM.type);
  }

  // append child elements recursively
  virtualDOM.children.forEach((child) => {
    mountElement(child, domElement);
  });

  return domElement;
}
