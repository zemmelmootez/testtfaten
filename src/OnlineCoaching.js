import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
const OnlineCoaching = () => {
  return (
    <div className="onlinecoaching">
      <div className="navbar-programs"></div>
      <h1 className="program-title">Online Coaching</h1>
      <img className="icon2" src="./icon2.png" />
      <div className="program-page-design">
        <div className="program-page">
          <div>images</div>
          <div>
            <h2 className="program-description">Program Description</h2>
            <p>
            Start your fitness journey on the right foot by booking a personalized live class from anywhere in the World!
            </p>
            <h2 className="program-description">What's Included</h2>

            <ul>
              <li>
                {" "}
                <AiOutlineCaretRight fill="#c79f5a" size="1.5em" /> List item 1
              </li>
              <li>
                {" "}
                <AiOutlineCaretRight fill="#c79f5a" size="1.5em" /> List item 2
              </li>
              <li>
                {" "}
                <AiOutlineCaretRight fill="#c79f5a" size="1.5em" /> List item 3
              </li>
              <li>
                {" "}
                <AiOutlineCaretRight fill="#c79f5a" size="1.5em" /> List item 4
              </li>
            </ul>
            <FormControl
              variant="standard"
              sx={{ m: 1, mt: 3, width: "78.5ch" }} //78.5 large
              style={{ paddingTop: "12px" }} //12px padding
              className="MuiInput-custom"
            >
              <InputLabel
                className="InputLabel"
                style={{ padding: "4px 6px 4px 20px" }}
                required
              >
                Your email
              </InputLabel>
              <Input
                style={{
                  padding: "0px 10px 0px",
                  // marginTop : "8px"
                }}
                id="standard-adornment-weight"
                aria-describedby="standard-weight-helper-text"
              />
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCoaching;
