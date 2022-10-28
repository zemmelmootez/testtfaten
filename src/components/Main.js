import React from "react";
import logo from "../images/logo.png";
import fahmibfit from "../images/fahmibfit.png";
import gym from "../images/gym.png";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div>
          <img src={logo} alt="" />
          <img src={fahmibfit} alt="" />
        </div>

        <div>
          {/* <ul className="nav"> */}
            <li>Programs</li>
            <li>About us</li>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          {/* </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
