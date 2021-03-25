import React from "react";
import { FormFieldType } from "../../utils/types";
import styles from "./FormField.module.scss";

type FormFieldProps = {
  onChange: Function;
  value: string | number;
  label?: string;
  name: string;
  placeholder: string;
  id: string;
  type: string;
  error: string;
};

const FormField = ({
  onChange,
  value,
  label,
  name,
  id,
  placeholder,
  type = "text",
  error,
}: FormFieldProps) => {
  let fieldStyle = "";
  if (name === FormFieldType.NAME) {
    fieldStyle = styles.wrapperName;
  } else if (name === FormFieldType.DATE) {
    fieldStyle = styles.wrapperDate;
  } else if (name === FormFieldType.EMAIL || name === FormFieldType.PASSWORD) {
    fieldStyle = styles.signInWrapper;
  }

  return (
    <div className={`${styles.wrapper} ${fieldStyle}`}>
      <span className={styles.errorMsg}>{error}</span>
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      ></input>
    </div>
  );
};

export default FormField;
