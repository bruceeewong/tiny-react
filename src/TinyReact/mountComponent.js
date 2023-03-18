import isClassComponet from "./isClassComponent";
import mountElement from "./mountElement";

export default function mountComponent(virtualDOM, container) {
  if (isClassComponet(virtualDOM)) {
    // TODO: Class Component
  } else {
    // Function Component
    const nextVirtualDOM = buildFunctionComponent(virtualDOM);
    mountElement(nextVirtualDOM, container);
  }
}

function buildFunctionComponent(virtualDOM, container) {
  return virtualDOM.type(virtualDOM.props);
}
