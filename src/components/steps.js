import React from 'react';
import './steps.css';


function Steps({recipeData}) {
    var i = 0;

    return (
        <div className="steps" id="steps">
        {recipeData.map( step => {
            return (
            <div>
            <h4>Step {i+=1}</h4>
            <p>{step[0]}</p>
            {step[1] === "no image"? "": <img src={step[1]} alt="delicous"></img>}
            </div> )
            }
        )}
            

        </div>
    );
  }
  
  export default Steps;