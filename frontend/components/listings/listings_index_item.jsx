import React from 'react';
import {Link} from 'react-router-dom'
const ListingsIndexItem = ({listing}) => {
  return (
    <Link to ={`listings/${listing.id}`}>
      <li className= "listing-index-item">
        

          <div className="slider">
              <div className="slide" id="one"><img src={listing.photoUrls[0]} alt="" />
                  {/* <a href="#five">⬅️</a>
                  <a href="#two">➡️</a> */}
             
              </div>

              <div className="slide" id="two"><img src={listing.photoUrls[1]} alt="" />
                  {/* <a href="#one">⬅️</a>
                  <a href="#three">➡️</a> */}
               
              </div>
              <div className="slide" id="three"><img src={listing.photoUrls[2]} alt="" />
                  {/* <a href="#two">⬅️</a>
                  <a href="#four">➡️</a> */}
             
              </div>
              <div className="slide" id="four"><img src={listing.photoUrls[3]} alt="" />
                  {/* <a href="#three">⬅️</a>
                  <a href="#five">➡️</a> */}
              </div>

              <div className="slide" id="five"><img src={listing.photoUrls[4]} alt="" />
                  {/* <a href="#four">⬅️</a>
                  <a href="#one">➡️</a>  */}
              </div>
          </div>
          <div className="listing-text">
          <p className="title">{listing.name}</p>
            <div className = "inner-index-item-div">
              <p>{listing.max_num_guests}  guests</p>
              <p>{listing.bedrooms}  bedrooms</p>
              <p>{listing.bathrooms}  baths</p>
              {/* <p>{listing.description}</p> */}
            </div>
            <div className="inner-index-item-div-price">
              <p>${listing.pricing}  per night</p>
            </div>
          </div>
          {/* <img src={listing.photoUrl} alt="listing-pictures"/> */}
      </li>
    </Link>
  )
}


export default ListingsIndexItem;





    // <div id="image-slider">
    //     <ul>
    //         <li id="one"><img src={listing.photoUrls[1]} alt="" />
    //             <Link to="#five">⬅️</Link>
    //             <Link to="#two">➡️</Link>
    //             <a href="#five">⬅️</a>
    //                       <a href="#two">➡️</a>
    //         </li>

    //         <li id="two"><img src={listing.photoUrls[2]} alt="" />
    //             <a href="#one">⬅️</a>
    //                       <a href="#three">➡️</a>
    //             <Link to="#one">⬅️</Link>
    //             <Link to="#three">➡️</Link>
    //         </li>

    //         <li id="three"><img src={listing.photoUrls[3]} alt="" />
    //             <a href="#two">⬅️</a>
    //             <a href="#four">➡️</a>
    //             {/* <Link to="#two">⬅️</Link>
    //                       <Link to="#four">➡️</Link> */}
    //         </li>

    //         <li id="four"><img src={listing.photoUrls[4]} alt="" />
    //             <a href="#three">⬅️</a>
    //             <a href="#five">➡️</a>
    //             {/* <Link to="#three">⬅️</Link>
    //                       <Link to="#five">➡️</Link> */}
    //         </li>

    //         <li id="five"><img src={listing.photoUrls[5]} alt="" />
    //             <a href="#four">⬅️</a>
    //             <a href="#one">➡️</a>
    //             {/* <Link to="#four">⬅️</Link>
    //                       <Link to="#one">➡️</Link> */}

    //         </li>

    //     </ul>
    // </div>