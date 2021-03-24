import React from "react";

import { connect } from "react-redux";
import { productsSelector } from "../../../store/selectors/productsSelectors";

import styles from "./CategoriesList.module.scss";
import Category from "../components/category/Category";
import { CategoryType } from "../../../utils/types";
import { IProductState, ProductPayload } from "../../../store/reducers/products";


const CategoriesList = (props: IProductState) => {
  const { products } = props;

  const filterCategory = (category: string) => {
    return products.filter((product: ProductPayload) => product.category === category);
  };

  return (
    <div className={styles.wrapper}>
      {Object.values(CategoryType).map((category, index) => {
        let productsFromCategory = filterCategory(category);
        return (
          <Category
            key={`${category}-${index}`}
            name={category}
            data={productsFromCategory}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  products: productsSelector(state),
});

export default connect(mapStateToProps)(CategoriesList);
