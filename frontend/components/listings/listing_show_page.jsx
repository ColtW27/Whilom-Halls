import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingShowPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listing: this.props.listing
        }
        // this.id = parseInt(this.props.match.params.id)
    }
    
    componentDidMount() {
        console.log(this.state)
        console.log(this.props)
        this.props.fetchListing(parseInt(this.props.match.params.id))
        .then( response => {
        console.log(response)
        this.setState({listing: response.listing});
        });
    }
    
    render(){
    // debugger
        // const listing = this.state.listing
        const listing = this.state.listing
        // console.log(listing)
        if (!listing){
            return <div>Loading...</div>
        } else {
        console.log({listing})
        return(
        <div>
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