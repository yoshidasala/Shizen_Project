import React, { Component } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Anime from "react-anime";
import { fetchWaters } from "../store/waters";

const AllWaters = () => {
  const waters = useSelector((state) => state.waters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWaters());
  }, []);

  return (
    <div className='pagecontainer'>
      <NavBar className='allwaternav'></NavBar>
      <header>
        <Anime
          easing='easeInOutSine'
          duration={3000}
          direction='alternate'
          loop={false}
          translateX='10px'
        >
          <Typography
            variant='h1'
            color='textSecondary'
            align='center'
            gutterBottom
            className='pagetitle'
          >
            SUI . WATER
          </Typography>
        </Anime>

        <Typography
          variant='p'
          color='main'
          align='center'
          className='pagetext'
          gutterBottom
        >
          Japanese people have long appreciated the presence of life in all
          aspects of nature—from landscapes and climates that change
          seasonally.Their reverence for natural life enables them to coexist
          with nature.
        </Typography>
      </header>
      <div className='homewrapper'>
        <Grid
          className='imagecontainer'
          container
          spacing={3}
          justifyContent='center'
        >
          {waters.map((each) => (
            <Grid key={each.name} className='imagewrap' item xs={12}>
              <Paper>
                <img className='eachimage' src={each.imageUrl} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default AllWaters;
