import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
  const {logIn}=useContext(userContext);
  const [loggin,setLoggin]=logIn;

    return (
        <Route
      {...rest}
      render={({ location }) =>
      loggin.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;