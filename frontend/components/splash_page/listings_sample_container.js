import { connect } from 'react-redux';
import ListingSample from './listing_sample';
import { fetchListings, fetchListing } from '../../actions/listings_actions';

const mSTP = state => ({
    listings: Object.values(state.entitiies.listings)
})

const mDTP = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id)),
    fetchListings: () => dispatch(fetchListings())
})

export default connect(mSTP, mDTP)(ListingSample);