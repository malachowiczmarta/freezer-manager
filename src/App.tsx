import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./rootReducers";

import "./App.module.scss";
import Nav from "./components/nav/container/Nav";
import Home from "./pages/home/Home";
import MyFreezer from "./pages/myFreezer/MyFreezer";
import Alert from "./ui/alert/Alert";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Nav />
            <Alert/>
            <Switch>
              <Route path="/myfreezer">
                <MyFreezer />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
