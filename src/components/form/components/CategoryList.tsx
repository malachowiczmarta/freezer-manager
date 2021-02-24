import React from "react";

const productCategories = [
  "Fresh meat",
  "Bacon and Sausage",
  "Soups and Stews",
  "Cooked Meat",
  "Fruits",
  "Vegetables",
];

const CategoryList = ({ onClick, value }) => {
  return (
    <div>
      {productCategories.map((category, index) => (
        <div key={`cat-${index}`}>
          <button value={category} onClick={onClick} name={category}>
            {category}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
