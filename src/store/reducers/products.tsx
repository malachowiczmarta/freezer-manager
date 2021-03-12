import { Moment } from "moment";

const ADD_PRODUCT = "products/ADD_PRODUCT";
const DELETE_PRODUCT = "products/DELETE_PRODUCT";
export type ProductPayload = {
  name: string;
  category: string;
  date: Moment;
  expDate?: Moment;
  id: string;
};

const INITIAL_STATE = {
  products: [],
};

export const addProduct = (product: any) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (id: string) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product: ProductPayload) => {
          return product.id !== action.payload;
        }),
      };
    default:
      return state;
  }
}

export default reducer;
