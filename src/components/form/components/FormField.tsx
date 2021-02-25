import React from "react";
import styles from "./FormField.module.scss";

type FormFieldProps = {
  onChange: React.ChangeEvent<HTMLInputElement>;
  value: string | number;
  label?: string;
  name: string;
  placeholder: string;
  id: string;
  type: string | number;
};

const FormField = ({
  onChange,
  value,
  label,
  name,
  id,
  placeholder,
  type = "text",
}: FormFieldProps) => {
  let inputStyle = "";
  if (name === "name") {
    inputStyle = styles.inputName;
  } else {
    inputStyle = styles.inputDate;
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={inputStyle}
        name={name}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
};

export default FormField;
