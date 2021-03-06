import { createSelector } from "@reduxjs/toolkit";
import { IAlertState } from "../reducers/alerts";
import { RootState } from "../reducers/rootReducer";

export const selectAlerts = (state: RootState) => {
  return state.alerts;
};

export const alertsSelector = createSelector(
  [selectAlerts],
  (state: IAlertState) => (state ? state.alerts : [])
);
