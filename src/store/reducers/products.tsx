const ADD_PRODUCT = "products/ADD_PRODUCT";
const DELETE_PRODUCT = "products/DELETE_PRODUCT";
export type IProductPayload = {
  name: string;
  category: string;
  date: string;
  id: string;
}

const INITIAL_STATE = {
  products: [],
};

export const addProduct = (product: any) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (product: object) => ({
  type: DELETE_PRODUCT,
  payload: product,
});

function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
}

export default reducer;
