import React, { useState } from "react";
import Dropdown from "../../ui/dropdown/Dropdown";
import styles from "./Nav.module.scss";
import NavLinks from "./NavLinks";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDd = () => {
      setIsOpen(!isOpen);
    };



  return (
    <div className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <span>freezer<br/>manager</span>
        <div className={styles.navLinksMobileContainer}>
            <Dropdown toggleDropdown={toggleDd} open={isOpen} variant="menu">
                <NavLinks />
            </Dropdown>
        </div>
        <div className={styles.navLinks}>
            <ul>
                <li>Home</li>
                <li>My freezer</li>
                <li>Freezer guide</li>
            </ul>
            <button>login</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
