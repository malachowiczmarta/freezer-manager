import React, { useState } from "react";
import { connect } from "react-redux";
import authService from "../../../../service/authService";
import {
  initAuthentication,
  setAuthError,
} from "../../../../store/reducers/auth";
import {
  authLoadingSelector,
  authErrorSelector,
  isAuthenticatedSelector,
  emailSelector,
} from "../../../../store/selectors/authSelectors";
import alertService from "../../../../service/alertService";

import styles from "./AccountDd.module.scss";
import Dropdown from "../../../../ui/dropdown/Dropdown";

function AccountDd(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccountDd = () => {
    console.log("click account");
    setIsOpen(!isOpen);
  };

  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    authService.signOut();
    alertService.addSuccessAlert("You have been sign out successfully.");
  };

  return (
    <>
      {props.error && <p>{props.error}</p>}
      <Dropdown onClick={toggleAccountDd} open={isOpen} variant="account">
        <div className={styles.signOutWrapper}>
          <p>{props.email}</p>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleSignOut(e)
            }
          >
            Sign Out
          </button>
        </div>
      </Dropdown>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: authLoadingSelector(state),
    error: authErrorSelector(state),
    isAuthenticated: isAuthenticatedSelector(state),
    email: emailSelector(state),
  };
};

const mapDispatchToPros = {
  initAuthentication,
  setAuthError,
};

export default connect(mapStateToProps, mapDispatchToPros)(AccountDd);
