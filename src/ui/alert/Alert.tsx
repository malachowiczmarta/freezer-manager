import React from "react";
import { connect } from "react-redux";

type AlertProps = {
  children: any;
};

function Alert({ children, ...props }: AlertProps) {
  return <div>{children}</div>;
}

const mapStateToProps = (state: any) => {
  return {
    alerts: state.alerts.alerts,
  };
};

export default connect(mapStateToProps)(Alert);
