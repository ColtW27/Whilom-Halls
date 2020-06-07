import React from 'react';

const DestinationSearchBar = () =>{
  return (
    <div className= "destination-search-bar-container">
      <form className= "destination-search-bar-form"
      id="searchform">
        <div
        className="destination-search left">
          <div
            className="">LOCATION
          </div>  
          <input type="search"
            placeholder="Where are you going?"
          />
        </div>

        <button
          className="destination-search center">
          <div
          className="dest-search-center-inner-div-1">
            CHECK IN/ CHECK OUT
          </div>  
          <div
          className="dest-search-center-inner-div-2">
            July 4 - 12
          </div>  
        </button>
        
        <button
        className="destination-search right">
          <div
          className="">
            GUESTS
          </div>
          <div
          className="">
            Add Guests
          </div>
        </button>

        <div
        className="destination-search submit-background">
        <button type="submit"
            className="destination-search-bar-form submit "
         value=""
         form="searchform"
         > 🔍 Search</button>
        </div>
      </form>
    </div>
  )
}


export default DestinationSearchBar;