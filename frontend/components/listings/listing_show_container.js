import { connect } from 'react-redux';
import  ListingShowPage  from '../listings/listing_show_page'
import { fetchListing, fetchListings } from '../../actions/listings_actions';


const mSTP = (state, ownProps) => {
    // debugger
    return {
       listing: state.entities.listings[ownProps.match.params.id] 
    }
};

const mDTP = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id)),
    // fetchListings: () => dispatch(fetchListings())
});

export default connect(mSTP, mDTP)(ListingShowPage)