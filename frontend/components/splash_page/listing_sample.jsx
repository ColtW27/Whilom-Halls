import React from 'react';
import { withRouter } from 'react-router-dom';
import FalseDestinationSearchBar from '../destination_search_bar/false_searchbar';
import ListingSampleItem from '../listings/listing_sample_item';

class ListingSample extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listings: this.props.listings
        }
    }
    componentDidMount(){
        // this.props.fetchListing(0);
        // this.props.fetchListing(1);
        // this.props.fetchListing(2);
        this.props.fetchListings()
        .then(listings => {
            this.setState({ listings:
            listings.listings})
        })
    // debugger
    }
    render(){
        let listings = this.state.listings
        // console.log(listings)
        if (listings.length === 0){
            return <div>Loading Destinations...</div>
        } else {
            
            let listings = []
            let that = this
            for(let i = 1; i < 4; i++){
                let listing = that.state.listings[i]
                console.log(that)
                let listingIndexItem = (
                   < ListingSampleItem
                       listing={listing}
                       key={listing.id}
                       fetchListings={that.props.fetchListings}
                   />)
                   listings.push(listingIndexItem)
            }
                return(
          <div>
            < FalseDestinationSearchBar />
            <div className="you-dont-have-to-go-far">
              You Don't Have to Go Very Far...
            </div>
            <div className="listing-sample-container"> 
              {listings}
            </div>
          </div>
      )
        }
    }
}

export default withRouter (ListingSample);