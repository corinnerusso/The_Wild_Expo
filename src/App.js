import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Principal from "./components/pincipal/Principal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Principal" component={Principal} />
      </Switch>
    </div>
  );
}

export default App;
