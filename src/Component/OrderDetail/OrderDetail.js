import React, { useContext, } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {userContext} from '../../App';
import './OrderDetail.css';

const OrderDetail = () => {
    const {Recipe}=useContext(userContext);
    const [recipe,setRecipe]=Recipe;
    console.log(recipe);
   const history=useHistory();
    const handleClicked=(e)=>{
      e.preventDefault();
       history.push(`/Conection`);
        console.log("clicked");
    }

    return (
          <div className="main-container">
        
        <div className="left-item">
              <form onSubmit={handleClicked} action="">
              <h1>Order Information</h1>
             <input type="text" className="input-highlight" placeholder="name" required title="name"/><br/>
              <input type="text" className="input-highlight" placeholder="phone" required title="phone"/><br/>
              <textarea type="text" className="textarea-highlight" placeholder="address" required title="address"></textarea><br/>
              <button type="submit" className="button-highlight">Oder Confirm</button>
              </form>
              
          </div>
        <div className="right-item">
           <h2>{recipe.label}</h2>
           <h3>{recipe.calories}</h3>
           <img src={recipe.image} />
            <br></br>
           
        </div>
      </div>
    );
};

export default OrderDetail;