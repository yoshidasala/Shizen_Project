import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { CardMedia } from "@mui/material";

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
      <div><div className = "particles-js"></div>
        <NavBar className='allwaternav '></NavBar>

        <div class='container'>
          <div class='title'></div>
          <header>
            <Typography
              variant='h1'
              color='textSecondary'
              align='center'
              gutterBottom
              className='pagetitle'
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
              seasonally.Their reverence for natural life enables them to
              coexist with nature.
            </Typography>
          </header>
          <div class='blur'></div>
          <div class='blur'></div>

          <div class='content'>
            <div class='content-wrapper'>
              <div class='content-images'>
                <div class='content-image-wrapper two'>
                  <img src='https://images.unsplash.com/photo-1550433251-d1a8ff40ff05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
                  <h4>E</h4>
                </div>
              </div>
              <p class='text'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllMountains;
