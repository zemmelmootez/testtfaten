import React from "react";
import beforeafter from "../images/beforeafter.png";
import pattern from "../images/patternbaf.png";
import "../Styles/BeforeAndAfter.css";
import CardTouch from "./CardTouch";
import { NavLink } from "react-router-dom";
const BeforeAndAfter = () => {
  return (
    <div className="section-elements-beforeandafter">
      <img src={beforeafter} alt="" className="zigzag" />
      <img src={pattern} alt="" className="pattern-blue" />
      <div className="element-beforeandafter">
        <h1 className="title">Before and after</h1>
        <p>
        People just like you saw dramatic changes with their custom built plans
        </p>
      </div>
      <div className="submit-oto">
      <NavLink to="/onetoonetraining">
        <button className="btn-oto">Get your own one to one training</button>
        </NavLink>
      </div>
      <div className="touch">
        <div>
          <CardTouch />
        </div>
      </div>
    </div>
  );
};

export default BeforeAndAfter;
