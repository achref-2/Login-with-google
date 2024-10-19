import logo from './logo.svg';
import './App.css';
import "./style.css";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

import React, { useState } from 'react';

import { useEffect } from "react";

import { useForm } from "react-cool-form";



const Field = ({ label, id, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
  </div>
);
function App() {
  
  const { form, reset } = useForm({
    onReset: (values) => console.log("onReset: ", values)
  });

  useEffect(() => reset({ firstName: "Email", lastName: "password" }), [reset]);

  

  const handleLoginSuccess = (response) => {
    console.log("Login Success: ", response);
    // Here, you can use the token to make API requests or authenticate the user in your backend.
  };

  const handleLoginError = (error) => {
    console.error("Login Failed: ", error);
  };

  return (

    <div className="App">
      
      <header className="App-header">
     <img src="./src/img/login.png"/>
   <div className="App">
      
      <form ref={form}>
      <h2>Hi, Welcome back!</h2>
      <Field  id="first-name" name="firstName" />
      <Field  id="last-name" name="lastName" />
      <input type="submit" />
    <div class="google">

      <GoogleOAuthProvider  clientId="#">
        <h4>Login with Google</h4>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        /></GoogleOAuthProvider>
         </div>
         </form>
        
         
      </div>
     
  

      </header>
     
    </div>
    
  );
}

export default App;
