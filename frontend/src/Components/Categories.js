import React from "react";
import categories from "./categorieslist";
import Category from "./Category";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((categoryitem) => {
        return <Category key={categoryitem.id} {...categoryitem} />;
      })}
    </div>
  );
};

export default Categories;
