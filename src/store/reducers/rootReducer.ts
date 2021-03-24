import { combineReducers } from "redux";
import productsReducer from "./products";
import alertsReducer from "./alerts";
import authReducer from "./auth";
import modalReducer from "./modal";

const rootReducer = combineReducers({
  products: productsReducer,
  alerts: alertsReducer,
  auth: authReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
