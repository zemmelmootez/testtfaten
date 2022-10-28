import React, { useEffect, useRef, useState } from "react";
import '../Styles/CalculateBmi.css'
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
const CalculateBmi = () => {
  const [style, setStyle] = useState(false);
  const [showBmi, setShowBmi] = useState(false);
  const [height, setHeight] = useState("");
  const [showHeight, setShowHeight] = useState(false);
  const [showWeight, setShowWeight] = useState(false);
  const [weight, setWeight] = useState("");
  const [submited, setSubmited] = useState(false);

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");
  const [low, setLow] = useState("");
  const [high, setHigh] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);
    if (height>0 && weight>0) {
      //(1,2 x IMC) + (0,23 x âge) – (10,8 x sexe ) – 5,4
      let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
      setLow(Math.round(18.5 * (height / 100) ** 2));
      setHigh(Math.round(24.99 * (height / 100) ** 2));
      setBmiResult(bmi);
      setStatus(getStatus(bmi));
      console.log(bmiResult);
      setHeight("");
      setWeight("");
      setShowHeight(true);
      setShowWeight(true);
    }
  };
  const getStatus = (bmi) => {
    if (bmi < 18.5) return "You are currently underweight";
    else if (bmi >= 18.5 && bmi < 24.9)
      return "Normal:You are in a healthy weight range";
    else if (bmi >= 25 && bmi < 29.9) return "You are currently Overweight";
    else return "You are Obese";
  };

  const kgRef = useRef(null);
  const cmRef = useRef(null);
  // useEffect(() => {
  //   kgRef.current.focus ? setShow(true) : setShow(false);
  // }, [kgRef]);

  console.log("#bmiResult", bmiResult);
  console.log("#status", status);

  // useEffect(() => {
  //   submited && setSubmited(false)
  // } , [submited])

  return (
    <div className="calculat-bmi">
      {!bmiResult ? (
        <>
          <h1 >While you're still here</h1>
          {/* <h1 className="stillhere">While you're still here</h1> */}
          <h1 className="check">Let's check your BMI</h1>
          <div style={{ display: "flex" }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex"}}>

            
              <div style={{ display: "flex", flexDirection: "column" }} >
                
                  <FormControl
                  variant="standard"
                  sx={{ m: 1, mt: 3, width: "25ch" }}
                  style={{ paddingTop: "12px" }}
                  // className="MuiInput-custom"
                >
                  <InputLabel
                    className="InputLabel"
                    style={{ padding: "4px 6px 4px 20px" }}
                  >
                    Weight
                  </InputLabel>
                  <Input
                    ref={kgRef}
                    style={{
                      padding: "0px 10px 0px",
                      // marginTop : "8px"
                    }}
                    value={weight}
                    onChange={(e) => {
                      setWeight(e.target.value);
                      setSubmited(false);
                    }}
                    onFocus={() => setShowWeight(true)}
                    onBlur={() => setShowWeight(false)}
                    id="standard-adornment-weight"
                    // value={values.weight}
                    // onChange={handleChange('weight')}
                    endAdornment={
                      showWeight ? (
                        <InputAdornment position="end">Kg</InputAdornment>
                      ) : null
                    }
                    aria-describedby="standard-weight-helper-text"
                    // inputProps={{
                    //   'aria-label': 'weight',
                    // }}
                  />
                </FormControl>
              
            
                   {/* <span style={{minHeight : "30px"}}>{!weight && submited && parseInt(weight)<=0 &&(
                  <span style={{ color: "black", maxHeight : "30px" }}>Please enter a valid weight</span>
                )}</span> */}
              
           <span  style={{minHeight : "30px"}}>{!weight && submited && (
                  <span className="error" style={{ color: "black" }}>Please enter a valid weight</span>
                )}
             </span>   
                
              </div>
              <div style={{ display: "flex", flexDirection: "column" }} >
               
                <FormControl
                  variant="standard"
                  sx={{ m: 1, mt: 3, width: "25ch" }}
                  style={{ paddingTop: "12px" }}
                  // className="MuiInput-custom"
                >
                  <InputLabel
                    className="InputLabel"
                    style={{ padding: "4px 6px 4px 20px" }}
                  >
                    Height
                  </InputLabel>
                  <Input
                    ref={kgRef}
                    style={{
                      padding: "0px 10px 0px",
                      // marginTop : "8px"
                    }}
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    onFocus={() => setShowHeight(true)}
                    onBlur={() => setShowHeight(false)}
                    id="standard-adornment-height"
                    endAdornment={
                      showHeight ? (
                        <InputAdornment position="end">Cm</InputAdornment>
                      ) : null
                    }
                    aria-describedby="standard-weight-helper-text"
                  />
                </FormControl>
            <span style={{minHeight : "30px"}}> {(!height || (height)<=0) && submited  && (
                  <span style={{ color: "black" }}>Please enter a valid height</span>               
                )}
              </span>   
              { console.log(typeof(height))}
                {/* <span style={{minWeight : "30px"}}>{!weight && submited && parseInt(weight)<=0 &&(
                  <span style={{ color: "black", maxWeight : "30px" }}>Please enter a valid weight</span>
                )}</span> */}
              </div>
<div>
<FormControl
                  variant="standard"
                  sx={{ m: 1, mt: 3, width: "25ch" }}
                  style={{ paddingTop: "12px" }}
                  // className="MuiInput-custom"
                >
                  <InputLabel
                    className="InputLabel"
                    style={{ padding: "4px 6px 4px 20px" }}
                  >
                    Age
                  </InputLabel>
                  <Input
                    ref={kgRef}
                    style={{
                      padding: "0px 10px 0px",
                      // marginTop : "8px"
                    }}                
                    id="standard-adornment-age"
                    aria-describedby="standard-age-helper-text"
                  />
                </FormControl>

              
</div>

            </div>
              <div>
                <input type="submit" value="Reveal the truth" className="submit" />
              </div>
            </form>
          </div>
        </>
      ) : (
        <div className="mt-4">
          <p className="bmi-result">Your BMI is <span>{bmiResult}</span>  </p>
          <p className="bmi-range">{status}</p>
          <p className="bmi-range">
            Your suggested weight range is between <span >{low}</span> and <span className="bmi-range">{high}</span>
          </p>
          <div>
            <input
              type="submit"
              value="Try again"
              className="submit"
              onClick={() => {setBmiResult(null); 
                setSubmited(false);
                setShowWeight(false);
                setShowHeight(false)}}
            />
          </div>
        </div>
      )}

      {/*           
        
           <TextField label="weight" required variant="standard"/> */}

      {/* <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Weight" name="weight" value={weight} onChange={(e)=>setWeight(e.target.value)} ></input>
        <input type="text" placeholder="Height" name="height" value={height} onChange={(e)=>setHeight(e.target.value)}></input>
        
        <input type="text" placeholder="Age" ></input> 
        <div>
            <input type="submit" value="Reveal the truth" class="submit" /> 

        </div>
        {bmiResult && (
          <div className="mt-4">
            <p>Your BMI is: {bmiResult} </p>
            <p>You are currently: {status}</p>
            <p>Your suggested weight range is between {low} and {high}</p>
           
          </div>
        )}
        
      </form> */}
      {/* <div className="pattern">
<div className="part"></div>
</div>   */}
    </div>
  );
};

export default CalculateBmi;
