import React from 'react';
import CheckInContainer from "./check_in_container";
import GuestContainer from './guest_container';

class Booking extends React.Component {
  constructor(props){
    super(props)
  }

  handleSubmit = () => {

  };
  render(){
    return (
      <form className='booking-container' onSubmit={this.handleSubmit}>
        <h3>{this.props.pricing}/ night</h3>
          <CheckInContainer /> {/* this needs to open a field and dropdown for calendars*/}
          <GuestContainer />
        <button className="destination-search-bar-form submit">Check Availability</button>
      </form>
    )
    };
};

export default Booking;