import React from "react";
import styles from "./CategoriesList.module.scss"
import Category from "../components/category/Category";

const CategoriesList = () => {


    return (
        <div className={styles.wrapper}>
            <Category />
            <Category />
        </div>
    )
}

export default CategoriesList;