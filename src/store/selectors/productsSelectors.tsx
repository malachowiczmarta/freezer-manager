import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../reducers/rootReducer";
import { IProductState } from "../reducers/products";

export const selectProducts = (state: RootState) => {
  return state.products;
};

export const productsSelector = createSelector(
  [selectProducts],
  (state: IProductState) => (state ? state.products : [])
);
