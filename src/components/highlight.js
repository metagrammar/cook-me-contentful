import React from 'react';
import { Link, useHistory } from "react-router-dom";
import Carousel from 'react-material-ui-carousel'
import CardMedia from '@material-ui/core/CardMedia';
// import {Paper} from '@material-ui/core'
import './highlight.css';



function Highlight({ gotRecipes }) {

    const history = useHistory();

    console.log({gotRecipesFromCarousel: gotRecipes})
    return (
      <>  
        <div className="highlight">
            <Carousel autoPlay={false}>
                
                    {gotRecipes.map(recipe =>  
                        recipe.sys.contentType.sys.id === 'recipe'? 
                        
                        <Link
                            style={{textDecoration: 'none'}}
                            onClick={() => history.push(`/${recipe.sys.id}`)} 
                            key={recipe.sys.id}
                            >
                            <div className="carouselitem">
                                
                                <CardMedia 
                                image={recipe.fields.recipeHeroImage.fields.file.url}
                                className="img-conatin" />
                        
                                <div className="carouselitem-card">
                                    <h4>Category 1</h4>
                                    <h1>{recipe.fields.recipeTitle}</h1>
                                    <h5>Tags, Tags, Tags</h5>
                                </div>
                            </div>  
                        </Link>

                        : ''
                        )}
                              
            </Carousel>
            {document.getElementById('container')}
        </div>
      </>
    );
  }
  
  export default Highlight;