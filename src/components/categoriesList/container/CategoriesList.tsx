import React from "react";
import styles from "./CategoriesList.module.scss";
import Category from "../components/category/Category";
import categoryName from "../../../utils/categoryName";

const CategoriesList = () => {
  return (
    <div className={styles.wrapper}>
      {categoryName.map((category) => (
        <Category name={category}/>
      ))}
    </div>
  );
};

export default CategoriesList;
