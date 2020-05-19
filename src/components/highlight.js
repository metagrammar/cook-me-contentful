import React from 'react';
import Carousel from 'react-material-ui-carousel'
// import {Paper} from '@material-ui/core'
import './highlight.css';



function Highlight(props) {
    return (
      <>  
        <div className="highlight">
            <Carousel autoPlay={false}>
                <div className="carouselitem">
                    <div className="img-conatin">
                        <img src="https://www.oetker.de/Recipe/Recipes/oetker.de/de-de/baking/image-thumb__69122__RecipeDetail/kuchen-a-la-milchschnitter.jpg" alt="hightlight1" />
                    </div>
                    <div className="carouselitem-card">
                        <h4>Category 1</h4>
                        <h1>Chilly Cheese Steak</h1>
                        <h5>Tags, Tags, Tags</h5>
                    </div>
                </div>                
                <div className="carouselitem">
                    <img src="https://www.oetker.de/Recipe/Recipes/oetker.de/de-de/baking/image-thumb__69122__RecipeDetail/kuchen-a-la-milchschnitter.jpg" alt="hightlight1" />
                    <div className="carouselitem-card">
                        <h4>Category 2</h4>
                        <h1>Recipe Title</h1>
                        <h5>Tags, Tags, Tags</h5>
                    </div>
                </div>
                <div className="carouselitem">
                    <img src="https://www.oetker.de/Recipe/Recipes/oetker.de/de-de/baking/image-thumb__69122__RecipeDetail/kuchen-a-la-milchschnitter.jpg" alt="hightlight1" />
                    <div className="carouselitem-card">
                        <h4>Category 3</h4>
                        <h1>Recipe Title</h1>
                        <h5>Tags, Tags, Tags</h5>
                    </div>
                </div>
                <div className="carouselitem">
                    <img src="https://www.oetker.de/Recipe/Recipes/oetker.de/de-de/baking/image-thumb__69122__RecipeDetail/kuchen-a-la-milchschnitter.jpg" alt="hightlight1" />
                    <div className="carouselitem-card">
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