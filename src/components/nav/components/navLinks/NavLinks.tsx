import React from "react";
import { connect } from "react-redux";
import {
  setAuthError,
} from "../../../../store/reducers/auth";
import {
  authLoadingSelector,
  authErrorSelector,
  isAuthenticatedSelector,
  emailSelector,
} from "../../../../store/selectors/authSelectors";

import { setModal } from "../../../../store/reducers/modal";
import { modalSelector } from "../../../../store/selectors/modalSelector";
import { Link } from "react-router-dom";
import styles from "./NavLinks.module.scss";
import AccountDd from "../accountDd/AccountDd";

type NavLinksProps = {
  toggleDd?: Function | null;
  setModal: Function;
  isAuthenticated: boolean;
  email: string;
  error: string;
};

function NavLinks({ toggleDd = null, ...props }: NavLinksProps) {
  const toggle = () => {
    if (toggleDd) {
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
      {props.isAuthenticated && props.email ? (
        <AccountDd />
      ) : (
        <button onClick={toggle}>Sign in</button>
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    showModal: modalSelector(state),
    isLoading: authLoadingSelector(state),
    error: authErrorSelector(state),
    isAuthenticated: isAuthenticatedSelector(state),
    email: emailSelector(state),
  };
};

const mapDispatchToPros = {
  setModal,
  setAuthError,
};

export default connect(mapStateToProps, mapDispatchToPros)(NavLinks);
