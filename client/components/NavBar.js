import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className = "nav">
        <button className='navbutton'>
          <Link className='navbuttontxt'to='/'> HOME</Link>
        </button>
        <button className='navbutton'>
          <Link className='navbuttontxt'to='/waters'> MIZU</Link>
        </button>
        <button className='navbutton'>
          <Link className='navbuttontxt' to='/projects'> ... </Link>
        </button>
        <button className='navbutton'>
          <Link className='navbuttontxt'to='/robots'> ... </Link>
        </button>
        <button className='navbutton'>
          <Link className='navbuttontxt'to='/robots'> ... </Link>
        </button>
      </div>
    );
  }
}

export default NavBar;
