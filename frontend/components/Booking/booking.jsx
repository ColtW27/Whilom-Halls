import React from 'react';
import CheckInContainer from "./check_in_container";
import GuestContainer from './guest_container';

class Booking extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className='booking-container'>
        <h3>{this.props.pricing}/ night</h3>
          <CheckInContainer />
          <GuestContainer />
        <button className="destination-search-bar-form submit">Check Availability</button>
      </div>
    )
    };
};

export default Booking;