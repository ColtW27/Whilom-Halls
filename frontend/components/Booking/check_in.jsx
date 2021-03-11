import React from 'react';

const CheckIn = props => (
  <div className="check_in_box">
    {/* I am the Check In container! */}
    <div className="check_in_out_border_box">
      <button>Check-In</button>
      Add Date
    </div>
    <div className="check_in_out_border_box">
      <button>Checkout</button>
      Add Date
    </div>
  </div>
);

export default CheckIn;