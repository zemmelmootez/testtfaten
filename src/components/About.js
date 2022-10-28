import React from "react";
import patterncircleblack from "../images/pattern-circle-black.png";
import patterncirclebleu from "../images/pattern-circle-bleu.png";
import patterncircle from "../images/pattern-circle.png";
import "../Styles/About.css";
const About = () => {
  return (
    <div className="section-elements-about">
      <img src={patterncircleblack} alt="" className="pattern-circle-black" />
      <img src={patterncirclebleu} alt="" className="pattern-circle-bleu" />
      <div className="myPhoto">
        <img srcset={patterncircle} alt="" className="pattern-circle" />
      </div>
      <div>
        <div className="certifications">
          <h1 className="title-aboutme">About me</h1>

          <p>
            <ttzz>H</ttzz>ey! I'm Fahmi
          </p>
          <p>
            I am all about helping you to get better results in less time,
            giving you a greater understanding of training & nutrition
            programming, exercise execution, and how to overcome obstacles and
            maintain consistency.
          </p>
          <p>
            Since 2012 I’ve helped people around the world get in shape and
            build healthy habits that last.
          </p>
          <p>
            As an experienced personal trainer and conditioning coach I
            specialise in helping busy people fit scientific exercise and
            nutrition principles into demanding lifestyle to ensure they achieve
            and sustain the healthy body they desire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
