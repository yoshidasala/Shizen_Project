import React from "react";
import AllWaters from "./AllWaters";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import AllWaters from "./AllWaters";

const Root = () => {
  return (
    <Router>
      <main>
        <Route exact path='/' component={Home} />
        <Route exact path='/waters' component={AllWaters} />
      </main>
    </Router>
  );
};

export default Root;
