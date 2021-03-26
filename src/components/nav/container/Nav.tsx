import React, { useState } from "react";

import { connect } from "react-redux";
import { setAuthError } from "../../../store/reducers/auth";
import {
  authLoadingSelector,
  authErrorSelector,
  isAuthenticatedSelector,
  emailSelector,
} from "../../../store/selectors/authSelectors";

import { setModal } from "../../../store/reducers/modal";
import { modalSelector } from "../../../store/selectors/modalSelector";

import styles from "./Nav.module.scss";
import NavLinks from "../components/navLinks/NavLinks";
import MobileMenu from "../components/mobileMenu/MobileMenu";
import AccountDd from "../components/accountDd/AccountDd";
import { ReactComponent as AccountIcon } from "../../../assets/icon/account.svg";

function Nav(props: any) {
  const showSignInModal = () => {
    props.setModal();
  };

  return (
    <div className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <div className={styles.mobileHeader}>
          <div className={styles.menuMobileContainer}>
            <MobileMenu />
          </div>
          <span>
            freezer
            <br />
            manager
          </span>
        </div>
        <div className={styles.navLinks}>
          <NavLinks />
        </div>
        {props.isAuthenticated && props.email ? (
          <AccountDd />
        ) : (
          <button onClick={showSignInModal}>
            <AccountIcon />
          </button>
        )}
      </div>
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

export default connect(mapStateToProps, mapDispatchToPros)(Nav);
