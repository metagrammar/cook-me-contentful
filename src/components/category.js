import React, { useEffect, useState } from 'react';
import './category.css';

const contentful = require('contentful')
const client = contentful.createClient({
  space: 'on7xb2olivy7',
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_SECRET_SAUCE_DELIVERY_API_TOKEN
})

function Category() {
const [catData, setCatData] = useState()
const [mainCatData, setMainCatData] = useState()

const [checkboxState, setCheckboxState] = useState(false)

useEffect(()=>{
        client.getEntries({
          content_type: 'mainCategory'})
        .then((response) => setMainCatData(response.items))
        .catch(console.error)

        client.getEntries({
          content_type: 'categories'})
        .then((response) => setCatData(response.items))
        .catch(console.error)
      },[])


const handleClick = (e) => {
      console.log(e.currentTarget)
      e.currentTarget.checked!=="checked"? e.currentTarget.checked="checked":e.currentTarget.checked=""
}

    return (
      <div className='category'>
      <form onSubmit={(e)=>console.log(e.target)}>
        {mainCatData !== undefined?
          mainCatData.map(mainCat => 
          <div>
            <h3>{mainCat.fields.title}</h3>
            
            {catData !== undefined?catData.map(cat => {
                if (cat.fields.parentCategory.fields.id === mainCat.fields.id){
                  return(
                    <label class='container'>
                      {cat.fields.categoryTitle}
                      <input type="checkbox"
                      />
                      <span class="checkmark"></span>
                    </label>
                  )
                }
              }):""} 
          </div>
          ):""}
        </form>
      </div>
      );}
  
  export default Category;
