import React, { Component } from "react";
import "../../static/css/home.css";
import image from "../../static/image/frontpageimage.png";
import Navigation from "./Navbar";
import About from "../about/about";
import Team from "../team/teams";
import Stats from "../stats/stats";
import PointTable from "../stats/pointtable";
import Footer from "./footer";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div className="ContDiv">
        <div className="header">
          <Navigation />
        </div>
        <div className="homepage row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6  image">
            <img className="frontpageimage" src={image} alt="Cricketer" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-5">
            <p className="flc">
              FIRST LOVE <span>CRICKET</span>
            </p>
            <button className="register--button">
              <Link to="/register">Register</Link>
            </button>
          </div>
        </div>
        <div className="main">
          <About />

          <Team />

          <Stats />

          <PointTable />

          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
