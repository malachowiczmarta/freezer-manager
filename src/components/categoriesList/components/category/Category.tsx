import React, { useEffect, useState } from "react";
import styles from "./Category.module.scss";
import Dropdown from "../../../../ui/dropdown/Dropdown";
import Product from "../product/Product";
import addExpDates from "../../../../utils/addExpDates";
import { ProductPayload } from "../../../../store/reducers/products";

type categoryProps = {
  name: string;
  data: any;
};

const Category = ({ name, data }: categoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsList, setProductsList] = useState<ProductPayload[]>([]);

  const sortList = (a: ProductPayload, b: ProductPayload) => {
    if (a.expDate && b.expDate) {
      return a.expDate > b.expDate ? 1 : -1;
    }
    return 1;
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const products = addExpDates(data).sort(sortList);
      if (products) {
        setProductsList(products);
      }
    }
  }, [data]);

  const handleOpenDd = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <Dropdown
        label={name}
        productAmountLabel={`${productsList.length} products`}
        variant="category"
        open={isOpen}
        onClick={handleOpenDd}
      >
        <div className={styles.productContainer}>
          {productsList && productsList.length > 0 ? (
            //dodac productpayload jako typ
            productsList.map((product: ProductPayload) => {
              console.log(product);
              return <Product key={`prod-${product.id}`} data={product} />;
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
