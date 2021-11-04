import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import NavBar from "./NavBar";
import Anime from "react-anime";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function Other(props, state) {
  return (
    <div>
      <div>
        <NavBar className='allwaternav'></NavBar>
      </div>
      <div>
        <div className='particles-js'></div>

        <div className='container'>
          <NavBar className='allwaternav'></NavBar>

          <header>
            <Typography
              variant='h1'
              color='textSecondary'
              align='center'
              gutterBottom
            >
              YOUR LIST
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
          <Anime
            easing='easeInOutSine'
            rotate={[0, -60]}
            duration={3000}
            direction='alternate'
            loop={true}
            justifyContent='center'
            translateX='30rem'
          >
            <div className='pivot'>
              <div className='ball' />
            </div>
          </Anime>
        </div>
      </div>
    </div>
  );
}

export default Other;
