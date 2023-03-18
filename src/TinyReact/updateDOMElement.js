export default function updateDOMElement(domElement, virtualDOM) {
  const { props } = virtualDOM;

  Object.keys(props).forEach((prop) => {
    const value = props[prop];
    if (prop === "className") {
      domElement.setAttribute("class", value);
    }
  });
}
