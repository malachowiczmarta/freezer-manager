import React, { useState } from "react";
import styles from "./Category.module.scss";
import Dropdown from "../../../../ui/dropdown/Dropdown";
import Product from "../product/Product";
import addExpDate from "../../../../utils/addExpDate";

type categoryProps = {
  name: string;
  data: any;
};

const Category = ({ name, data }: categoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenDd = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <Dropdown
        label={name}
        variant="category"
        open={isOpen}
        onClick={handleOpenDd}
      >
        <div className={styles.productContainer}>
          {data && data.length > 0 ? (
            data.map((product: any) => {
              let data = addExpDate(product);
              return <Product key={`prod-${product.id}`} data={data} />;
            })
          ) : (
            <div className={styles.alertWrapper}>
              <h2>You don't have any products in this category.</h2>
            </div>
          )}
        </div>
      </Dropdown>
    </div>
  );
};

export default Category;
