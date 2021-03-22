import React from "react";
import styles from "./Modal.module.scss";
import { ReactComponent as CloseIcon } from "../../assets/icon/close.svg";

function Modal({ children, open, toggleModal, label }: any) {
  return (
    <div className={styles.modal}>
      <div className={styles.contentWrapper}>
        <button onClick={toggleModal} className={styles.btnClose}>
          <CloseIcon />
        </button>
        <div className={styles.contentContainer}>
          <h2>{label}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
