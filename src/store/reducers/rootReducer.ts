import { combineReducers } from "redux";
import productsReducer from "./products";
import alertsReducer from "./alerts";


const rootReducer = combineReducers({
    products: productsReducer,
    alerts: alertsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
