import React from "react";
import { ReactComponent as PlusIcon } from "../../assets/icon/plus.svg";
import styles from "./Button.module.scss";

type ButtonProps = {
  label?: string;
  variant: 'add' | 'signIn';
  type: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ label, type, variant, disabled, onClick }: ButtonProps) => {
  let style;
  let icon;

  if (variant === "add") {
    style = styles.btnAdd;
    icon = <PlusIcon />;
  }else if (variant === "signIn") {
    style = styles.btnSignIn;
  }

  return (
    <button disabled={disabled} type={type} onClick={onClick} className={`${styles.btn} ${style}`}>
      {label}
      {icon}
    </button>
  );
};

export default Button;
