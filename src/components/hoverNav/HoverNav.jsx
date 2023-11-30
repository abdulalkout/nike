import React from "react";
import "./HoverNav.css";

function HoverNav({ set }) {
  return (
    <div
      className="HoverNav"
      onMouseLeave={() => {
        set(false);
      }}
    >
      <div>
        <ul>
          <p className="productsP">Men</p>
          <li>Hats</li>
          <li>Shoes</li>
          <li>Track suit</li>
          <li>Bags</li>
        </ul>
      </div>
      <div>
        <ul>
          <p className="productsP">Women</p>
          <li>Hats</li>
          <li>Shoes</li>
          <li>Track suit</li>
          <li>Bags</li>
        </ul>
      </div>
      <div>
        <ul>
          <p className="productsP">Kids</p>
          <li>Hats</li>
          <li>Shoes</li>
          <li>Track suit</li>
          <li>Bags</li>
        </ul>
      </div>
      <div>
        <ul>
          <p className="productsP">Gifts</p>
          <li>Hats</li>
          <li>Shoes</li>
          <li>Track suit</li>
          <li>Bags</li>
        </ul>
      </div>
    </div>
  );
}

export default HoverNav;
