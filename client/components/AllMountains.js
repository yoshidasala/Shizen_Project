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
import { fetchWaters } from "../store/waters";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const AllMountains = () => {
  const waters = useSelector((state) => state.waters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWaters());
  }, []);

  return (
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
            seasonally.Their reverence for natural life enables them to coexist
            with nature.
          </Typography>
        </header>

        <img
          className='banner'
          src='https://images.unsplash.com/photo-1599663096647-fdcf4e951f9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
        />
      </div>
      <div className='content'>
        <div className='content-images'>
          <div className='content-image-wrapper two'>
            <img className='tree' src='./tree.jpg' />
            <h4>9</h4>
          </div>
        </div>
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
};

export default AllMountains;
