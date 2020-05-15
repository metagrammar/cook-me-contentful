import React from 'react';
import Navigation from './components/navigation'
import Highlight from './components/highlight'
import ResultsMain from './components/ResultsMain';
import ResultsMore from './components/ResultsMore';
import Footer from './components/Footer';
import './App.css';


function Home() {
  return (
    <div className="App">
        <Navigation />
        <Highlight />
        <ResultsMain />
        <ResultsMore />
        <Footer />
    </div>
  );
}

export default Home;