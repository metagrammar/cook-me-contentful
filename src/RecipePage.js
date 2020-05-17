import React from 'react';
import Recipe from './components/recipe'
import ResultsMain from './components/ResultsMain';
import ResultsMore from './components/ResultsMore';
import Footer from './components/Footer';
import './App.css';


function RecipePage() {
  return (
    <div className="App">
        <Recipe />
        <ResultsMore />
        <Footer />
    </div>
  );
}

export default RecipePage;