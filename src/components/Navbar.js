import React from "react";
import "./Navbar.css";

function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <h1>Fake Store</h1>
      <button className="cart-button" onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;
