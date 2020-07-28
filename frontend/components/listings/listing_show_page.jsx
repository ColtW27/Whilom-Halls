import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingShowPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listing: this.props.listing,
            isLoading: false
        }
        this.id = parseInt(this.props.match.params.id)
    }
    
    componentDidMount() {
        this.props.fetchListing(this.id);
        // this.props.fetchListings();
       
        // this.setState({listing: false})
        // console.log(this.state)
    }
    // componentWillReceiveProps(newState) {
    //     this.setState({ listing: newState.listing });
    // }

    render(){
        // const listing = this.state.listing
        // debugger
        const listing = this.props.listing
        console.log(listing)
        if (!listing){
            return <div>Loading...</div>
        } else {
        console.log({listing})
        return(
        <div>
            {/* <div>{this.props.listing.name}</div> */}
         I am listing number {listing.id}
         {listing.name}
         {listing.id}
         {listing.description}
        </div>
        )
        }
    }
}
export default withRouter (ListingShowPage);