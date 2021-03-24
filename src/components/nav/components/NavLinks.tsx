import React from "react";
import { connect } from "react-redux";
import { setModal } from "../../../store/reducers/modal";
import { modalSelector } from "../../../store/selectors/modalSelector";

import { Link } from "react-router-dom";
import styles from "./NavLinks.module.scss";

type NavLinksProps = {
  toggleDd?: Function | null;
  setModal: Function;
};

function NavLinks({ toggleDd = null, ...props }: NavLinksProps) {
  const toggle = () => {
    if (toggleDd) {
      //sprawdzic czy działa
      toggleDd();
    }
    props.setModal();
  };

  return (
    <div className={styles.navLinksContainer}>
      <div className={styles.linksWrapper}>
        <Link to="/">Home</Link>
        <Link to="/myfreezer">My freezer</Link>
      </div>
      <button onClick={toggle}>Sign in</button>
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
