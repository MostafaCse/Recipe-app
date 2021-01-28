import React, { useContext, } from 'react';
import { useHistory } from 'react-router-dom';
import './Recipe.css';
import {userContext} from '../../App';
const Recipe = (props) => {
  const {Recipe}=useContext(userContext);
   const [recipe,setRecipe]=Recipe;
  const {recipeProduct}=props.recipe;
    const {label,calories,image,ingredients}=props.recipe;
   
    const history=useHistory();
   const handleClicked=()=>{
   const  recipe={label:label,calories:calories,image:image}
       setRecipe(recipe);
       history.push(`/OrderDetail`);
      
   }
    return (
      <div className="recipe">
            <h1>{label}</h1>
            <ol>
              {ingredients.map(pd=>(
                <li>{pd.text}</li>
              ))}
            </ol>
            <h2>{calories}</h2>
            <img className="image" src={image} alt=""/>
            <button title="Available product" className="button-highlight" onClick={handleClicked}>Order</button>
      </div>
    );
};

export default Recipe;