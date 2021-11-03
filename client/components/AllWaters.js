import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Anime from "react-anime";

const data = [
  {
    name: "Sendai",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    imageUrl:
      "https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Kawarahashi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    imageUrl:
      "https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Sonomama",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    imageUrl:
      "https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
  },
];
class AllWaters extends Component {
  componentDidMount() {
    // this.props.fetchAll();
  }
  render() {
    const datav = data;

    return (
      <div className='pagecontainer'>
        <NavBar className='allwaternav'></NavBar>
        <header>
          <Anime
            easing='easeInOutSine'
            duration={3000}
            direction='alternate'
            loop={false}
            translateX='30rem'
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
            spacing={6}
            justifyContent='center'
          >
            {datav.map((each) => (
              <Grid className='imagewrap' item xs={12}>
                <Paper>
                  <img className='eachimage' src={each.imageUrl} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default AllWaters;
