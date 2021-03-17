import { createSelector } from "@reduxjs/toolkit";
import {IAlertState} from "../reducers/alerts";
import {RootState} from "../reducers/rootReducer";
import {IProductState} from "../reducers/products";

export const selectAlerts = (state: RootState) => {
  return state.alerts;
};

export const alertsSelector = createSelector(
    [selectAlerts],
    (state: IAlertState) => state ? state.alerts : []
);

export const selectProducts = (state: RootState) => {
  return state.products;
};

export const productsSelector = createSelector(
    [selectProducts],
    (state: IProductState) => state ? state.products : []
);
