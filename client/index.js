import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Root from "./components/root";
import store from "./store";
import { HashRouter as Router, Route } from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>,
  document.getElementById("app")
);
