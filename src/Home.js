import React from 'react';
import Highlight from './components/highlight'
import ResultsMain from './components/ResultsMain';
import ResultsMore from './components/ResultsMore';
import Footer from './components/Footer';
import './App.css';


function Home(props) {
  console.log('Home recipes data')
  console.log(props.gotRecipes)
  return (
    <div className="App">
        <Highlight gotRecipes={props.gotRecipes}/>
        <ResultsMain gotRecipes={props.gotRecipes}/>
        <ResultsMore />
        <Footer />
    </div>
  );
}

export default Home;