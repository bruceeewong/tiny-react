/**
 * create and return virtual DOM, using pure js object representation for real DOM structure
 * @param {*} type
 * @param {*} props
 * @param  {...any} children
 * @returns
 */
export default function createElement(type, props, ...children) {
  const childElements = [...children].filter(
    (child) => typeof child !== "boolean" && child !== null
  );
  return {
    type,
    props,
    children: childElements,
  };
}
