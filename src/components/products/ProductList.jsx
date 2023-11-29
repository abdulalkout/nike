import React from "react";
import "./ProductList.css";
import ProductItem from "./ProductItem";

function ProductList({ list, name }) {
  return (
    <>
      <div className="list">
        {list.map((item, index) => {
          return <ProductItem key={index} product={item} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
