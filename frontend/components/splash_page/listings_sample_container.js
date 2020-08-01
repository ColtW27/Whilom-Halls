import { connect } from 'react-redux';
import ListingSample from './listing_sample';
import { fetchListings, fetchListing } from '../../actions/listings_actions';

const mSTP = state => {
    debugger
    return ({listings: Object.values(state.entities.listings)
    
    })
}

const mDTP = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id)),
    fetchListings: () => dispatch(fetchListings())
})

export default connect(mSTP, mDTP)(ListingSample);