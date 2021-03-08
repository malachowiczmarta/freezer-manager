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

const validate = (values: any) => {
  console.log("-=-=-=-", values);
  let errors = {};
  console.log(values.name && values.name.length);
  console.log(values.name.length);

  if (!values.name) {
    (errors as any).name = "Product name is required!";
  } else if (values.name.length <= 4) {
    (errors as any).name = "Product name is too short.";
  } else {
    (errors as any).name = "";
  }

  if (!values.date) {
    (errors as any).date = "Date is required!";
  }

  if (!values.category) {
    (errors as any).category = "Product category is required!";
  }

  console.log("****", errors);
  return errors;
};

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialFormState);

  const toggleDd = () => {
    setIsOpen(!isOpen);
  };

  const updateField = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

    // let formErrors: any = validate(formValues);
    // setFormErrors({
    //   ...formErrors,
    //   formErrors,
    // });
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
    let formErrors: any = validate(formValues);
    setFormErrors({
      ...formErrors,
      formErrors,
    });
    let productName = e.target.elements.name.value;
    let date = e.target.elements.date.value;
    console.log(formValues);
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
      <div className={styles.ddContainer}>
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
        <span className={styles.errorMsg}>{formErrors.category}</span>
      </div>
      <Button variant="add" />
    </form>
  );
};

export default Form;
