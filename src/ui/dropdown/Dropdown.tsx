import React, { MouseEventHandler } from "react";
import { ReactComponent as MenuIcon } from "../../assets/icon/menu.svg";
import styles from "./Dropdown.module.scss";

type DropdownProps = {
  children: any;
  label?: string;
  open: boolean;
  variant: string;
  toggleDropdown: MouseEventHandler<HTMLButtonElement>;
};

const Dropdown = ({ children, label, variant, open, toggleDropdown }: DropdownProps) => {

  return (
    <div className={styles.dropdownWrapper}>
      <button onClick={toggleDropdown} className={styles.dropdownHeader}>
        {variant === "menu" && <MenuIcon />}
      </button>
      <div className={styles.navLinksMobile}>
        {open && children}
      </div>
    </div>
  );
};

export default Dropdown;
