import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import { connect } from "react-redux";


import { fetchCollections } from "../store/collections";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Anime from "react-anime";



function Curate(props) {
  // const dispatch = useDispatch();
  const { name, displayName, handleSubmit, error } = props;

  // useEffect(() => {
  //   dispatch(fetchCollections());
  // }, []);
  return (
    <div className='pagecontainer'>
      <NavBar className='allwaternav'></NavBar>
      <header>
        
        <hr className='line' />
        <hr className='circle' />

        <Typography
          color='main'
          align='center'
          gutterBottom
          style={{
            fontFamily: "Monteserrat sans-serif",
          }}
        >
          Here you go. A beautiful collection of all the places you are curious
          about.
        </Typography>
        <button> log in </button>
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
