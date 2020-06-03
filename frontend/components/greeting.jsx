import React from 'react';
import { Link } from 'react-router-dom';
// import { logout } from '../util/session_api_util';
const Greeting = ({currentUser, modalOpen, logout}) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => modalOpen('login')}>Login</button>
        &nbsp;or&nbsp;
            <button onClick={() => modalOpen('signup')}>Signup</button>
        </nav>
    );
    const introduction = () => {
       return (
        <hgroup>
            <h1>Welcome </h1>; 
            <button onClick={logout}>Logout</button>;
        </hgroup>
       )
    }


    return (
        currentUser ? 
        introduction(currentUser, logout) :
        sessionLinks()

    )
    
}

export default Greeting;