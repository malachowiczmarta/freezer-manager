import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/nav/container/Nav";
import Home from "./pages/home/Home";
import MyFreezer from "./pages/myFreezer/MyFreezer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/myfreezer">
            <MyFreezer />
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
