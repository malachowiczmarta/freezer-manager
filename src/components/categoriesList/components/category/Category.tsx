import React, { useState } from "react";
import moment, { Moment } from "moment";
import styles from "./Category.module.scss";
import Dropdown from "../../../../ui/dropdown/Dropdown";
import Product from "../product/Product";

type categoryProps = {
  name: string;
  data: any;
};

const Category = ({ name, data }: categoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenDd = () => {
    setIsOpen(!isOpen);
  };

  const AddExpDate = (product: any) => {
    if (product.category === "Fresh meat") {
      let newDate = moment(product.date).add(12, "months");

      return (product = {
        ...product,
        expDate: newDate,
      });
    } else if (product.category === "Sausage") {
      let newDate = moment(product.date).add(2, "months");

      return (product = {
        ...product,
        expDate: newDate,
      });
    } else if (product.category === "Soups and Stews") {
      let newDate = moment(product.date).add(12, "months");

      return (product = {
        ...product,
        expDate: newDate,
      });
    } else if (product.category === "Cooked Meat") {
      let newDate = moment(product.date).add(3, "months");

      return (product = {
        ...product,
        expDate: newDate,
      });
    } else if (product.category === "Fruits") {
      let newDate = moment(product.date).add(6, "months");

      return (product = {
        ...product,
        expDate: newDate,
      });
    } else if (product.category === "Vegetables") {
      let newDate = moment(product.date).add(12, "months");

      return (product = {
        ...product,
        expDate: newDate,
      });
    }
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
              let data = AddExpDate(product);

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
