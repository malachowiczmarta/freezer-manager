import React from "react";
import { connect } from "react-redux";
import authService from "../../../service/authService";
import { initAuthentication, setAuthError } from "../../../store/reducers/auth";
import {
  authLoadingSelector,
  authErrorSelector,
  isAuthenticatedSelector,
  emailSelector,
} from "../../../store/selectors/authSelectors";
import alertService from "../../../service/alertService";

import { setModal } from "../../../store/reducers/modal";
import { modalSelector } from "../../../store/selectors/modalSelector";
import { Link } from "react-router-dom";
import styles from "./NavLinks.module.scss";

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

  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    authService.signOut();
    alertService.addSuccessAlert("You have been sign out successfully.");
  };

  return (
    <div className={styles.navLinksContainer}>
      <div className={styles.linksWrapper}>
        <Link to="/">Home</Link>
        <Link to="/myfreezer">My freezer</Link>
      </div>
      {props.isAuthenticated && props.email ? (
        <div className={styles.signOutWrapper}>
          {props.error && <p>{props.error}</p>}
          <p>{props.email}</p>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleSignOut(e)
            }
          >
            Sign Out
          </button>
        </div>
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
  initAuthentication,
  setAuthError,
};

export default connect(mapStateToProps, mapDispatchToPros)(NavLinks);
