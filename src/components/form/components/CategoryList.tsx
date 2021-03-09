import React from "react";
import productCategories from "../../../utils/categoryName";
import styles from "./CategoryList.module.scss";

type CategoryListProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
};

const CategoryList = ({ onClick, value }: CategoryListProps) => {
  return (
    <div className={styles.wrapper}>
      {productCategories.map((category, index) => (
        <div key={`cat-${index}`} className={styles.listItemWrapper}>
          <button
            className={styles.listItem}
            value={category}
            onClick={onClick}
            name={category}
            type="button"
          >
            {category}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
