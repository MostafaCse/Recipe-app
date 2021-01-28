import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import './Home.css';

const Home = () => {
    const APP_ID="ddba0439";
    const APP_KEY="c46e1fbf86668b3fb2597f3e8964a07e";
    const [recipe,setRecipe]=useState([]);
    const [search,setSearch]=useState('');
    const [query,setQuery]=useState('chicken');

 useEffect(()=>{
getRecipes();
 },[query])

    const getRecipes= async ()=>{
  const respones=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data=await respones.json();
  setRecipe(data.hits);
    }

    const updateSearch =e=>{
        setSearch(e.target.value);
       }


    const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
          
      
    return (
        <div className="container">
            <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
         <button className="search-button" type="submit">submit</button>
            </form>
           <div className="recipes">
           {
                recipe.map(pd=><Recipe key={pd.recipe.label} recipe={pd.recipe}></Recipe>)
            }
           </div>
        </div>
    );
        };

export default Home;