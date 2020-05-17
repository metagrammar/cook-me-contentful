import React from 'react';
import Carousel from 'react-material-ui-carousel'
// import {Paper} from '@material-ui/core'
import './highlight.css';



function Highlight() {
    return (
      <>  
        <div className="highlight">
            <Carousel >
                <div className="highlight_carouselitem">
                    <img src="https://www.oetker.de/Recipe/Recipes/oetker.de/de-de/baking/image-thumb__69122__RecipeDetail/kuchen-a-la-milchschnitter.jpg" alt="hightlight1"></img>
                    <div className="highlight_carouselitem_card">
                        <h4>Category 1</h4>
                        <h1>Recipe Title</h1>
                        <h5>Tags, Tags, Tags</h5>
                    </div>
                </div>                
                <div className="highlight_carouselitem">
                    <img src="https://www.oetker.de/Recipe/Recipes/oetker.de/de-de/baking/image-thumb__69122__RecipeDetail/kuchen-a-la-milchschnitter.jpg" alt="hightlight1"></img>
                    <div className="highlight_carouselitem_card">
                        <h4>Category 2</h4>
                        <h1>Recipe Title</h1>
                        <h5>Tags, Tags, Tags</h5>
                    </div>
                </div>
                <div className="highlight_carouselitem">
                    <img src="https://www.oetker.de/Recipe/Recipes/oetker.de/de-de/baking/image-thumb__69122__RecipeDetail/kuchen-a-la-milchschnitter.jpg" alt="hightlight1"></img>
                    <div className="highlight_carouselitem_card">
                        <h4>Category 3</h4>
                        <h1>Recipe Title</h1>
                        <h5>Tags, Tags, Tags</h5>
                    </div>
                </div>
                <div className="highlight_carouselitem">
                    <img src="https://www.oetker.de/Recipe/Recipes/oetker.de/de-de/baking/image-thumb__69122__RecipeDetail/kuchen-a-la-milchschnitter.jpg" alt="hightlight1"></img>
                    <div className="highlight_carouselitem_card">
                        <h4>Category 4</h4>
                        <h1>Recipe Title</h1>
                        <h5>Tags, Tags, Tags</h5>
                    </div>
                </div>
            </Carousel>
            {document.getElementById('container')}
        </div>
      </>
    );
  }
  
  export default Highlight;