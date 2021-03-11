import React, {useState} from "react";
import styles from "./Category.module.scss"
import Dropdown from "../../../../ui/dropdown/Dropdown";
import Product from "../product/Product";

type categoryProps = {
    name: string;
    data: any;
}

const Category = ({name, data}: categoryProps) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(data)

    const handleOpenDd = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className={styles.wrapper}>
            <Dropdown label={name} variant="category" open={isOpen} onClick={handleOpenDd}>
                <div className={styles.productContainer}>
                    {data && data.length > 0 ? data.map((product: any, index: any) => (
                        <Product key={`prod-${index}`} name={product.name} freezingDate={product.date}/>
                    )) : <div className={styles.alertWrapper}><h2>You don't have any products in this category.</h2></div>}
                </div>
            </Dropdown>
        </div>
    )
}

export default Category;