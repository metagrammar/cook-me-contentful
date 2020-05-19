import React from 'react';
import './steps.css';


function Steps({recipeData}) {
    return (
        <div className="steps" id="steps">
        {console.log(recipeData)}
        {recipeData.map( step => {
            return (
            <div>
            <p>{step[0]}</p>
            {step[1] === "no image"? "": <img src={step[1]} alt="delicous"></img>}
            </div> )
        }
        )}
            

        </div>
    );
  }
  
  export default Steps;