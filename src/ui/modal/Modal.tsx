import React from "react";
import styles from "./Modal.module.scss";
import { ReactComponent as CloseIcon } from "../../assets/icon/close.svg";

function Modal({ open, toggleModal, label }: any) {
  return (
    <div className={styles.modal}>
      <div className={styles.contentWrapper}>
        <button onClick={toggleModal}>
          <CloseIcon />
        </button>
        <div className={styles.contentContainer}>
          <h2>{label}</h2>
          <p>komponent do logowania </p>
          <p>komponent do logowania </p>
          <p>komponent do logowania </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
