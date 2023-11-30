import React from "react";
import "./NavExtension.css";
import { Link } from "react-router-dom";
import "../../mystyle.css";

function NavExtension() {
  return (
    <div className="navExtension">
      <a className="logo2" href="/">
        <img
          className="bag logo2"
          src="https://www.shutterstock.com/image-vector/pakistan-06-19-2023-nike-260nw-2319831063.jpg"
        />
      </a>

      <div className="extensionLinks">
        <Link to="/newFeature">New & Featured</Link>
        <a>Man</a>
        <a>Woman</a>
        <a>Kids</a>
        <a>Accessories</a>
        <a>Sale</a>
      </div>
      <div className="searchCart">
        <input className="searchNav" type="tex" placeholder="     Search" />
        <img
          className="bag"
          src="https://static.vecteezy.com/system/resources/previews/015/309/631/non_2x/heart-icon-on-transparent-background-free-png.png"
        />
        <img
          className="bag"
          src="https://cdn1.iconfinder.com/data/icons/user-interface-basics/512/BI_096_bag-512.png"
        />
      </div>
    </div>
  );
}

export default NavExtension;
