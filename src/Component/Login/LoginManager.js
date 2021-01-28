import "firebase/auth";
import firebaseConfig from "../firebaseConfig";
import React from 'react';
import * as firebase from "firebase/app";

export const initializingLogInFrameWork=()=>{
  firebase.default.initializeApp(firebaseConfig);
}

export const googleLogIn=()=>{
  const provider =new firebase.default.auth.GoogleAuthProvider();
  return firebase.default.auth().signInWithPopup(provider).then((result)=> {
    var user = result.user;
  const newUser={
      name: user.displayName,
      email: user.email,
  };
  return newUser;
  }).catch(function(error) {
    var errorMessage = error.message;
console.log(errorMessage);
  });
}
