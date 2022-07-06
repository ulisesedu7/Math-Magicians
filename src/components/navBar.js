import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.PureComponent {
  render() {
    return (
      <header className="header-container">
        <nav className="navbar">
          <h1>Math Magicians</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;