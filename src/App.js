import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Principal from "./components/pincipal/Principal";
import Infos from "./components/infos pratiques/Infos";
import Form from "./components/formulaire/Form";
import AmoPage from "./../src/components/artistes/Amo/AmoPage";
import DaleastPage from "./components/artistes/Daleast/DaleastPage";
import MarkoPage from "./components/artistes/Marko/MarkoPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Principal" component={Principal} />
        <Route path="/Infos" component={Infos} />
        <Route path="/Form" component={Form} />
        <Route path="/AmoPage" component={AmoPage} />
        <Route path="/DaleastPage" component={DaleastPage} />
        <Route path="/MarkoPage" component={MarkoPage} />
      </Switch>
    </div>
  );
}

export default App;
