import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

class AllWaters extends Component {
  componentDidMount() {
    // this.props.fetchAll();
  }
  render() {
    return (
      <div><NavBar className='allwatersnav'>this is the nav</NavBar>
      <div className='allwaterscontainer'>
        <div>hello</div>
        <div className='homewrapper'>

        </div>
        </div>
        </div>
    );
  }
}

export default AllWaters;
