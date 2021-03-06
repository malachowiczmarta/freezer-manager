import React, { useEffect, useRef, useState } from "react";
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
  const node: any = useRef();

  useEffect(() => {

    const handleClickOutside = (e: any) => {
      if (node.current && node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      setIsOpen(!isOpen);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
        <div ref={node} className={styles.signOutContent}>
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
