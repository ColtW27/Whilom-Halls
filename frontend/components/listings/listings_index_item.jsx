import React from 'react';

const ListingsIndexItem = ({listing}) => {
    return (
      <li className= "listing-index-item">
          <h3>{listing.name}</h3>
          <img src={listing.photoUrls[1]} alt=""/>
            <div className = "inner-index-item-div">
              <p>{listing.max_num_guests}</p>
              <p>{listing.bedrooms} </p>
              <p>{listing.bathrooms}</p>
            </div>
            <div className="inner-index-item-div-price">
              <p>${listing.pricing}</p>
            </div>

          {/* <img src={listing.photoUrl} alt="listing-pictures"/> */}
      </li>
    )
}


export default ListingsIndexItem;