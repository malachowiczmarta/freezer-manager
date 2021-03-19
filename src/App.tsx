import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.module.scss";
import Nav from "./components/nav/container/Nav";
import Home from "./pages/home/Home";
import MyFreezer from "./pages/myFreezer/MyFreezer";
import Alert from "./ui/alert/Alert";
import Modal from "./ui/modal/Modal";


function App() {
  return (
    <div className="App">
        <Router>
          <Nav/>
          <Alert/>
          <Modal label="Sign in" />
          <Switch>
            <Route path="/myfreezer">
              <MyFreezer/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
