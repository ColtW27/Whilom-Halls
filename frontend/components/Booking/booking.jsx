import React from 'react';
import CheckInContainer from "./check_in_container";
import GuestContainer from './guest_container';

const Booking = () => {
  return (
    <div className = 'booking-container'>
      I am the booking component from here
        <CheckInContainer />
        <GuestContainer />

      to here
    </div>
  )

};

export default Booking;