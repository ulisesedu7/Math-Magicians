import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.PureComponent {
  render() {
    return (
      <header className="header-container">
        <nav className="navbar">
          <h1>Math Magicians</h1>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link-a">Home</Link>
            </li>

            <hr />

            <li>
              <Link to="/calculator" className="nav-link-a">Calculator</Link>
            </li>

            <hr />

            <li>
              <Link to="/quote" className="nav-link-a">Quote</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
