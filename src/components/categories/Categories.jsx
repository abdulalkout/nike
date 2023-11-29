import React from "react";
import "./Categories.css";

function Categories({ category }) {
  return (
    <div>
      <img className="categoryImg" src={category.image} />
      <h3>{category.name}</h3>
      <button className="categoryButton">
        <a className="hrefStyle" href={category.buttonLink}>
          SHOP
        </a>
      </button>
    </div>
  );
}

export default Categories;
