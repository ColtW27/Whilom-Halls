import React from 'react';
import CheckInContainer from "./check_in_container";
import GuestContainer from './guest_container';

class Booking extends React.Component {
  constructor(props){
    super(props)
  }

  handleSubmit(e){
    e.preventDefault();

  };
  render(){
    return (
      <form className='booking-container' onSubmit={this.handleSubmit}>
        <div className="booking-price-rating-header">
        <h3>{this.props.pricing}/ night</h3>
        <h4>4.5</h4>
        </div>
        <div className="check_in_out_guest_border_box">
          <CheckInContainer /> {/* this needs to open a field and dropdown for calendars*/}
          <GuestContainer />
        </div>
          <button className="availability-button-booking">Check Availability</button>
      </form>
    )
    };
};

export default Booking;