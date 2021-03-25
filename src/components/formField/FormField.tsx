import React from "react";
import { FormFieldType } from "../../utils/types";
import { ReactComponent as WarningIcon } from "../../assets/icon/warning.svg";

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
  let fieldStyle;
  let errorStyle;
  if (name === FormFieldType.NAME) {
    fieldStyle = styles.wrapperName;
  } else if (name === FormFieldType.DATE) {
    fieldStyle = styles.wrapperDate;
  } else if (name === FormFieldType.EMAIL || name === FormFieldType.PASSWORD) {
    fieldStyle = styles.signInWrapper;
    errorStyle = styles.signInError;
  }

  return (
    <div className={`${styles.wrapper} ${fieldStyle}`}>
      <span className={`${styles.errorMsg} ${errorStyle}`}>{error && <WarningIcon/>}{error}</span>
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
