import React from "react";
import styles from "./Home.module.scss";
import { ReactComponent as WomenImg } from "../../assets/img/OpenDoodles.svg";

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.header}>
          <h1>
            store food safely
            <br />
            in the freezer
          </h1>
          <h2>Control what and how long you keep in the freezer.</h2>
        </div>
        <WomenImg />
      </div>
    </div>
  );
}

export default Home;
