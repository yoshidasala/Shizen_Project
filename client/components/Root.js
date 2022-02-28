import React from "react";
import {
  HashRouter as Router,
  withRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";

import AllMountains from "./AllMountains";
import Landing from "./Landing";
import Curate from "./Curate";
import { me } from "../store/collections";
import { createTheme, ThemeProvider } from "@mui/material";
import anime from "animejs/lib/anime.es.js";
import { connect } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#18191A",
    },
    secondary: {
      main: "#18191A",
    },
    typography: {
      fontFamily: "Zen+Kaku+Gothic+New",
    },
  },
});
const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <Router>
        <main>
          <Route exact path='/'>
            {" "}
            <Home />{" "}
          </Route>

          <Route exact path='/mountains'>
            {" "}
            <AllMountains />{" "}
          </Route>
          <Route exact path='/curate'>
            <Curate />
          </Route>
          <Route exact path='/landing'>
            <Landing />
          </Route>
        </main>
      </Router>
    </ThemeProvider>
  );
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default withRouter(connect(null, mapDispatch)(Root));
