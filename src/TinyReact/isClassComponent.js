import isFunction from "./isFunction";

export default function isClassComponet(virtualDOM) {
  return (
    isFunction(virtualDOM) &&
    typeof virtualDOM.type.prototype.render === "function"
  );
}
