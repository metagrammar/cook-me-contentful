import React from 'react';
import { useParams } from 'react-router-dom'
import Recipe from './components/recipe'
import ResultsMore from './components/ResultsMore';
import Footer from './components/Footer';
import './App.css';


function RecipePage({gotRecipes}) {

  let { recipe } = useParams()

  return (
    <div className="App">
        <Recipe recipeSlug={recipe} />
        <ResultsMore gotRecipes={gotRecipes}/>
        <Footer />
    </div>
  );
}

export default RecipePage;