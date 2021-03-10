import React from "react";
import { ReactComponent as DeleteIcon } from "../../../../assets/icon/delete.svg";
import styles from "./Product.module.scss";

type ProductProps = {
  name: string;
  freezingDate: string;
}

const Product = ({name, freezingDate}: ProductProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <h2>{name}</h2>
        <button className={styles.deleteBtn}><DeleteIcon/></button>
      </div>
      <div className={styles.dateWrapper}>
        <p>
          Freezing date: <time>{freezingDate}</time>
        </p>
        <p>
          Best to defrost before: <time>12.05.2021</time>
        </p>
      </div>
    </div>
  );
};

export default Product;
