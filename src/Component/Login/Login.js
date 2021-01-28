import React, { useContext, } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {userContext} from '../../App';
import { googleLogIn, initializingLogInFrameWork } from './LoginManager';
import "firebase/auth";  
import './Login.css';                                                                                                                                                      

//initializingLogInFrameWork();
initializingLogInFrameWork();
const Login = () => {
     
    const {logIn}=useContext(userContext);
    const [loggin,setLoggin]=logIn;
    const history=useHistory();
    const location=useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleClicked=()=>{
      googleLogIn()
      .then((res)=>{
          const name=res.name;
          const email=res.email;
          const person={name:name,email:email}
          setLoggin(person);
          history.replace(from);
      })  
    }

    return (
            <div className="form-handle">
              <h1>Login</h1>
       <button className="google" onClick={handleClicked}>Google Sign-In</button>
        </div>
    );
};

export default Login;