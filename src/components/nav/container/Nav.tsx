import React, { useState } from "react";
import { connect } from "react-redux";
import authService from "../../../service/authService";
import { initAuthentication, setAuthError } from "../../../store/reducers/auth";
import {
  authLoadingSelector,
  authErrorSelector,
} from "../../../store/selectors/authSelectors";


import Dropdown from "../../../ui/dropdown/Dropdown";
import styles from "./Nav.module.scss";
import NavLinks from "../components/NavLinks";

function Nav(props: any) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDd = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <span>freezer<br/>manager</span>
        <div className={styles.menuMobileContainer}>
            <Dropdown onClick={toggleDd} open={isOpen} variant="menu">
                <NavLinks toggleDd={toggleDd} />
            </Dropdown>
        </div>
        <div className={styles.navLinks}>
          <NavLinks />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  isLoading: authLoadingSelector(state),
  error: authErrorSelector(state),
});

const mapDispatchToProps = {
  initAuthentication,
  setAuthError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
