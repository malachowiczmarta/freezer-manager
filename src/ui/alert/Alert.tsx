import React from "react";
import { connect } from "react-redux";
import { IAlertState } from "../../store/reducers/alerts";
import styles from "./Alert.module.scss";

function Alert(props: IAlertState) {
  console.log(props);
  return (
    <div>
      {props.alerts.map((alert: Object) => (
        <div className={styles.wrapper}>
          <div className={styles.alertContainer}>
            <p>icon</p>
            <p>treść alertu</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    alerts: state.alerts.alerts,
  };
};

export default connect(mapStateToProps)(Alert);
