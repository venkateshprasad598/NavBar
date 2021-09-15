import "./App.css";
import { useState } from "react";

function App() {
  const [showNav, setShow] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <section className="header">
          <h1>NAV BAR</h1>
          <button onClick={() => setShow(!showNav)} className="button">
            View
          </button>
        </section>

        <div className="navBar">
          <ul className="close open">
            <li className="lists">
              <a href="#" className="anchor">
                Home
              </a>
            </li>
            <li className="lists">
              <a href="#" className="anchor">
                About
              </a>
            </li>
            <li className="lists">
              <a href="#" className="anchor">
                Contact
              </a>
            </li>
            <li className="lists">
              <a href="#" className="anchor">
                Footer
              </a>
            </li>
            <li className="lists">
              <a href="#" className="anchor">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
