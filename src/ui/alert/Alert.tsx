import React, { useEffect } from "react";
import { connect } from "react-redux";
import { removeAlert } from "../../store/reducers/alerts";
import { AlertObject } from "../../store/reducers/alerts";
import { ReactComponent as CheckIcon } from "../../assets/icon/check.svg";
import { ReactComponent as ErrorIcon } from "../../assets/icon/error.svg";
import { ReactComponent as InfoIcon } from "../../assets/icon/info.svg";
import { ReactComponent as WarningIcon } from "../../assets/icon/warning.svg";

import styles from "./Alert.module.scss";
import { AlertType } from "../../utils/types";

type AlertProps = {
  alerts: AlertObject[];
  removeAlert: Function;
};

function Alert(props: AlertProps) {
  const { alerts, removeAlert } = props;

  useEffect(() => {
    alerts.map((alert) => {
      const timer = setTimeout(() => removeAlert(alert.id), alert.displayFor);
      return () => clearTimeout(timer);
    });
  }, [alerts, removeAlert]);

  const setIcon = (type: any) => {
    let icon;
    if (type === AlertType.SUCCESS) {
      icon = <CheckIcon />;
    } else if (type === AlertType.ERROR) {
      icon = <ErrorIcon />;
    } else if (type === AlertType.INFO) {
      icon = <InfoIcon />;
    } else if (type === AlertType.WARNING) {
      icon = <WarningIcon />;
    }
    return icon;
  };

  return (
    <div>
      {alerts.map((alert) => {
        const alertIcon = setIcon(alert.type);
        return (
          <div
            key={`alert-${alert.id}`}
            className={`${styles.wrapper} ${alert.type && styles[alert.type]}`}
          >
            <span>{alertIcon}</span>
            <p>{alert.message}</p>
          </div>
        );
      })}
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
