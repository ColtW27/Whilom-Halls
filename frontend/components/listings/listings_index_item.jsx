import React from 'react';

const ListingsIndexItem = ({listing}) => {
    return (
      <li>
          <h3>{listing.name}</h3>
          <p>{listing.bedrooms} </p>
      </li>
    )
}


export default ListingsIndexItem;