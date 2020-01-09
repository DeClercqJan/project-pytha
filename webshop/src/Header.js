import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Gameplanet</h1>
        <nav className="header-nav">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>My shopping cart</li>
            <li>About Gameplanet</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
