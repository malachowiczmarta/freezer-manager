import React, { useState } from "react";
import styles from "./Form.module.scss";
import Dropdown from "../../../ui/dropdown/Dropdown";
import FormField from "../components/FormField";
import CategoryList from "../components/CategoryList";
import Button from "../../button/Button";

const initialFormState = {
  name: "",
  category: "",
  date: "",
};

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialFormState);

  const toggleDd = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryClick = (e: any) => {
    setFormValues({
      ...formValues,
      category: e.target.value,
    });
    toggleDd();
  };

  const handleAddProduct = (e: any) => {
    e.preventDefault();
    let productName = e.target.elements.name.value;
    let date = e.target.elements.date.value;
    console.log(`Name is: ${productName}, date is: ${date}`);
  };

  return (
    <form onSubmit={handleAddProduct} className={styles.wrapper}>
      <FormField
        id="input-name"
        name="name"
        placeholder="Product name"
        type="text"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        id="input-date"
        name="date"
        placeholder="date"
        type="date"
        value={formValues.date}
        onChange={handleInputChange}
      />
      <Dropdown
        onClick={toggleDd}
        open={isOpen}
        variant="categories"
        label={formValues.category ? formValues.category : "Product category"}
      >
        <CategoryList
          onClick={handleCategoryClick}
          value={formValues.category}
        />
      </Dropdown>
      <Button variant="add" />
    </form>
  );
};

export default Form;
