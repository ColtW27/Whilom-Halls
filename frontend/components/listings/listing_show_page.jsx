import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingShowPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listing: this.props.listing
        }
        this.id = parseInt(this.props.match.params.id);
    }
    
    componentDidMount() {
        this.props.fetchListing(parseInt(this.id))
        .then( response => {
          this.setState({listing: response.listing});
        });
    }
    
    render(){
        for (i = 0; i < 4; i++){
            listing.photoUrls.map(photo => {
            <li><img src={photo} alt="listing"/></li>
        })}
        const listing = this.state.listing
        if (!listing){
            return <div>Loading...</div>
        } else {
        return(
        <div className="outer-listing-show-container">
         <h1>{listing.name}</h1>
        <img className="first-listing-photo" src={listing.photoUrls[1]} alt="listing"/>
        <div>
            <ul>
                {listingPhotos}
            </ul>
        </div>
         {listing.description}
        </div>
        )
        }
    }
};
export default withRouter (ListingShowPage);