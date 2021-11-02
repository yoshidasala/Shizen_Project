import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import NavBar from "./NavBar";
import Anime, { anime } from "react-anime";

function Other() {
  return (
    <div>
      <NavBar className='allwaternav'></NavBar>
      <div className='rod' />
        <div className='pivot' />
        <div className='ball' />
      <Anime delay={anime.stagger(100)} scale={[0.1, 0.9]}>
        <div className='rod' />
        <div className='pivot' />
        <div className='ball' />
      </Anime>
    </div>
  );
}

export default Other;
