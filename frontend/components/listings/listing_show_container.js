import React from 'react';
import { connect } from 'react-redux';
import ListingShowPage from '../listings/listing_show_page'
import { fetchListing } from '../../util/listing_api_util';


const mSTP = (state, ownProps) => {
    debugger
    return (

       { listing: state.listings[ownProps.match.params.id] }
    )
};

const mDTP = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id))
});

export default connect(mSTP, mDTP)(ListingShowPage)