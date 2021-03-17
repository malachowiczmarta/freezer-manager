import React, { useEffect } from "react";
import { connect } from "react-redux";
import { removeAlert } from "../../store/reducers/alerts";
import { IAlertState, AlertObject } from "../../store/reducers/alerts";
import styles from "./Alert.module.scss";

type AlertProps = {
  alerts: AlertObject[];
  removeAlert: Function;
}

function Alert(props: AlertProps) {
  const { alerts, removeAlert } = props;
  console.log(props);

  useEffect(() => {
    alerts.map((alert) => {
      console.log("set timeout", alert.displayFor)
      const timer = setTimeout(() => removeAlert(alert.id), alert.displayFor);
      return () => clearTimeout(timer);
    });
  }, [alerts, removeAlert]);

  return (
    <div>
      {alerts.map((alert: AlertObject) => (
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

const mapDispatchToProps = {
  removeAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
