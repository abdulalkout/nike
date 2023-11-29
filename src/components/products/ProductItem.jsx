import React from "react";
import "./ProductList.css";

function ProductItem({ product }) {
  return (
    <div>
      <div className="productListImg">
        <img className="productImg" src={product.image} />
      </div>
      <p style={{ marginLeft: "20px" }}>{product.name}</p>
    </div>
  );
}

export default ProductItem;
