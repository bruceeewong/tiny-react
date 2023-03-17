import diff from "./diff";

export default function render(virtualDOM, container, oldDOM) {
  // render virtualDOM onto the container by diff algorithm
  diff(virtualDOM, container, oldDOM);
}
