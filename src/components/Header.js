import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaYoutube } from "react-icons/fa";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import fahmiimg from "../images/fahmi.png";

import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="section">
      <div className="intro">
        <hr />
        <span>
          Your <h1>Dream</h1> Body
        </span>
        <h2>A few clicks away</h2>
      </div>

      <div className="shape">
        <div className="blue" />
        <img className="imgfahmi" src="./imgfahmi.png" alt="" />

        <div className="yellow">
          <img className="bg-grid" src="./icon.png" alt="bg-grid" />
        </div>
      </div>

      <div className="programs">
        <Link to="online-coaching">
          <button className="programs-btn">Online coaching</button>
        </Link>
        <Link to="onetoonetraining">
        <button className="programs-btn">One to One Training</button>
        </Link>
        <Link to="CustomizeDietPlanner">
        <button className="programs-btn">Customize diet planner</button>
        </Link>
        <button className="programs-btn">Group Training</button>
      </div>

      <div className="text">
        <h1>Our programs</h1>
        <hr />
      </div>
    </div>
  );
};

export default Header;
