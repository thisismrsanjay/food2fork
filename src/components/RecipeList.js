import React, { Component } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';


export default class RecipeList extends Component {
  render() {
    return (
      <div>
         <h1>Hello From RecipeList</h1>
        <RecipeSearch/>
        <Recipe/>
      </div>
    )
  }
}
