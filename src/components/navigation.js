import React, { useState } from 'react';
import Categories from './categories'
import './navigation.css';


function Navigation() {
    const [cat_toggler, setCat_toggler] = useState(false)


// FUNCTION TO TOGGLE CATEGORY DIV
    const toggleCategories = () => {
      cat_toggler===true?setCat_toggler(false):setCat_toggler(true)
    }

    return (
      <>
        <div className="navbar">
            <h1 className="navbar_cat_title">COOK ME</h1>
            <button className="navbar_cat_title" id="category_button" onClick={toggleCategories}>CATEGORIES</button>
            <div className="navbar_search">
                <input className="navbar_search" type="text" placeholder="Search for recipe.." id="search"></input>
                <button className="navbar_search">OK</button>
            </div>
        </div>
        {cat_toggler===true?<Categories />:""}
      </>
    );
  }
  
  export default Navigation;
  