import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  banner: {
    width: "auto",
    backgroundImage: `url(${"https://images.unsplash.com/photo-1520312501384-dbdb83a1cb11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80"})`,
    backgroundSize: 'cover',
    '&:hover': {
      backgroundImage: `url(${"https://images.unsplash.com/photo-1627232091753-a1e2aa39e985?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"})`,
      opacity: 50
    }
  }
})

function Home  (){
  const classes = useStyles()
    return (
      <div className='homepagecontainer'>
        <div className='main'>
          <div className =  { `bannerimage ${classes.banner}`} >
            {" "}
            <Link to='/'>
              {" "}
              <h1 className= { `welcome ${classes.btn}`} >SHIZEN</h1>
            </Link>{" "}
            <h3 className='welcome2'> our planets most powerful force</h3>
            <NavBar className = "homenav"></NavBar>
          </div>
        </div>
      </div>
    );

}

export default Home;
