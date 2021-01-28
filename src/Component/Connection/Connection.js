import React from 'react';
import { useHistory } from 'react-router-dom';
import './Connection.css';

const Connection = () => {
    let history=useHistory()
    const handleItemMenu=()=>{
        history.push(`/home`);
    }
    return (
        <div className="order-highlight">
          <h1>Thank you for your order</h1>  
           <h4>we will delivery your item within 1 hours.</h4>
           <button className="button-highlight" onClick={handleItemMenu}>Item menu</button>
        </div>
    );
};

export default Connection;