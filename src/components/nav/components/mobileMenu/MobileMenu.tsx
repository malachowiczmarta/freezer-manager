import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Dropdown from "../../../../ui/dropdown/Dropdown";
import styles from "./MobileMenu.module.scss";

function MobileMenu() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDd = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (path: string) => {
    setIsOpen(!isOpen);
    history.push(`/${path}`);
  };

  return (
    <>
      <Dropdown onClick={toggleDd} open={isOpen} variant="menu">
        <div className={styles.linksMobileContainer}>
            <button onClick={() => handleClick("")}>Home</button>
            <button onClick={() => handleClick("myfreezer")}>My freezer</button>
        </div>
      </Dropdown>
    </>
  );
}

export default MobileMenu;
