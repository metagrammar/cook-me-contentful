import React from 'react';
import './steps.css';


function Steps({recipeData}) {
    
    var i = 0;

    return (
        <div id="steps">
            {recipeData.map( step => {
                return (
                <div className="steps">
                    <div className='steps-text'>
                        <h4>Step {i+=1}</h4>
                        <p>{step[0]}</p>
                    </div>
                    
                    {step[1] === "no image"? "":            
                    <div className='steps-image'> 
                        <img src={step[1]} alt="delicous" /> 
                    </div>}  
                </div>
                )}
            )}
        </div>
    );
  }
  
  export default Steps;