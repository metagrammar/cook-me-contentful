import React from 'react';
import { Link, useHistory } from "react-router-dom";
import './ResultsMain.css';
// import Recipe from './recipe';

const ResultsMain = (props) => {

    const history = useHistory();

    return (
        <>
        <div className='results-cards'>
            <h1 className='main-results'>Latest Recipes</h1>
            <div className='cards-wrap'>
                
                {props.gotRecipes.map(recipe =>  
                    recipe.sys.contentType.sys.id === 'recipe'? 
                    <Link
                        style={{textDecoration: 'none'}}
                        onClick={() => history.push(`/${recipe.fields.recipeTitle}`)} 
                        key={recipe.sys.id}
                        >
                    <div className='main-card'>
                        <img src={recipe.fields.recipeHeroImage.fields.file.url} alt={recipe.fields.recipeTitle} />
                        {/* <h1> {recipe.fields.recipeHeroImage.fields.file.url} </h1> */}
                    </div>
                    <h3 className='recipe-card-title'>{recipe.fields.recipeTitle}</h3>
                     </Link>
                     : ''
                     )}
                
                <div className='main-card'>

                </div>
                <div className='main-card'></div>
                <div className='main-card'></div>
                <div className='main-card'></div>
                <div className='main-card'></div>
                <div className='main-card'></div>
                <div className='main-card'></div>
            </div>
        </div>
        </>
        
    )
};

export default ResultsMain;