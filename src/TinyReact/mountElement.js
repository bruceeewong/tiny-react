import mountNativeElement from "./mountNativeElement";

export default function mountElement(virtualDOM, container) {
  // if the type of virtual dom is native dom element
  if (!typeof virtualDOM !== "function") {
    mountNativeElement(virtualDOM, container);
  }
  // TODO: else, render as component type
}
