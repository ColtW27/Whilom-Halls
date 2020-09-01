import React from 'react';
import { Link } from "react-router-dom"
const FutureDestinations = () => {
  return (
    <div>
      <div
        className="top-destination-header">
        <p>Top Destinations</p>
      </div>
      <div className="future-destinations-container">
       
          
        <ul className="individual-dest left" >
            <li><Link to="/">Lawrence, Kansas</Link></li>
            {/* <li><Link to="/">Belmont, North Carolina</Link></li>
            <li><Link to="/">Indianapolis, Indiana</Link></li> */}
        </ul>

        <ul className="individual-dest" >
            <li><Link to="/">Knoxville, Tennessee</Link></li>
            {/* <li><Link to="/">Galena, Illinois</Link></li>
            <li><Link to="/">Eureka, California</Link></li> */}
        </ul>

        <ul className="individual-dest" >
            <li><Link to="/">Providence, Rhode Island</Link></li>
            {/* <li><Link to="/">Hartford, Connecticut</Link></li>
            <li><Link to="/">Lynchburg, Virginia</Link></li> */}
        </ul>

        <ul className="individual-dest" >
            <li><Link to="/">Georgetown, Texas</Link></li>
            {/* <li><Link to="/">Cheyenne, Wyoming</Link></li>
            <li><Link to="/">Portsmouth, New Hampshire</Link></li> */}
        </ul>
      </div>
    </div>
  )
}

export default FutureDestinations;