import React from 'react';
import Category from './category'
import './categories.css';


function Categories({getFilter}) {
    return (
        <div className="categories" id="categories">
        <Category getFilter={getFilter} />
        </div>
    );
  }
  
  export default Categories;