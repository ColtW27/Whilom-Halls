import { connect } from 'react-redux';
import FalseDestinationSearchBar from './false_searchbar';


const mSTP = state => ({
    listings: [
        state.entities.listings[1],
        state.entities.listings[2],
        state.entities.listings[3]
    ]
})

const mDTP = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id)),
    fetchListings: () => dispatch(fetchListings())
})

export default connect(mSTP, mDTP)(FalseDestinationSearchBar)