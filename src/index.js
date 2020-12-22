import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Home from "./modules/Home/Home";
import NotFound from "./modules/NotFound/NotFound";
import SecretWrapper from "./modules/Secret/SecretWrapper";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" render={Home} />
        <Route exact path="/secret/:secretKey" render={SecretWrapper} />
        <Route path="*" render={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
