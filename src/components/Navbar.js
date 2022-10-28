import React, { useEffect, useState } from "react";
// import { Link } from "react-scroll";
import { Link } from "react-scroll";
import * as FaIcons from "react-icons/fa";

import logo from "../images/logo.png";
import fahmibfit from "../images/fahmibfit.png";

import "../Styles/NavBar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  const showSidebar = () => setSidebar(!sidebar);
  const showMe = () => {console.log('nfjn')};
  return (
    <div
      className={scrolled ? "navbar-dreamhouse-scrolled" : "navbar-dreamhouse"}
    >
      <div className="navb">
        <NavLink to="/">
          <img className="logo" src={logo} alt="" />
          <img src={fahmibfit} alt="" />
        </NavLink>
        <div>
          <NavLink to="/programs" className="navi" activeClass="active">
            Programs
          </NavLink>
          <NavLink to="/aboutUs" className="navi" activeClass="active">
            About me
          </NavLink>
          <NavLink to="/contact" className="navi" activeClass="active">
            Contact
          </NavLink>
        </div>
        <button className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </button>
      </div>

      <div className={`drawer ${sidebar && "drawer-is-open"}`}>
        <ul>
          <li>
            <Link to="programs" className="navi" onClick={showSidebar}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="aboutUs" className="navi" onClick={showSidebar}>
              About me
            </Link>
          </li>
          <li>
            <Link to="contact" className="navi" onClick={showSidebar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
