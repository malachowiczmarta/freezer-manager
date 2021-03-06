import React, { MouseEventHandler } from "react";
import { CategoryType } from "../../../utils/types";
import styles from "./FormCategoryList.module.scss";

type CategoryListProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const FormCategoryList = ({ onClick }: CategoryListProps) => {
  return (
    <div className={styles.wrapper}>
      {Object.values(CategoryType).map((category, index) => (
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

export default FormCategoryList;
