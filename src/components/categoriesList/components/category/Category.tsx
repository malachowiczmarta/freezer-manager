import React, { useState } from "react";
import moment from "moment";
import styles from "./Category.module.scss";
import Dropdown from "../../../../ui/dropdown/Dropdown";
import Product from "../product/Product";
import { CategoryType } from "../../../../utils/categoryType";

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
    if (product.category === CategoryType.FRESH_MEAT) {
      let newDate = moment(product.date).add(12, "months");

      return (product = {
        ...product,
        expDate: newDate,
      });
    } else if (product.category === CategoryType.SAUSAGE) {
      let newDate = moment(product.date).add(2, "months");

      return (product = {
        ...product,
        expDate: newDate,
      });
    } else if (product.category === CategoryType.SOUPS_AND_STEWS) {
      let newDate = moment(product.date).add(12, "months");

      return (product = {
        ...product,
        expDate: newDate,
      });
    } else if (product.category === CategoryType.COOKED_MEAT) {
      let newDate = moment(product.date).add(3, "months");

      return (product = {
        ...product,
        expDate: newDate,
      });
    } else if (product.category === CategoryType.FRUITS) {
      let newDate = moment(product.date).add(6, "months");

      return (product = {
        ...product,
        expDate: newDate,
      });
    } else if (product.category === CategoryType.VEGETABLES) {
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
