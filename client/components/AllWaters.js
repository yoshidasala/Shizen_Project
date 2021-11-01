import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";


class AllWaters extends Component {
  componentDidMount() {
    // this.props.fetchAll();
  }
  render() {
    return (
      <div className='pagecontainer'>
        <div className='spacer'></div>
        <NavBar className='allwaternav'></NavBar>
        <header>
          <Typography
            variant='h1'
            color='textSecondary'
            align='center'
            gutterBottom
          >
            SUI . WATER
          </Typography>
          <Typography variant='p' color='main' align='center' gutterBottom>
            Japanese people have long appreciated the presence of life in all
            aspects of nature—from landscapes and climates that change
            seasonally.Their reverence for natural life enables them to coexist
            with nature.
          </Typography>
        </header>

        <div className='homewrapper'>
          <Grid container spacing={3} justifyContent='center'>
            <Grid item xs={12}>
              <Paper >
                <img
                  className='eachimage'
                  src='https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                />{" "}
                <img
                  className='eachimage'
                  src='https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                />
                <img
                  className='eachimage'
                  src='https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                />
                <img
                  className='eachimage'
                  src='https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <img
                  className='eachimage'
                  src='https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <img
                  className='eachimage'
                  src='https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default AllWaters;
