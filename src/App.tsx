import React from "react";
import "./App.scss";
import Nav from "./components/nav/container/Nav";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
