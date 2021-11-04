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
import Anime from "react-anime";
import mountains, { fetchMountains } from "../store/mountains";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllMountains = () => {
  const mountains = useSelector((state) => state.mountains);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMountains());
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
            CHI . land
          </Typography>
        </Anime>
        <hr className='line' />

        <Typography
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
        <Anime
          easing='easeInOutQuad'
          duration={3000}
          width='100%'
          direction='linear'
          loop={false}
          // translateX= {[200, 250]}
        >
          <div className='line'></div>
        </Anime>
      </header>
      <div className='homewrapper'>
        <Grid
          className='imagecontainer'
          container
          spacing={3}
          padding = {22}
          justifyContent='center'
        >
          {mountains.map((each) => (
            <Grid
              key={each.name}
              className='imagewrap'
              item
              xs={12}
              md={8}
              lg={4}
            >
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

export default AllMountains;
