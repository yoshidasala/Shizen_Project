import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import NavBar from "./NavBar";
import Anime from "react-anime";

function Other(props, state) {
  return (
    <div>
      <div>
        <Anime
          easing='easeInOutExpo'
          duration={3000}
          direction='linear'
          rotate='-40'
          loop={true}
        >
          <div className='square'></div>
          <div className='square'></div>
          <div className='square'></div>
        </Anime>
      </div>
      <NavBar className='allwaternav'></NavBar>
      <Anime
        target='p'
        easing='easeInOutSine'
        rotate={[0, -60]}
        duration={3000}
        direction='alternate'
        loop={true}
        translateX='30rem'
      >
        <div className='rod'>
          <div className='pivot' />
          <div className='ball' />
        </div>
      </Anime>
      
    </div>
  );
}

export default Other;
