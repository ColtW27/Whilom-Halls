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
        const reviewsHeader = [];
        const reviewsArr = null;
        if (reviewsArr === null ) {
            reviewsHeader.push(<h4>No Reviews (yet)</h4>);
            
        } else {
            listing.reviews.map(review => {
                reviewsArr.push(<li key={review.id}>{review}</li>)
            })
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
                <h3>{listing.max_num_guests} guests · House · {listing.bedrooms} beds · {listing.bathrooms} baths</h3>
        <div className="bottom-content">
          <ul>
            <li>
              <ul className="policy-box">
                <li className="bold">⌂   Entire Home</li>
                <li className="regular">You will have the house to yourself.</li>
                <li className="bold">✩   Experienced Host</li>
                <li className="regular">This host has many reviews</li>
                <li className="bold">📆   Cancellation Policy</li>
                <li className="regular">As always, cancel within 3 days for a complete refund.</li>
              </ul>
            </li>
            <li className="description">{listing.description}</li>
            <li>
              <h4>Amenities</h4>
              {/* {amenities, which will be defined later} */}
            </li>
            <li>{reviewsHeader}
              {reviewsArr}
            </li>
          </ul>
        </div>
        </div>
        )
        }
    }
};
export default withRouter (ListingShowPage);