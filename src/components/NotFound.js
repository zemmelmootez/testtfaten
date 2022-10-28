import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound">
        <div>
          <h1>4</h1>
        </div>
        <div className="imgnotfound">
          <img src="./images/404.gif"/>  
        </div>
        <div>
          <h1>4</h1>
        </div>
      </div>
      <div className="lost">
        <h2> Look like you're lost </h2>
        <p>the page you are looking for not avaible!</p>
        <Link to="/">
          <button className="btn-lost">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
