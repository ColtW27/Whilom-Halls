import React from 'react';
import { fetchListings } from '../../util/listing_api_util';
import ListingsIndexItem from './listings_index_item';

class ListingsIndex extends React.Component {
    componentDidMount(){
       this.props.fetchListings()
    }

    render(){
        const { listings } = this.props; 

      return (
          <div>
            <ul>
              {
              listings.map(listing => < ListingsIndexItem
                // fetchListings={fetchListings} 
                listing={listing}
                key={listing.id}
                    />)
                }
            </ul>
          </div>
        )
    }
};

export default ListingsIndex;