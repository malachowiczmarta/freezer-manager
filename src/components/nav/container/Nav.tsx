import React, { useState } from "react";
import Dropdown from "../../../ui/dropdown/Dropdown";
import styles from "./Nav.module.scss";
import NavLinks from "../components/NavLinks";

function Nav() {
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
                <NavLinks />
            </Dropdown>
        </div>
        <div className={styles.navLinks}>
          <NavLinks />
        </div>
      </div>
    </div>
  );
}

export default Nav;
