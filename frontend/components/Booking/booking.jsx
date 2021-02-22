import React from 'react';
import CheckInContainer from "./check_in_container";
import GuestContainer from './guest_container';

class Booking extends React.Component {
  constructor(props){
    super(props)
    // pricing = props.pricing;
  }
  render(){
    return (
      <div className = 'booking-container'>
        <h3>{this.props.pricing}/ night</h3>
          <CheckInContainer />
          <GuestContainer />
        to here
      </div>
    )
    };
};

export default Booking;