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
  // const mountains = useSelector((state) => state.mountains);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMountains());
  // }, []);

  return (
    <div className='pagecontainer'>
      <NavBar className='allwaternav'></NavBar>
      <header classnName='pageTitle'>
        <h1
          variant='h1'
          color='textSecondary'
          align='center'
          gutterBottom
          className='pagetitle'
          style={{
            fontSize: "70px",
          }}
        >
          CHI . LAND
        </h1>

        <hr className='line' />

        <h2
          color='main'
          align='center'
          gutterBottom
          style={{
            fontFamily: "Open Sans,sans-serif",
          }}
        >
          Japanese people have long appreciated the presence of life in all
          aspects of nature—from landscapes and climates that change
          seasonally.Their reverence for natural life enables them to coexist
          with nature.
        </h2>
      </header>
      <div>hello</div>
    </div>
  );
};

export default AllMountains;
