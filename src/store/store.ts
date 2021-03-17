import storage from "redux-persist/lib/storage";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./reducers/rootReducer";

const defaultMiddleware = getDefaultMiddleware(({
   serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
   }
})),
epicMiddleware = createEpicMiddleware();

defaultMiddleware.push(epicMiddleware);

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["products"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: defaultMiddleware
});

export const persistor = persistStore(store);

export default store;
