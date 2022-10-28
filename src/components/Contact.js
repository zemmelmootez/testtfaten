import { Link } from "react-router-dom";
import fcb from "../images/fcb.svg";
import insta from "../images/insta.svg";
import youtube from "../images/youtube.svg";
import contacticon from "../images/contacticon.png";
import { MdOutlineLocationOn,MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import Formul from "./Formul";
import React, { useEffect, useRef, useState } from "react";
import '../Styles/Contact2.css'
const Contact = () => {
  return (
    <div className="section-elements contact">
      <img className="contacticon" src={contacticon} alt="" />
      <div className="contact-description">
        <div className="element-contact">
          <h1 className="title">Contact us</h1>
          <p>
          I will get back to you within 24 hours so please feel free to ask anything about my services.
          </p>
          <div className="social-media-icons">
            <a href="https://www.facebook.com">
              <img src={fcb} alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={insta} alt="" />
            </a>
            {/* <a href="https://www.youtube.com/">
              <img src={youtube} alt="" />
            </a> */}
          </div>
        </div>


      </div>
      <div className="social-media-section">
                  <div className="social-media">
        <ul>
    <li> <MdOutlineLocationOn fill="#CDD4DE"  className="react-icons"/> doha qatar</li>
    {/* <li> <BsTelephone fill="#CDD4DE"  className="react-icons"/> +974 7041 8226</li> */}
    <li> <MdOutlineMail fill="#CDD4DE" className="react-icons" /> fahmi.training@gmail.com</li>
</ul>
        </div>
        </div>
      <div className="form">
        <div className="contact-form">
          <h1 className="contact-form-title">Speak your mind</h1>
        
          <Formul />
        </div>
      </div>
    </div>
  );
};

export default Contact;
