// navbar.js
import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = ({ totalQuantity }) => {
  return (
    <div style={{ backgroundColor: "#00C0F3", padding: "20px" }}>
      <header className="d-flex justify-content-between align-items-center">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1>Shop to React</h1>
        </Link>
        <div>
          <Link to="/cart" style={{ color: "black" }}>
            <FontAwesomeIcon icon={faShoppingCart} />{" "}
            <span>{totalQuantity} items</span>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
