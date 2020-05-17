import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import Navigation from './components/navigation'
import RecipePage from './RecipePage'
/* import Highlight from './components/highlight'
import ResultsMain from './components/ResultsMain';
import ResultsMore from './components/ResultsMore';
import Footer from './components/Footer'; */

//dotenv.config()



const contentful = require('contentful')

const client = contentful.createClient({
  space: 'on7xb2olivy7',
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_SECRET_SAUCE_DELIVERY_API_TOKEN
})


function App() {

  const [recipes, setRecipes] = useState()
  

  useEffect( () => {
    client.getEntries('recipe')
    .then(response => setRecipes(response.items))
    .catch(console.error)
    console.log(recipes)
  },[])


  
  return (
    <div>
      <Navigation />
      {!recipes? '': 
      <Switch>
        <Route path='/:recipe/' render={props => <RecipePage  {...props} />} />
        <Route exact path='/' render={props => <Home gotRecipes={recipes} {...props} />} />
      </Switch>
      }
    </div>
  );
}

export default App;
