import React, { useState,useRef } from 'react'
import emailjs from '@emailjs/browser';
import "../Styles/CalculateBmi.css"
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  TextField,TextareaAutosize
} from "@mui/material";
const Result=()=>{
  return(
      <p>you result has been sent, i will contact you soon </p>
  )
}
const Formul = () => {
  const [result, setResult] = useState(false)
const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xanfa2s', 'template_96qox2h', form.current, 'user_vd1oAn8TKrnbuZlTd4J59')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setResult(true)
      };
      //hide result
      setTimeout( ()=>{
          setResult(false)
      },3000)
  
  return (
 
      <div style={{overflow:"hidden"}}>
        <form ref={form} onSubmit={sendEmail}>
        <div>
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "78.5ch" }} //78.5 large 
                style={{ paddingTop: "12px" ,width:"100%"}} //12px padding
                className="MuiInput-custom"
               
              >
                <InputLabel
                  className="InputLabel"
                  style={{ padding: "4px 6px 4px 20px" }}
                  required
                >
                  Your name
                </InputLabel>
                <Input
                  style={{
                    padding: "0px 10px 0px",
                    // marginTop : "8px"
                  }}
                  id="standard-adornment-weight"
                  aria-describedby="standard-weight-helper-text"
                  name="name"
                />
              </FormControl>
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "78.5ch" }} //78.5 large 
                style={{ paddingTop: "12px" ,width:"100%"}} //12px padding
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
                  name="email"
                />
              </FormControl>
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "78.5ch" }} //78.5 large 
                style={{ paddingTop: "12px",width:"100%" }} //12px padding
                className="MuiInput-custom"
               
              >
                <InputLabel
                  className="InputLabel"
                  style={{ padding: "4px 6px 4px 20px" }}
                  required
                >
                  Subject
                </InputLabel>
                <Input
                  style={{
                    padding: "0px 10px 0px",
                    // marginTop : "8px"
                  }}
                  id="standard-adornment-weight"
                  aria-describedby="standard-weight-helper-text"
                  name="email"
                />
              </FormControl>
            </div>
          {/* <div style={{ display: "flex" }}>
            <div>
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "25ch" }}
                style={{ paddingTop: "12px" }}
                className="MuiInput-custom"
               
              >
                <InputLabel
                  className="InputLabel"
                  style={{ padding: "4px 6px 4px 20px" }}
                >
                  Weight
                </InputLabel>
                <Input
                  style={{
                    padding: "0px 10px 0px",
                    // marginTop : "8px"
                  }}
                  id="standard-adornment-weight"
                  aria-describedby="standard-weight-helper-text"
                  name="weight"
                />
              </FormControl>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "25ch" }}
                style={{ paddingTop: "12px" }}
                className="MuiInput-custom"
               
              >
                <InputLabel
                  className="InputLabel"
                  style={{ padding: "4px 6px 4px 20px" }}
                >
                  Height
                </InputLabel>
                <Input
                  style={{
                    padding: "0px 10px 0px",
                    // marginTop : "8px"
                  }}
                  id="standard-adornment-height"
                  aria-describedby="standard-weight-helper-text"
                  name="height"
                />
              </FormControl>
            </div>
            <div>
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "25ch" }}
                style={{ paddingTop: "12px" }}
                className="MuiInput-custom"
               
              >
                <InputLabel
                  className="InputLabel"
                  style={{ padding: "4px 6px 4px 20px" }}
                >
                  Age
                </InputLabel>
                <Input
                  style={{
                    padding: "0px 10px 0px",
                    // marginTop : "8px"
                  }}
                  id="standard-adornment-age"
                  aria-describedby="standard-age-helper-text"
                  name="age"
                />
              </FormControl>
            </div>
            
          </div> */}
          <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "78.5ch" }} //78.5 large 
                style={{width:"100%"}} //12px padding
                className="MuiInput-custom"
                
              >
                {/* <InputLabel
                  className="InputLabel"
                  style={{ padding: "4px 6px 4px 20px" }}
                >
                  Your message
                </InputLabel>
                <Input
                  style={{
                    padding: "0px 10px 0px",
                    // marginTop : "8px"
                  }}
                 
                  aria-describedby="standard-weight-helper-text"
                  name="message"
                /> */}
                <TextareaAutosize
            aria-label='minimum height'
            minRows={7}
            maxRows={7}
            placeholder='Your message'
            style={{ width: '100%', padding: '12px 0 0 10px',outline: 'none' }}
          />
                {/* <TextField 
className="InputLabel"

         // id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        /> */}
              </FormControl>
              
          <div>
            <input type="submit" value="Send" className="submit-form" style={{float:"right"}}/>
          </div>
          <div>
          {result ? <Result/>: null}
      </div>
        </form>
      </div>
 
  );
};

export default Formul;
