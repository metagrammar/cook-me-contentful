import React, { useState, useEffect } from 'react';
import './recipe.css';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Steps from './steps';
import './recipe.css';


const contentful = require('contentful');

const client = contentful.createClient({
  space: 'on7xb2olivy7',
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_SECRET_SAUCE_DELIVERY_API_TOKEN
})


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: '1rem',
      fontFamily: 'Montserrat, sans-serfi'
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  
 function Recipe({ recipeId }) {
        const [recipeData, setRecipeData] = useState()

        useEffect( ()=>{
        client.getEntry(recipeId)
          .then((entry) => setRecipeData(entry.fields))
          .catch(console.error)}
        ,[recipeId])

    return (
      !recipeData?"":
        <div className="recipe" id="recipe">
          <img src={recipeData.recipeHeroImage.fields.file.url} alt={recipeData.recipeTitle} className='hero-image' />
          <h1>{recipeData.recipeTitle}</h1>
            <h3>{recipeData.recipeDescription}</h3>
            <TableContainer className='table' component={Paper}>
                <Table aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell className='table-header' align="left">Amount</StyledTableCell>
                      <StyledTableCell className='table-header'  align="left">Ingredient</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recipeData.recipeIngridientsJson.Ingridient_table.map((row) => (
                    <StyledTableRow key={row[0]+row[1]}>
                      <StyledTableCell align="left" width="20%">{row[0]}</StyledTableCell>
                      <StyledTableCell align="left">{row[1]}</StyledTableCell>
                    </StyledTableRow>))}
                </TableBody>
              </Table>
            </TableContainer>
            <Steps recipeData={recipeData.recipeSteps.recipe_steps} />
        </div>
    );
  }
  
  export default Recipe;