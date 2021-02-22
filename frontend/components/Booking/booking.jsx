import React from 'react';
import CheckInContainer from "check_in_container";
import GuestContainer from './guest_container';

const Booking = () => {
  return (
    <div className = 'booking-container'>
        <CheckInContainer />
        <GuestContainer />
    </div>
  )

};

export default Booking;