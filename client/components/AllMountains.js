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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

class AllMountains extends Component {
  componentDidMount() {
    // this.props.fetchAll();
  }

  render() {
    return (
      <div>
        <div className='particles-js'></div>

        <div className='container'>
          <NavBar className='allwaternav'></NavBar>

          <video className='bvideo' autoPlay loop muted>
            <source src='/volcano.mp4' type='video/mp4' />
          </video>
          <header>
            <Typography
              variant='h1'
              color='textSecondary'
              align='center'
              gutterBottom
              style={{
                color: "white",
              }}
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

          <div className='content'>
            <div className='content-images'>
              <div className='content-image-wrapper two'>
                <img className='tree' src='./tree.jpg' />
                <h4>9</h4>
              </div>
            </div>
            <p className='text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AllMountains;
