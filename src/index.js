import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import OnlineCoaching2 from "./OnlineCoaching2";
import Navbar from "./components/Navbar";
import OnetoOneTraining from "./OnetoOneTraining";
import CustomizeDietPlanner from "./CustomizeDietPlanner";
import NotFound from "./components/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Navbar />
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/online-coaching" element={<OnlineCoaching2 />} /> 
          <Route path="/onetoonetraining" element={<OnetoOneTraining />} /> 
          <Route path="/CustomizeDietPlanner" element={<CustomizeDietPlanner />} />  
        {/* <Route path='*' element={<NotFound/>}/>   */}
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
