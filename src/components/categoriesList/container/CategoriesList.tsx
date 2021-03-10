import React from "react";

import { connect } from "react-redux";

import styles from "./CategoriesList.module.scss";
import Category from "../components/category/Category";
import categoryName from "../../../utils/categoryName";

const CategoriesList = (props: any) => {
  const { products } = props;

  const filterCategory = (category: string) => {
    return products.filter((product: any) => product.category === category);
  };

  return (
    <div className={styles.wrapper}>
      {categoryName.map((category, index) => {
        let productsFromCategory = filterCategory(category);
        return <Category key={`${category}-${index}`} name={category} data={productsFromCategory} />;
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  products: state.products.products,
});

export default connect(mapStateToProps)(CategoriesList);
