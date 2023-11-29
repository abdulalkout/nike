import React from "react";
import "./Categories.css";
import Categories from "./Categories";

function CategoriesList({ categories }) {
  return (
    <div className="categoriesListDiv">
      {categories.map((category, index) => {
        return <Categories key={index} category={category} />;
      })}
    </div>
  );
}

export default CategoriesList;
