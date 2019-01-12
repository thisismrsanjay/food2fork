import React, { Component } from 'react';

import './App.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


class App extends Component {

  state = {
    recipes:[],
    url:"https://www.food2fork.com/api/search?key=9e3514ae5e2b5ceadbb71bf2c87b07c4"
  }

  componentDidMount(){
    this.getRecipes()
  }

  async getRecipes(){
    try{
      
    const data=await fetch(this.state.url);
    const jsonData  = await data.json();
    this.setState({
      recipes:jsonData.recipes
    })
    }catch(err){
      console.log(err+" : in getRecipes()");
    }
  }

  render() {
    console.log(this.state.recipes);
    return (
      <React.Fragment>
        <RecipeList />
        <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;
