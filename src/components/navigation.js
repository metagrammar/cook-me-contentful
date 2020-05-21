import React, { useState } from 'react';
import Categories from './categories'
import { Link } from 'react-router-dom'
import { ClickAwayListener } from '@material-ui/core';
import './navigation.css';


function Navigation({ searchHandler,  getFilter }) {
    const [cat_toggler, setCat_toggler] = useState(false)


// FUNCTION TO TOGGLE CATEGORY DIV & CLICK AWAY
    const toggleCategories = () => {
      cat_toggler===true?setCat_toggler(false):setCat_toggler(true)
    }

    const clickAway = () => {
      cat_toggler===true?setCat_toggler(false):setCat_toggler("")
    }


    return (
    <div>
      <ClickAwayListener onClickAway={clickAway}>
        <div className='navbar-contain'>
        <div className="navbar">
          <Link to='/' style={{textDecoration: 'none'}}>
            <h1 className="navbar_cat_title"><strong>Secret</strong> Sauce</h1>
          </Link>
          <button className="navbar_cat_title" id="category_button" onClick={toggleCategories}>Categories</button>
          <div className="navbar_search edge-margin">
            <form onSubmit={(e)=>{searchHandler(e); this.preventDefault()}}>
              <input className="navbar_search" type="text" placeholder="Search for recipe.."></input>
              <button className="navbar_search">OK</button>
            </form>
          </div>
        </div>
        {cat_toggler===true?<Categories getFilter={getFilter} />:""}
        </div>
      </ClickAwayListener>
    </div>
    );
  }
  
  export default Navigation;
