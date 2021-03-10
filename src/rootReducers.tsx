import { combineReducers } from "redux";
import productsReducer from "./store/reducers/products"

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;