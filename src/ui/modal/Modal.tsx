import React from "react";
import { connect } from "react-redux";
import { setModal } from "../../store/reducers/modal";
import { modalSelector } from "../../store/selectors/modalSelector";

import styles from "./Modal.module.scss";
import { ReactComponent as CloseIcon } from "../../assets/icon/close.svg";

function Modal({ children, label, ...props }: any) {
  const toggleModal = () => {
    console.log("click modal");
    props.setModal();
  };

  return (
    <>
      {props.showModal ? (
        <div className={styles.modal}>
          <div className={styles.contentWrapper}>
            <button onClick={toggleModal} className={styles.btnClose}>
              <CloseIcon />
            </button>
            <div className={styles.contentContainer}>
              <h1>{label}</h1>
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    showModal: modalSelector(state),
  };
};

const mapDispatchToPros = {
  setModal,
};

export default connect(mapStateToProps, mapDispatchToPros)(Modal);
