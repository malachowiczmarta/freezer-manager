import React from "react";
import styles from "./Home.module.scss";
import { ReactComponent as WomenImg } from "../../assets/img/OpenDoodles.svg";
import Form from "../../components/form/container/Form";

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.header}>
            <h1>store food safely in the freezer</h1>
            <h2>Control what and how long you keep in the freezer.</h2>
          </div>
          <WomenImg />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Home;
