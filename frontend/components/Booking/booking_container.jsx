import React from 'react';
import { connect } from 'react-redux';
import Booking from "./booking"


const mSTP = state => ({
 
});

// const mSTP = (state, ownProps) => {
//     return {
//        listing: state.entities.listings[ownProps.match.params.id] 
//     }
// };
const mDTP = dispatch => ({
    
});

export default connect(mSTP, mDTP)(Booking);
// export default BookingsContainer;