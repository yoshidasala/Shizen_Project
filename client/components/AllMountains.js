import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

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
    
    <div className = "chi">
      <NavBar className='allwaternav'></NavBar>

         
        <header className= "header">
        <h1 className = "title">
          CHI . LAND
        </h1>
        
        <h2  className = "subTitle" >
          Japanese people have long appreciated the presence of life in all
          aspects of nature—from landscapes and climates that change
          seasonally.Their reverence for natural life enables them to coexist
          with nature.
        </h2>
      </header>
        <div className='allcontainer'>
          {mountains.length > 0
            ? mountains.map((mountain) => (
                <div className='eachcontainer' key={mountain.id}>
                  <div>
                    <Link to={`/mountains/${mountain.id}`}>
                      <img className='eachimages' src={mountain.imageUrl} />
                    </Link>
                  </div>
                </div>
              ))
            : "There are no mountains registered in the database"}
        </div>
      
     
      
    </div>
  );
};

export default AllMountains;
