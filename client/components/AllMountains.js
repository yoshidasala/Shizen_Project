import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const dummydata = [
  {
    id: 1,
    name: "green dragon",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "toyosu",
  },
  {
    id: 2,
    name: "green dragon",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "toyosu",
  },
  {
    id: 3,
    name: "green dragon",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "toyosu",
  },
];
class AllMountains extends Component {
  componentDidMount() {
    // this.props.fetchAll();
  }

  render() {
    return (
      <div className='pagecontainer'>
        <div className='spacer'></div>
        <NavBar className='allwaternav'></NavBar>

        <header>
          <Button color='primary' size='large' onClick={this.signInWithGoogle}>
            SIGN IN
          </Button>
          <Typography
            variant='h1'
            color='textSecondary'
            align='center'
            gutterBottom
          >
            CHI . LAND
          </Typography>
          <Typography
            variant='p'
            color='textSecondary'
            align='center'
            gutterBottom
          >
            Japanese people have long appreciated the presence of life in all
            aspects of nature—from landscapes and climates that change
            seasonally.Their reverence for natural life enables them to coexist
            with nature.
          </Typography>
        </header>

        <div className='homewrapper'>
          <p>
            {dummydata.map((data) => {
              <p key={data.id}>hello</p>;
            })}
          </p>
          <Grid container spacing = {3}>
            <Grid spacing={10} item xs={12} s={6} md={6}>
              <Paper>1</Paper>
            </Grid>
            <Grid spacing={10} item xs={12} s={6} md={6}>
              <Paper>2</Paper>
            </Grid>
            <Grid spacing={10} item xs={12} s={6} md={6}>
              <Paper>3</Paper>
            </Grid>
            <Grid spacing={10} item xs={12} s={6} md={6}>
              <Paper>4</Paper>
            </Grid>
            <Grid spacing={10} item xs={12} s={6} md={6}>
              <Paper>5</Paper>
            </Grid>
            <Grid spacing={10} item xs={12} s={6} md={6}>
              <Paper>6</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default AllMountains;
