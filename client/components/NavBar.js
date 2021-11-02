import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, LoadingButton } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    fontSize: 20,
  },
});

function NavBar() {
  const classes = useStyles();

  return (
    <div className='nav'>
      <Button color='primary' size='large'>
        <Link className={`navbuttontxt ${classes.btn}`} to='/'>
          {" "}
          HOME
        </Link>
      </Button>
      <Button color='primary' size='large'>
        <Link className={`navbuttontxt ${classes.btn}`} to='/waters'>
          {" "}
          SUI
        </Link>
      </Button>
      <Button color='primary' size='large'>
        <Link className={`navbuttontxt ${classes.btn}`} to='/mountains'>
          {" "}
          CHI
        </Link>
      </Button>
      <Button color='primary' size='large'>
        <Link className={`navbuttontxt ${classes.btn}`} to='/other'>
          {" "}
          SUGI
        </Link>
      </Button>
    </div>
  );
}

export default NavBar;
