import isClassComponet from "./isClassComponent";
import mountElement from "./mountElement";

export default function mountComponent(virtualDOM, container) {
  let nextVirtualDOM = null;
  if (isClassComponet(virtualDOM)) {
    // Class Component
    nextVirtualDOM = buildClassComponent(virtualDOM);
  } else {
    // Function Component
    nextVirtualDOM = buildFunctionComponent(virtualDOM);
  }
  mountElement(nextVirtualDOM, container);
}

function buildFunctionComponent(virtualDOM) {
  return virtualDOM.type(virtualDOM.props);
}

function buildClassComponent(virtualDOM) {
  const instance = new virtualDOM.type(virtualDOM.props);
  return instance.render();
}
