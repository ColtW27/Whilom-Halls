import React from 'react';

const DestinationSearchBar = () =>{
  return (
    <div className= "destination-search-bar-container">
      <form className= "destination-search-bar-form"
      id="searchform">
        <div
        className="destination-search-left-container">
          <input type="search"
          className="destination-search left"/>
        </div>

        <div
        className="destination-search-left-container">
          <input type="search"
          className="destination-search center"/>
        </div>
        
        <div
        className="destination-search-left-container">
          <input type="search"
          className="destination-search right"/>
        </div>

        <div
        className="destination-search submit-background">
        <button type="submit"
         value=""
         form="searchform"
         > 🔍 Search</button>
        </div>
      </form>
    </div>
  )
}


export default DestinationSearchBar;