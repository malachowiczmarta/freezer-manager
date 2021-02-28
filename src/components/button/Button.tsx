import React from 'react';
import { ReactComponent as PlusIcon } from "../../assets/icon/plus.svg";
import styles from "./Button.module.scss"

type ButtonProps = {
    label?: string;
    variant: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


const Button = ({label, variant, onClick}: ButtonProps) => {
    let style = styles.btn;
    let icon = "";

    if(variant === "add") {
        style = styles.btnAdd;
        icon = <PlusIcon />
    }

    return (
        <button onClick={onClick} className={style}>{label}{icon}</button>
    )
};

export default Button;