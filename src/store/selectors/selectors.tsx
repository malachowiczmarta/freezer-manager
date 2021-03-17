import { createSelector } from "@reduxjs/toolkit";

export const selectAlerts = (state: any) => {
  return state.alerts;
};

export const alertsSelector = createSelector([selectAlerts], (state) =>
  state ? state.alerts : null
);

export const selectProducts = (state: any) => {
  return state.products;
};

export const productsSelector = createSelector([selectProducts], (state) =>
  state ? state.products : null
);
