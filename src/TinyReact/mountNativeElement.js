import createDOMElement from "./createDOMElement";

export default function mountNativeElement(virtualDOM, container) {
  const domElement = createDOMElement(virtualDOM);
  // here is where we actually mount the dom elements
  container.appendChild(domElement);
}
