import React from "react";
import "./NewProduct.css";

function NewProduct() {
  return (
    <div>
      <div className="newProductImgDiv">
        <img
          className="newProduct"
          src="https://cdn.wallpapersafari.com/96/60/UERAj8.jpg"
        />
      </div>
      <div className="newProductdiscriptionDiv">
        <p>Coming Soon</p>
        <h1>
          AIR JORDAN 11 <br /> ‘GRATITUDE’
        </h1>
        <p>
          Dedicated to our day-ones: a timeless silhouette with a touch of gold,
          <br /> {"  "}satin lining on the collar, and a premium leather upper.
        </p>
        <div className="newProductButtonDiv">
          <button className="newProductButton">Shop AJ11 Collection</button>
          <button className="newProductButton">Notify Me</button>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
