import React from 'react';
import './category.css';


function Category() {
    return (
      <>  
      <div className='category'>
        <div>
        <h3>category title</h3>
        <ul>
            <li><input type='checkbox'/> category 1 </li>
            <li>category 2</li>
            <li>category 3</li>
            <li>category 4</li>
            <li>category 5</li>
        </ul>
        <p>
          <input type="checkbox" id="test1" />
          <label for="test1">Red</label>
        </p>
        </div>
        <div>
        <h3>category title</h3>
        <ul>
            <li>category 1</li>
            <li>category 2</li>
            <li>category 3</li>
            <li>category 4</li>
            <li>category 5</li>
        </ul>
        </div>
        <div>
        <h3>category title</h3>
        <ul>
            <li>category 1</li>
            <li>category 2</li>
            <li>category 3</li>
            <li>category 4</li>
            <li>category 5</li>
        </ul>
        </div>
        </div>
      </>
    );
  }
  
  export default Category;