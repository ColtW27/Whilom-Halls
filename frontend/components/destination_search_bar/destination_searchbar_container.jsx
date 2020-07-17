// import React from 'react';
import { connect } from 'react-redux';
import DestinationSearchBar from "./destination_searchbar"

const mSTP = state => ({
    listing: state.listings[ownProps.match.params.id]
});

const mDTP = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id)),
    fetchListings: () => dispatch(fetchListings())
});

export default connect(mSTP, mDTP)(DestinationSearchBar);
