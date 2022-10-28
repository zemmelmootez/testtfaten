import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineCaretRight } from "react-icons/ai";


const Result = () => {
  return <p>you result has been sent, i will contact you soon </p>;
};
const OnetoOneTraining = () => {
  const [result, setResult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xanfa2s",
        "template_gvwhroa",
        form.current,
        "user_vd1oAn8TKrnbuZlTd4J59"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };
  //hide result
  setTimeout(() => {
    setResult(false);
  }, 3000);
  return (
    <div className="onlinecoaching">
      <h1 className="program-title">One to One Training</h1>

      <img className="pattern" src="./icon2.png" alt="" />
      <div className="program-page-design">
        <div className="program-page">
          <div className="program-page-image">
            <div className="image" />
          </div>

          <div className="program-page-description">
            <h2>Program Description</h2>
            <p>
              Lose up to 15kg of fat , gain muscle , maintain , or prep for a
              show. This package covers all of your needs.
            </p>
            <h2>What's Included</h2>

            <ul>
              <li>
                <AiOutlineCaretRight fill="#c79f5a" size="1.5em" /> Customised diet plan  
              </li>
              <li>
                <AiOutlineCaretRight fill="#c79f5a" size="1.5em" /> Customised training program   ( beginners , intermediates , advanced ) 

              </li>
              <li>
                <AiOutlineCaretRight fill="#c79f5a" size="1.5em" /> Customised supplements plan
              </li>
              <li>
                <AiOutlineCaretRight fill="#c79f5a" size="1.5em" /> Weekly check ins & Updates through WhatsApp
              </li>
            </ul>
            {/* Custom Nutritional Targets
Dietary Needs
Adjust Meal Preferences */}
            <form ref={form} onSubmit={sendEmail}>
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "70ch" }} //70 large
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
                  }}
                  id="standard-adornment-weight"
                  aria-describedby="standard-weight-helper-text"
                  name="email"
                />
              </FormControl>
              <input
                type="text"
                value="One to One Training"
                name="subject"
                className="hideInput"
              />
              <div className="program-request">
                <input
                  type="submit"
                  value="Send message"
                  className="submit"
                />
              </div>
              <div>{result ? <Result /> : null}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnetoOneTraining;