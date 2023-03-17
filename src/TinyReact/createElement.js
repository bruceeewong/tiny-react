/**
 * create and return virtual DOM, using pure js object representation for real DOM structure
 * @param {*} type
 * @param {*} props
 * @param  {...any} children
 * @returns
 */
export default function createElement(type, props, ...children) {
  return {
    type,
    props,
    children,
  };
}
