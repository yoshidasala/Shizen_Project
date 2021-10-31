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
      <div className='allwaterscontainer'>
        <div className='main'>
          <NavBar className='allwaternav'></NavBar>
          <div className='homewrapper'>
            <div className='col'>
              <img
                className='eachimage'
                src='https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
              />
            </div>
            <div className='col'>
              <img
                className='eachimage'
                src='https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
              />
            </div>
            <div className='col'>
              <img
                className='eachimage'
                src='https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
              />
            </div>

            <div className='col'>
              <img
                className='eachimage'
                src='https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
              />
            </div>
            <div className='col'>
              <img
                className='eachimage'
                src='https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
              />
            </div>
            <div className='col'>
              <img
                className='eachimage'
                src='https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllWaters;
