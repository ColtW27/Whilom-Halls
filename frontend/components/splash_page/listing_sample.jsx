import React from 'react';
import { withRouter } from 'react-router-dom';
import FalseDestinationSearchBar from '../destination_search_bar/false_searchbar';
import ListingsIndexItem from '../listings/listings_index_item';

class ListingSample extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listings: this.props.listings
        }
    }
    componentDidMount(){
    //     // this.props.fetchListing(1);
    //     // this.props.fetchListing(2);
    //     // this.props.fetchListing(3);
    //     this.props.fetchListings();
    // debugger
    }
    render(){
        // let listings = this.state.listings
        //     if (!listings){
        //         return <div>Loading Destinations...</div>
        //     } else {
        //          listings = this.state.listings.map(listing =>
        //             < ListingsIndexItem
        //                 listing={listing}
        //                 key={listing.id}
        //                 fetchListings={this.props.fetchListings}
        //             />)
                
                return(
          <div>
            < FalseDestinationSearchBar />
            <div className="you-dont-have-to-go-far">
              You Don't Have to Go Very Far...
            </div>
            <div>
              {/* {listings} */}
            </div>
          </div>
      )
        // }
    }
}

export default withRouter (ListingSample);