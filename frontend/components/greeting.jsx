import React from 'react';
import { Link } from 'react-router-dom';
// import { logout } from '../util/session_api_util';
const Greeting = ({currentUser, modalOpen, logout}) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button
            onClick={() => modalOpen('signup')}
            className="main-page-signup-button"
            >Signup</button>
        &nbsp;&nbsp;
            <button 
            onClick={() => modalOpen('login')}
            className="main-page-login-button"
            >Login</button>
        </nav>
    );
    const introduction = () => {
       return (
        <hgroup>
            <h1>🖼</h1>; 
            <button onClick={logout}>Logout</button>;
        </hgroup>
       )
    }
    const hostAnExperience = () => {
        return(
            <button>Host an experience</button>
        )
    }
    const switchToHosting = () =>{
        return(
        <button>Switch to hosting</button>
        )
    }
    const help = () =>{
        return(
            <button>Help</button>
        )
    }
    const globeCurrency = () => {
        return(
            <button>🌐˅</button>
        )
    }
    const hostYourHome = () => {
        return(
            <button>Host your home</button>
        )
    }

    
       if (currentUser) {
        return(
            <div>
                {introduction(currentUser, logout)}
                {help()}
                {hostAnExperience() }
                {switchToHosting()}
                {globeCurrency()}
            </div>
        )
       } else {
           return(
               <div>
                   {sessionLinks()}
                   {help()}
                   {hostAnExperience()}
                   {hostYourHome()}
                   {globeCurrency()}

               </div>
           ) 
       }
    
        
        

    
    
}

export default Greeting;