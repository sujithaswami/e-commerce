import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";
const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <>
      <div className="navSection">
        <div className="title">
          <h2>E-Mart</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="Search Here"></input>
        </div>
        <div className="user">
          <div className="user-details">SignIN/ SignUp</div>
          <Link to="/cart">
            <div className="cart">
              Cart
              <span>{cartItems.length}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/mobiles">
            <li>Mobiles</li>
          </Link>
          <Link to="/computer">
            <li>Computers</li>
          </Link>

          <Link to="/watch">
            <li>Watches</li>
          </Link>
          <Link to="/menwear">
            <li>Men Wear</li>
          </Link>
          <Link to="/womenwear">
            <li>Women Wear</li>
          </Link>

          <Link to="/book">
            <li>Books</li>
          </Link>
          <Link to="/furnture">
            <li>Furnuture</li>
          </Link>
          <Link to="/kitchen">
            <li>Kitchen</li>
          </Link>

          <Link to="/fridge">
            <li>Fridge</li>
          </Link>
          <Link to="/speaker">
            <li>Speaker</li>
          </Link>

          <Link to="/ac">
            <li>AC</li>
          </Link>
          <Link to="/tv">
            <li>TV'S</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
