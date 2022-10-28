import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import CalculateBmi from "./components/CalculateBmi";
import Contact from "./components/Contact";
// import BeforeAndAfter from "./components/BeforeAndAfter";
import Header from "./components/Header";
import Scroll from "./components/Scroll";
import ScrollToTop from "react-scroll-to-top";
import Programs from "./components/Programs";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import CarouselPrograms from "./components/CarouselPrograms";
import Card from "./components/Card";

import OnlineCoaching2 from "./OnlineCoaching2";

import NotFound from "./components/NotFound";

import BeforeAndAfter from "./components/BeforeAndAfter";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import "./App.css";
function App() {
  return (  
    <div className="App">
      {/* <Navbar /> */}
      <ScrollContainer>
      <div id="header">
        <Header />
      </div>
      <div id="programs">
        <Programs />
      </div>
      <div id="aboutUs">
        <About />
      </div>
      <BeforeAndAfter />
      <div id="contact">
        <Contact />
      </div>
      <CalculateBmi />
      
     </ScrollContainer>
    </div>
  );
}

export default App;
