import React from 'react';
import Navigation from './components/navigation'
import Highlight from './components/highlight'
import Recipe from './components/recipe'
import './App.css';


function App() {
  return (
    <div className="App">
    <Navigation />
    <Highlight />
    </div>
  );
}

export default App;
