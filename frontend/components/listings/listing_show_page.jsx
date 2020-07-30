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
        const listing = this.state.listing
    
    if (!listing){
        return <div>Loading...</div>
    } else {
        let listingPhotosArr = [];
        for (let i = 1; i < 5; i++){
           let photo = listing.photoUrls[i]
            listingPhotosArr.push(<li key={i}><img src={photo} alt="listing" /></li>)
        }
        return(
            <div className="outer-listing-show-container">
         <h1>{listing.name}</h1>
         <div className="listing-show-photo-container"> 
          <img className="first-listing-photo" src={listing.photoUrls[0]} alt="listing"/>
          <div className="listing-show-page-4-main-photos">
              <ul className="">
                  {listingPhotosArr}
              </ul>
          </div>
        </div>
        <h2>Entire Home</h2>
        <div className="bottom-content">
          <ul>
            <li>{listing.description}</li>
          </ul>
        </div>
        </div>
        )
        }
    }
};
export default withRouter (ListingShowPage);