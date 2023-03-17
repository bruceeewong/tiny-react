import mountElement from "./mountElement";

export default function diff(virtualDOM, container, oldDOM) {
  if (!oldDOM) {
    // if no prior dom, render virtualDOM as brand new one
    mountElement(virtualDOM, container);
  }
}
