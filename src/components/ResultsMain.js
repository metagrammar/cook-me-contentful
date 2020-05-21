import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { CardMedia } from '@material-ui/core';
import './ResultsMain.css';

const ResultsMain = (props) => {
    const history = useHistory();



    return (
        <>
        <div className='results-cards'>
            <h1 className='main-results'>{props.searchToggle===1?`Search: ${props.search}`:"Latest Recipes"}</h1>
            <div className='cards-wrap'>
                {props.gotRecipes.map(recipe =>  
                    recipe.sys.contentType.sys.id === 'recipe'? 
                    <Link
                        to= ' '
                        style={{textDecoration: 'none'}}
                        onClick={(e) =>{ history.push(`/${recipe.fields.slug}`); window.scrollTo(0,0); e.preventDefault()}} 
                        key={recipe.sys.id}
                        >
                    <CardMedia className='main-card' image={recipe.fields.recipeHeroImage.fields.file.url} />
                    <h3 className='recipe-card-title'>{recipe.fields.recipeTitle}</h3>
                     </Link>
                     : ''
                     )}
            </div>
        </div>
        </>
        
    )
};

export default ResultsMain;