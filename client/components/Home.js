import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  banner: {
    width: "auto",
    backgroundImage: `url(${"https://images.unsplash.com/photo-1520312501384-dbdb83a1cb11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80"})`,
    backgroundSize: "cover",
    "&:hover": {
      backgroundImage: `url(${"https://images.unsplash.com/photo-1627232091753-a1e2aa39e985?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"})`,
      opacity: 50,
    },
  },
});

function Home() {
  const classes = useStyles();
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
        <video className='bvideo' autoPlay loop muted>
          <source src='/volcano.mp4' type='video/mp4' />
        </video>
      </div>
    </div>
  );
}

export default Home;
