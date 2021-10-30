import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

class Home extends Component {
  render() {
    return (
      <div className='homepagecontainer'>
        <div className='main'>
          <div id='bannerimage'>
            {" "}
            <Link to='/'>
              {" "}
              <h1 className='welcome'>SHIZEN</h1>
            </Link>{" "}
            <h3 className='welcome2'> our planets most powerful force</h3>
            <NavBar></NavBar>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
