import React from 'react';
import { Link } from 'react-router-dom';
// import { logout } from '../util/session_api_util';
const Greeting = ({currentUser, modalOpen, logout}) => {

    const mainPageSignupButton = () => (
            <button
            onClick={() => modalOpen('signup')}
            className="main-page-header-button"
            >Signup</button>
    )
    const mainPageLoginButton = () => (
    
            <button 
            onClick={() => modalOpen('login')}
            className="main-page-login-button"
            >Login</button>
    )
   
    const introduction = () => {
       return (
            <button onClick={logout}
            className="main-page-logout-button"
            >Logout</button>
       )
    }
    const hostAnExperience = () => {
        return(
            <button
            className="main-page-header-button"
            >Host an experience</button>
        )
    }
    const switchToHosting = () =>{
        return(
        <button
        className="main-page-header-button"
        >Switch to hosting</button>
        )
    }
    const help = () =>{
        return(
            <button
            className="main-page-header-button"
            >Help</button>
        )
    }
    const globeCurrency = () => {
        return(
            <button
            className="main-page-header-button"
            >🌐  ˅</button>
        )
    }
    const hostYourHome = () => {
        return(
            <button
            className="main-page-header-button"
            >Host your home</button>
        )
    }
    

    
       if (currentUser) {
        return(
            <div>
                {globeCurrency()}
                {switchToHosting()}
                {hostAnExperience() }
                {help()}
                {introduction(currentUser, logout)}
            </div>
        )
       } else {
           return(
               <div>
                   {globeCurrency()}
                   {hostYourHome()}
                   {hostAnExperience()}
                   {help()}
                   {mainPageSignupButton()}
                   {mainPageLoginButton()}
               </div>
           ) 
       }
    
        
        

    
    
}

export default Greeting;