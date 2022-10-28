import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Carousel from "./Carousel";
import Card from "./Card";

import pattern from "../images/patternbaf.png";
// import program1 from "../images/online-coaching.png";
import program1 from "../images/online-coaching.jpeg";
import program2 from "../images/oto-training.png";
import program3 from "../images/diet.png";
import program4 from "../images/group.png";
import patternblue from "../images/patternblue.png";

import "../Styles/Programs.css";

const Programs = () => {
  const [keyword, setKeyword] = useState(3);

  const cards = [
    {
      key: 1,
      content: (
        <Card
          // imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg"
          imagen={program1}
          title="Online coaching"
          position="1"
          description="jnenj,flk"
        />
      ),
      imagen: program1,
    },
    {
      key: 2,
      content: (
        <Card
          // imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png"
          imagen={program2}
          title="One to One Training"
          position="2"
          description="All the exercises that work for your body type...and get you serious RESULTS!"
        />
      ),
      imagen: program2,
    },
    {
      key: 3,
      content: (
        <Card
          // imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png"
          imagen={program3}
          title="Customize diet planner"
          position="3"
          description="The best fat-burning and muscle-building foods designed for your body type and metabolism."
        />
      ),
      imagen:program3,
    },
    {
      key: 4,
      content:
      //  <div />
      (
        <Card
          imagen={program4}
          title="Group Training"
          position="4"
        />
      ),
      imagen:program4,
    },
    {
      key: 5,
      content: <div />,
    },
  ];

  const getKeyword = (key) => {
    key && setKeyword(key);
  };

  return (
    <div className="section-elements-programs">
      <img src={pattern} alt="" className="pattern" />
      <img src={patternblue} alt="" className="pattern-blue" />
      <div className="element">
        <h1 className="title-programs">Programs</h1>
        <p>
        As a Fitness and Nutrition Coach, my goal is to prove that people of all shapes and sizes can become fit and healthy according to their own personal ideals. All of our training programs guaranteed to help you achieve your
fitness goals.
        </p>
        <div className="our-programs-responsive">
          {cards?.map(
            (item, index) =>
              index < 4 && (
                
                <Link to=
                  {item.key === 1
                    ? "/online-coaching"
                    : keyword === 2
                    ? "/onetoonetraining"
                    : keyword === 3
                    ? "/CustomizeDietPlanner"
                    : keyword === 4
                    ? "/4"
                    : "/4"}
               >
                <div className="box-program" key={item.key} aria-hidden="true">
                 
                       <img
                    src={item.imagen}
                    alt="img"
                    onClick={() => getKeyword(item.key)}
                  />
                 
               
                </div> </Link>
              )
          )}
        </div>
        <div className="btn-booking">
          <Link
            to={
              keyword === 0
                ? "/online-coaching"
                : keyword === 1
                ? "/online-coaching"
                : keyword === 2
                ? "/online-coaching"
                : "/online-coaching"
            }
          >
            <button className="btn-programs">
              {keyword === 0
                ? "Book Online coaching sessions "
                : keyword === 1
                ? "Book online one to one training sessions"
                : keyword === 2
                ? "Book Customize diet planner sessions"
                : keyword === 3
                ? "Book Group Training sessions"
                : "Book Online coaching sessions"}
            </button>
          </Link>
        </div>
      </div>
      <div className="our-programs">
        <Carousel
          getKeyword={getKeyword}
          cards={cards}
          width="10%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
    </div>
  );
};

export default Programs;
