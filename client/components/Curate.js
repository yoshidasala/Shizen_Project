import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import NavBar from "./NavBar";
import Anime from "react-anime";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { fetchCollections } from "../store/collections";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Curate(props, state) {
  const collections = useSelector((state) => state.collections);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
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
            collection
          </Typography>
        </Anime>
        <hr className='line' />

        <Typography
          color='main'
          align='center'
          className='pagetext'
          gutterBottom
        >
          Here you go. A beautiful collection of all the places you are curious
          about.
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
      {/* <div className='homewrapper'>
        <Grid
          className='imagecontainer'
          container
          spacing={3}
          padding={12}
          justifyContent='center'
        >
          {collections.map((each) => (
            <Grid
              key={each.name}
              className='imagewrap'
              item
              xs={12}
              md={6}
              lg={3}
            >
              <Paper>
                {each.name}
                <img className='eachimage' src={each.imageUrl} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div> */}

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
      <div className='content'>
        <div className='content-images'></div>
        <p className='text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}

export default Curate;
