import React, { MouseEventHandler } from "react";
import { ReactComponent as MenuIcon } from "../../assets/icon/menu.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/icon/down-arrow.svg";
import styles from "./Dropdown.module.scss";

type DropdownProps = {
  children: any;
  label?: string;
  open: boolean;
  variant: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Dropdown = ({
  children,
  label,
  variant,
  open,
  onClick,
}: DropdownProps) => {
  return (
    <div className={styles.dropdownWrapper}>
      <button onClick={onClick} className={styles.dropdownHeader} type="button">
        {variant === "menu" ? (
          <MenuIcon />
        ) : (
          <div className={styles.category}>
            <span>{label}</span>
            <DownArrowIcon />
          </div>
        )}
      </button>
      {open && children}
    </div>
  );
};

export default Dropdown;
