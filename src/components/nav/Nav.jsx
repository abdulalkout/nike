import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="navBar">
      <img
        className="logo"
        src="https://i.pinimg.com/originals/b4/8d/ed/b48ded94bce1302d3f83d6a46e3214cc.png"
      />
      <div className="navLinks">
        <a>Nike Refurbished</a>

        <a>Find a Store</a>

        <a>Help</a>

        <a>Join Us</a>

        <a>Sign In</a>
      </div>
    </div>
  );
}

export default Nav;
