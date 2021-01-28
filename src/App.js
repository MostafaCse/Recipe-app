import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Connection from "./Component/Connection/Connection";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import Login from "./Component/Login/Login";
import NotFound from "./Component/NotFound/NotFound";
import OrderDetail from "./Component/OrderDetail/OrderDetail";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
export const userContext=createContext();
function App() {
  const [loggin,setLoggin]=useState({});
  const [recipe,setRecipe]=useState({})

  return (
    <userContext.Provider value={{ logIn: [loggin,setLoggin], Recipe: [recipe,setRecipe] }}>
    <Router>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/Home">
    <Home></Home>
    </Route>
    <PrivateRoute path="/OrderDetail">
    <OrderDetail></OrderDetail>
    </PrivateRoute>
    <Route path="/Login">
     <Login></Login>
    </Route>
    <Route path="/Conection">
      <Connection></Connection>
    </Route>
    <Route path="/*">
      <NotFound></NotFound>
    </Route>
  </Switch>
  </Router>
  </userContext.Provider>
  );
}

export default App;
