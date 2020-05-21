import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import Navigation from './components/navigation'
import RecipePage from './RecipePage'

// API SETUP INFORMATION
const contentful = require('contentful')
const client = contentful.createClient({
  space: 'on7xb2olivy7',
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_SECRET_SAUCE_DELIVERY_API_TOKEN
})


function App() {
  const [searchToggle, setSearchToggle] = useState(0)
  const [search, setSearch] = useState()
  const [recipes, setRecipes] = useState()
  const [categories, setCategories] = useState()
  const [catFilter, setCatFilter] = useState()

  
const filterHandler = (filter) => {
  setCatFilter(filter)
}
  


//HELPER FUNCTIONS
  const searchHandler = (searchquery) => {
    setSearchToggle(1)
    setSearch(searchquery)
    }


  useEffect( () => {
    client.getEntries({
      content_type: 'categories'})
    .then(response => setCategories(response.items))
    .catch(console.error)

    if (searchToggle === 0){
    client.getEntries({
      content_type: 'recipe'})
    .then(response => setRecipes(response.items))
    .catch(console.error)
    }
    else {
    client.getEntries({
      content_type: 'recipe',
      'query': `${search}`})
    .then((response) => setRecipes(response.items))
    .catch(console.error)
    }
  },[search, searchToggle])
  
  return (
    <div>
      <Navigation onSearch={searchHandler} getFilter={filterHandler}/>
      {!recipes? '': 
      <Switch>
        <Route path='/:recipe/' render={props => <RecipePage gotRecipes={recipes} {...props} />} />
        <Route exact path='/' render={props => <Home gotRecipes={recipes} gotCategories={categories} searchToggle={searchToggle} search={search} {...props} />} />
      </Switch>
      }
    </div>
  );
}

export default App;
