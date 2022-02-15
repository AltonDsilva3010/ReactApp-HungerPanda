import React from "react";

const Category = ({ id, name, image }) => {
  return (
    <div key={id} className="category-container">
      <img src={image} alt={`${name} image`} className="category-image"></img>
      <h1>{name}</h1>
    </div>
  );
};

export default Category;
