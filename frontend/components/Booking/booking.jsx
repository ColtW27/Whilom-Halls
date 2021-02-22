import React from 'react';
import GuestContainer from './guest_container';
import CheckinContainer from "checkin_container";

const Booking = () => {
  return (
    <div className = 'booking-container'>
        <CheckinContainer />
        <GuestContainer />
    </div>
  )

};

export default Booking;