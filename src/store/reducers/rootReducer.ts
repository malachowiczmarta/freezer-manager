import { combineReducers } from "redux";
import productsReducer from "./products";
import alertsReducer from "./alerts";
import authReducer from "./auth"


const rootReducer = combineReducers({
    products: productsReducer,
    alerts: alertsReducer,
    auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
