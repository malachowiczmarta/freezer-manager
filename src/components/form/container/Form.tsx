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
  const [formErrors, setFormErrors] = useState(initialFormState);

  const toggleDd = () => {
    setIsOpen(!isOpen);
  };

  const validateField = (form: any) => {
    if (!form.name) {
      setFormErrors({
        ...formErrors,
        name: "Product name is required",
      });
      return;
    } else if (form.name.length < 2) {
      setFormErrors({
        ...formErrors,
        name: "Product name is too short",
      });
      return;
    } else {
      setFormErrors({
        ...formErrors,
        name: "",
      });
    }

    if (!form.date) {
      setFormErrors({
        ...formErrors,
        date: "Date is required",
      });
      return;
    } else {
      setFormErrors({
        ...formErrors,
        date: "",
      });
    }
    return null;
  };

  const updateField = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

    validateField(formValues);
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
    console.log(date);
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
        onChange={updateField}
        error={formErrors.name}
      />
      <FormField
        id="input-date"
        name="date"
        placeholder="date"
        type="date"
        value={formValues.date}
        onChange={updateField}
        error={formErrors.date}
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
