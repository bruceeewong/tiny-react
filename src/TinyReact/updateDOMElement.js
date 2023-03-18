export default function updateDOMElement(domElement, virtualDOM) {
  const { props } = virtualDOM;

  Object.keys(props).forEach((prop) => {
    const value = props[prop];
    if (prop === "children") return;
    if (prop === "className") {
      domElement.setAttribute("class", value);
    } else if (prop.startsWith("on")) {
      // bind an event listener
      const eventName = prop.toLowerCase().slice(2);
      domElement.addEventListener(eventName, value);
    }
  });
}
