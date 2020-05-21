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


// API SETUP INFORMATION
const contentful = require('contentful')
const client = contentful.createClient({
  space: 'on7xb2olivy7',
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_SECRET_SAUCE_DELIVERY_API_TOKEN
})


function App() {
  // const [searchToggle, setSearchToggle] = useState(0)
  // const [searchQuerry, setSearchQuerry] = useState()
  const [recipes, setRecipes] = useState()
  const [categories, setCategories] = useState()
  const [catFilter, setCatFilter] = useState()

//HELPER FUNCTIONS
  const searchHandler = (e) => {
        e.preventDefault()
        console.log("search triggered")
        client.getEntries({
          'query': `${e.currentTarget[0].value}`})
        .then((response) => console.log(response))
        .catch(console.error)
      }
  
const filterHandler = (filter) => {
  setCatFilter(filter)
}
  

  useEffect( () => {
    client.getEntries({
      content_type: 'recipe',
    })
    .then(response => setRecipes(response.items))
    .catch(console.error)

    client.getEntries({
      content_type: 'categories',
    })
    .then(response => setCategories(response.items))
    .catch(console.error)
  },[])
  
  return (
    <div>
      <Navigation onSearch={searchHandler} getFilter={filterHandler}/>
      {!recipes? '': 
      <Switch>
        <Route path='/:recipe/' render={props => <RecipePage gotRecipes={recipes} {...props} />} />
        <Route exact path='/' render={props => <Home gotRecipes={recipes} gotCategories={categories} {...props} />} />
      </Switch>
      }
    </div>
  );
}

export default App;
