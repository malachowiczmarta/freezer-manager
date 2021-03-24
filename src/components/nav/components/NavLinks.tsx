import React from "react";
import { connect } from "react-redux";
import { setModal } from "../../../store/reducers/modal";
import { modalSelector } from "../../../store/selectors/modalSelector";

import { Link } from "react-router-dom";
import styles from "./NavLinks.module.scss";

function NavLinks({onClick, ...props}: any) {

  const toggleModal = () => {
    onClick();
    props.setModal();
  };

  return (
    <div className={styles.navLinksContainer}>
      <div className={styles.linksWrapper}>
        <Link to="/">Home</Link>
        <Link to="/myfreezer">My freezer</Link>
      </div>
      <button onClick={toggleModal}>Sign in</button>
    </div>
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

export default connect(mapStateToProps, mapDispatchToPros)(NavLinks);
