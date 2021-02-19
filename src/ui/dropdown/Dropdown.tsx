import React, { MouseEventHandler } from "react";
import { ReactComponent as MenuIcon } from "../../assets/icon/hamburger.svg";
import styles from "./Dropdown.module.scss";

type DropdownProps = {
  children: any;
  label?: string;
  open: boolean;
  toggleDropdown: MouseEventHandler<HTMLButtonElement>;
};

const Dropdown = ({ children, label, open, toggleDropdown }: DropdownProps) => {
  return (
    <div className={styles.dropdownWrapper}>
      <button onClick={toggleDropdown} className={styles.dropdownHeader}>
        <MenuIcon />
      </button>
      <div className={styles.dropdownContent}>
      {open && children}
      </div>
    </div>
  );
};

export default Dropdown;
