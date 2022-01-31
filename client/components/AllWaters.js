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
import { BackgroundColor } from "chalk";

const AllWaters = () => {
  const waters = useSelector((state) => state.waters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWaters());
  }, []);

  return (
    <div className='pagecontainer'>
      <NavBar className='allwaternav'></NavBar>
      <div className="watercontainer">

        <div className></div>
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
            style={{
              fontSize: "70px",
            }}
          >
            SUI . WATER
          </Typography>
        </Anime>
        <hr className='line' />

        <Typography
          color='main'
          align='center'
          style={{
            fontFamily: "Open Sans,sans-serif",
          }}
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
        <h2 className="products-header"> All Peachy Furniture</h2>
      <div className="all-furniture">
        <div className="furniture-grid">
          {waters.map((product) => (
            <div key={product.id} className="furniture-item">
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.imageUrl}
                  className="images"
                />
                <p>{product.name}</p>
              </Link>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
      </div>





  );
};

export default AllWaters;
