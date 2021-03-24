import React, { MouseEventHandler } from "react";
import { ReactComponent as MenuIcon } from "../../assets/icon/menu.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/icon/down-arrow.svg";
import { ReactComponent as UpArrowIcon } from "../../assets/icon/upload.svg";
import styles from "./Dropdown.module.scss";

type DropdownProps = {
  children: React.ReactNode;
  label?: string;
  productAmountLabel?: string;
  open: boolean;
  variant: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Dropdown = ({
  children,
  label,
  productAmountLabel,
  variant,
  open,
  onClick,
}: DropdownProps) => {
  let styleWrapper: any;
  let styleHeader: any;
  if (variant === "menu") {
    styleWrapper = styles.menuWrapper;
    styleHeader = styles.ddHeaderMenu;
  } else if (variant === "category") {
    styleWrapper = styles.categoryWrapper;
    styleHeader = styles.ddHeaderCategory;
  } else if (variant === "ddForm") {
    styleWrapper = styles.ddFormWrapper;
  }

  return (
    <div className={`${styles.dropdownWrapper} ${styleWrapper}`}>
      <button
        onClick={onClick}
        className={`${styles.dropdownHeader} ${styleHeader}`}
        type="button"
      >
        {variant === "menu" ? (
          <MenuIcon />
        ) : (
          <div className={styles.container}>
            <div className={styles.labelContainer}>
              <span>{label}</span>
              {productAmountLabel ? <span className={styles.productAmount}>{productAmountLabel}</span> : null}
            </div>
            {open ? <UpArrowIcon /> : <DownArrowIcon />}
          </div>
        )}
      </button>
      {open && children}
    </div>
  );
};

export default Dropdown;
