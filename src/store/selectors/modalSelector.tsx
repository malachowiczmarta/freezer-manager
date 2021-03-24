import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../reducers/rootReducer";

export const selectModal = (state: RootState) => {
  return state.modal;
};

export const modalSelector = createSelector([selectModal], (state) =>
  state ? state.showModal : null
);
