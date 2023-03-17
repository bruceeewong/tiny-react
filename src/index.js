// jsx would be compiled to TinyReact.createElement
// so we definitly need to import here
import TinyReact from "./TinyReact";

// render these jsx onto the html page!
const jsx = (
  <div className="container">
    <h1>Hi, Tiny React</h1>
    <h2 data-test="test">(H2 with data attribute)</h2>
    <div>
      Embeded 1 <div>Embeded 1.1</div>
    </div>
    <h3>(Watch out: this would change)</h3>
    {2 == 1 && <div>if the statement is true, this would show</div>}
    {2 == 2 && <div>2</div>}
    <span>Something trivial</span>
    <button onClick={() => alert("Hello world!")}>Click me</button>
    <h3>This would be removed</h3>
    2, 3
    <input type="text" value="13" />
  </div>
);

// you should see a js object that represents the jsx as output
console.log(jsx);

// render jsx onto the container dom
TinyReact.render(jsx, document.getElementById("root"));
