import React from "react";
import { connect } from "react-redux";
import { IAlertState, AlertObject } from "../../store/reducers/alerts";
import styles from "./Alert.module.scss";

function Alert(props: IAlertState) {
  console.log(props);
  return (
    <div>
      {props.alerts.map((alert: AlertObject) => (
        <div key={`alert-${alert.id}`} className={styles.wrapper}>
            <span>icon</span>
            <p>{alert.message}</p>
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
