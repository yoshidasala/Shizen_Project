import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import AllWaters from "./AllWaters";
import AllMountains from "./AllMountains";
import Other from "./Other";
import { createTheme, ThemeProvider } from "@mui/material";
import anime from "animejs/lib/anime.es.js";

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
          <Route exact path='/waters'>
            {" "}
            <AllWaters />{" "}
          </Route>
          <Route exact path='/mountains'>
            {" "}
            <AllMountains />{" "}
          </Route>
          <Route exact path='/other'>
            {" "}
            <Other />{" "}
          </Route>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
