import React from 'react';
import { Link } from 'react-router-dom';
// import { logout } from '../util/session_api_util';
const NavBar = ({currentUser, modalOpen, logout}) => {
  
    const mainPageSignupButton = () => (
            <button
            onClick={() => modalOpen('signup')}
            className="main-page-header-button"
            >Sign up</button>
    )
    const mainPageLoginButton = () => (
    
            <button 
            onClick={() => modalOpen('login')}
            className="main-page-login-button"
            >Log in</button>
    )
   
    const introduction = () => {
       return (
            <button onClick={logout}
           className="profile-dropdown-button"
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
  
    const profileButton = () => (
      <div className="profile-dropdown">
        
        <span className="main-page-login-button profile">Profile
         
        <img src={currentUser.photoUrl} alt="" />
          
        </span>
        <ul className="profile-dropdown-content">
          <li>
         {introduction(currentUser, logout)}
          </li>
          {/* <li>{messages()}</li>
          <li>{trips()}</li>
          <li>{saved()}</li>
          <li>{manageListings()}</li> */}

        </ul>
      </div>
    )
    const messages = () => (
      <button
        className="profile-dropdown-button"
      >Messages
      </button>
    )

    const trips = () => (
      <button
        className="profile-dropdown-button"
      >Trips
      </button>
    )

    const saved = () => (
      <button
            className="profile-dropdown-button"
        >Saved
      </button>
    )

    const manageListings = () => (
      <button
            className="profile-dropdown-button"
        >Manage Listings
      </button>
    )
   
    
       if (currentUser) {
        return(
            <div
            className="main-page-header-button-container">
                {/* <li 
                >
                  {globeCurrency()}</li>
                <li>{switchToHosting()}</li>
                <li>{hostAnExperience() }</li>
                <li>{help()}</li> */}
                <li className="outer-li-profile">{profileButton()}</li>
                {/* <li>{introduction(currentUser, logout)}</li> */}
            </div>
        )
       } else {
           return(
               <div
               className="main-page-header-button-container">
                  {/* <li>{globeCurrency()}</li>
                  <li>{hostYourHome()}</li>
                  <li>{hostAnExperience()}</li>
                  <li>{help()}</li> */}
                  <li>{mainPageSignupButton()}</li>
                  <li>{mainPageLoginButton()}</li>
               </div>
           ) 
       }   
}

export default NavBar;