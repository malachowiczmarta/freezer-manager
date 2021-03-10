import React from "react";
import { ReactComponent as DeleteIcon } from "../../../../assets/icon/delete.svg";
import styles from "./Product.module.scss";

const Product = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <h2>Chicken</h2>
        <button className={styles.deleteBtn}><DeleteIcon/></button>
      </div>
      <div className={styles.dateWrapper}>
        <p>
          Freezing date: <time>12.03.2021</time>
        </p>
        <p>
          Best to defrost before: <time>12.05.2021</time>
        </p>
      </div>
    </div>
  );
};

export default Product;
