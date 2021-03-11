import React from 'react';

const CheckIn = props => (
  <div className="check_in_box">
    {/* I am the Check In container! */}
    <button className="check_in_out_border_box">
      <div>Check-in</div>
      Add Date
    </button>
    <button>
      <div>Checkout</div>
      Add Date
    </button>
  </div>
);

export default CheckIn;