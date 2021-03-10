import React, { useState } from "react";

import { connect } from "react-redux";
import { addProduct } from "../../../store/reducers/products";

import styles from "./Form.module.scss";
import Dropdown from "../../../ui/dropdown/Dropdown";
import FormField from "../components/FormField";
import CategoryList from "../components/CategoryList";
import Button from "../../button/Button";
import validate from "../../../utils/formValidators";

const initialFormState = {
  name: "",
  category: "",
  date: "",
};

const Form = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isDisabled, setIsDisabled] = useState(true);
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
    if (formErrors) {
      setFormErrors({
        ...formErrors,
        formErrors,
      });
      console.log("błąd");
      return;
    }
    setFormErrors(initialFormState);
    // setIsDisabled(!isDisabled)

    // let newProduct = {
    //   name: e.target.elements.name.value,
    //   category: e.target.elements.category.value,
    //   date: e.target.elements.date.value,
    // }

    props.addProduct(formValues);
    setFormValues(initialFormState);
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
          variant="ddForm"
          label={formValues.category ? formValues.category : "Product category"}
        >
          <CategoryList
            onClick={handleCategoryClick}
            value={formValues.category}
          />
        </Dropdown>
        <span className={styles.errorMsg}>{formErrors.category}</span>
      </div>
      <Button
        variant="add"
        // disabled={isDisabled}
      />
    </form>
  );
};

const mapStateToProps = (state: any) => ({
  products: state.products.products,
});

const mapDispatchToProps = {
  addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
