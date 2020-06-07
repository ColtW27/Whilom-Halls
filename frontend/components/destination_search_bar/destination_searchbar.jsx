import React from 'react';

const DestinationSearchBar = () =>{
  return (
    <div className= "destination-search-bar-container">
      <form >

        <input type="text"
        className="destination-search-left"/>
        <input type="text"
        className="destination-search-center"/>
        <input type="text"
        className="destination-search-right"/>
        <button type="submit" value=""> 🔍 Search</button>
      </form>
    </div>
  )
}


export default DestinationSearchBar;