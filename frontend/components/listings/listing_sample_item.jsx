import React from 'react';
import { Link } from 'react-router-dom'
const ListingSampleItem = ({ listing }) => {
    return (
        <Link to={`listings/${
            listing.id}`}>
            <li className="listing-sample-item">

                <div className="slider sample-item">
                    <div className="slide" id="one"><img src={listing.photoUrls[0]} alt="listing num 0" />
                    </div>

                    <div className="slide" id="two"><img src={listing.photoUrls[1]} alt="listing num 1" />
                    </div>

                    <div className="slide" id="three"><img src={listing.photoUrls[2]} alt="listing num 2" />
                    </div>

                    <div className="slide" id="four"><img src={listing.photoUrls[3]} alt="listing num 3" />
                    </div>

                    <div className="slide" id="five"><img src={listing.photoUrls[4]} alt="listing num 4" />
                    </div>
                </div>
                <div className="">
                    <p className="title">{listing.name}</p>
                    <div className="listing-sample-details">
                        <p>{listing.max_num_guests}  guests</p>
                        <p>{listing.bedrooms}  bedrooms</p>
                        <p>{listing.bathrooms}  baths</p>
                        <p>${listing.pricing}  per night</p>
                    </div>
                    {/* <div className="">
                    </div> */}
                </div>
            </li>
        </Link>
    )
}


export default ListingSampleItem;


