import React from 'react';
import styles from "./Button.module.scss"

type ButtonProps = {
    label: string;
    variant: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


const Button = ({label, variant, onClick}: ButtonProps) => {
    let style = styles.btn;

    if(variant === "add") {
        style = styles.btnAdd
    }

    return (
        <button onClick={onClick} className={style}>{label}</button>
    )
};

export default Button;