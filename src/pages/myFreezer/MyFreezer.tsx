import React from "react";
import styles from "./MyFreezer.module.scss"
import CategoriesList from "../../components/categoriesList/container/CategoriesList";

const MyFreezer = () => {
  return (
    <div className={styles.wrapper}>
      <CategoriesList />
    </div>
  );
};

export default MyFreezer;
