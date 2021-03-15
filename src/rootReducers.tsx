import { combineReducers } from "redux";
import productsReducer from "./store/reducers/products"
import alertsReducer from "./store/reducers/alerts"


const rootReducer = combineReducers({
  products: productsReducer,
  alerts: alertsReducer,
});

export default rootReducer;