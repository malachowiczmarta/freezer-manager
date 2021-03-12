import React from "react";

import { connect } from "react-redux";
import { deleteProduct } from "../../../../store/reducers/products";

import { ReactComponent as DeleteIcon } from "../../../../assets/icon/delete.svg";
import styles from "./Product.module.scss";
import DeleteButton from "../../../deleteButton/DeleteButton";

type ProductProps = {
  data: {
    name: string;
    date: string;
    id: string;
  };
  deleteProduct: Function;
};

const Product = ({ data, ...props }: ProductProps) => {
  const handleDeleteProduct = () => {
    props.deleteProduct(data.id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <h2>{data.name}</h2>
        <DeleteButton onClick={handleDeleteProduct}/>
      </div>
      <div className={styles.dateWrapper}>
        <p>
          Freezing date: <time>{data.date}</time>
        </p>
        <p>
          Best to defrost before: <time>12.05.2021</time>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  products: state.products.products,
});

const mapDispatchToProps = {
  deleteProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
