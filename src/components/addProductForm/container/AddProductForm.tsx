import React, { useState } from "react";

import { connect } from "react-redux";
import { addProduct, ProductPayload } from "../../../store/reducers/products";
import { addAlert } from "../../../store/reducers/alerts";
import { productsSelector } from "../../../store/selectors/productsSelectors";
import { alertsSelector } from "../../../store/selectors/alertsSelectors";

import { v4 as uuidv4 } from "uuid";

import styles from "./AddProductForm.module.scss";
import Dropdown from "../../../ui/dropdown/Dropdown";
import FormField from "../../formField/FormField";
import FormCategoryList from "../components/FormCategoryList";
import Button from "../../button/Button";
import validate from "../../../utils/formValidators";
import AlertService, { IAlertService } from "../../../service/alertService";

const initialFormState = {
  name: "",
  category: "",
  date: "",
};

const AddProductForm = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isDisabled, setIsDisabled] = useState(true);
  const [formValues, setFormValues] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialFormState);
  const alertService: IAlertService = new AlertService();

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
      return;
    }
    setFormErrors(initialFormState);
    let productId = uuidv4();
    let payload: ProductPayload = {
      ...formValues,
      date: formValues.date,
      id: productId,
    };
    props.addProduct(payload);

    alertService.addSuccessAlert("Success, product added to the list.");

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
        value={formValues.date || ""}
        onChange={updateField}
        error={formErrors.date || ""}
      />
      <div className={styles.ddContainer}>
        <Dropdown
          onClick={toggleDd}
          open={isOpen}
          variant="ddForm"
          label={formValues.category ? formValues.category : "Product category"}
        >
          <FormCategoryList onClick={handleCategoryClick} />
        </Dropdown>
        <span className={styles.errorMsg}>{formErrors.category}</span>
      </div>
      <Button
        variant="add"
        type="submit"
        // disabled={isDisabled}
      />
    </form>
  );
};

const mapStateToProps = (state: any) => ({
  products: productsSelector(state),
  alerts: alertsSelector(state),
});

const mapDispatchToProps = {
  addProduct,
  addAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);
