import React from 'react';
import './steps.css';


function Steps({recipeData}) {
    var i = 0;

    return (
        <div className="steps" id="steps">
        {recipeData.map( step => {
            return (
            <div key={Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)}>
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