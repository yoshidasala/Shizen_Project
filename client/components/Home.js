import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Anime, { anime } from "react-anime";

function Home() {
  return (
    <div className='homepagecontainer'>
      <div className='main'>
        <NavBar className='homenav'></NavBar>

        <Typography
          variant='h2'
          color='textSecondary'
          align='center'
          fontSize='20px'
          className='welcome2'
          style={{
            color: "white",
          }}
          gutterBottom
        >
          in japan
        </Typography>
        <Typography
          variant='h1'
          color='textSecondary'
          align='center'
          style={{
            color: "white",
          }}
          className='welcome'
          gutterBottom
        >
          SHIZEN
        </Typography>
        <Anime
          easing='easeInOutSine'
          duration={3000}
          direction='linear'
          loop={false}
          delay={anime.stagger(100)}
          scale={[0.1, 0.9]}
          translateY={[30, 100]}
        ></Anime>

        <video className='bvideo' autoPlay loop muted>
          <source src='/volcano.mp4' type='video/mp4' />
        </video>
      </div>
    </div>
  );
}

export default Home;
