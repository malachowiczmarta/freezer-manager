import React, {useState} from "react";
import styles from "./Category.module.scss"
import Dropdown from "../../../../ui/dropdown/Dropdown";
import Product from "../product/Product";

type categoryProps = {
    name: string;
}

const Category = ({name}: categoryProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDd = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className={styles.wrapper}>
            <Dropdown label={name} variant="category" open={isOpen} onClick={handleOpenDd}>
                <div className={styles.productContainer}>
                    <Product />
                    <Product />
                    <Product />
                </div>
            </Dropdown>
        </div>
    )
}

export default Category;