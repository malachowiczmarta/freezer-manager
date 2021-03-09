import React, {useState} from "react";
import styles from "./Category.module.scss"
import Dropdown from "../../../../ui/dropdown/Dropdown";
import Product from "../product/Product";

const Category = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDd = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className={styles.wrapper}>
            <Dropdown label="Fresh meat" variant="category" open={isOpen} onClick={handleOpenDd}>
                <div>
                    <Product />
                    <Product />
                    <Product />
                </div>
            </Dropdown>
        </div>
    )
}

export default Category;