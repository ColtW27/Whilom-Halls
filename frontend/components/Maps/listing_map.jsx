import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
// const MAPS_API_KEY = ENV["MAPS_API_KEY"];
// const MAPS_API_KEY = MAPS_API_KEY;

function statusChecker(input) {
  return (
    <Marker
      title={input.name}
      key={input.id}
      position={{ lat: input.latitude, lng: input.longitude }}
    />
  );
}

class ListingMap extends React.Component {

    // componentDidMount() {
    //     const mapOptions = {
    //         center: { lat: 44.225507, lng: -68.324317 },
    //         zoom: 13
    //     };
      
    //     this.map = new google.maps.Map(this.mapNode, mapOptions);
    // }
  render(){
     
      const {listing, listings} = this.props;
      return (
        <Map
        
          google={this.props.google}
          zoom={9}
          initialCenter={
            !!listing
              ? { lat: listing[0].latitude, lng: listing[0].longitude }
              : { lat: 40.7128, lng: -73.935242 }
          }
        >
          {(listing !== undefined)
            ? statusChecker(listing)
            : listings.map(data => {
 
                return (
                  <Marker
                    title={data.name}
                    key={data.id}
                    position={{
                      lat: data.latitude,
                      lng: data.longitude,
                    }}
                  />
                );
              })}
          <Marker onClick={this.onMapClick} name={"Current location"} />
        </Map>
      );
  }
}

// export default ListingMap;
export default GoogleApiWrapper({
  apiKey: `${window.googleAPIKey}`
  // apiKey: MAPS_API_KEY
  // apiKey: ENV["MAPS_API_KEY"]
  // apiKey: (`${ENV["MAPS_API_KEY"]}`)
  // apiKey: `${ENV["MAPS_API_KEY"]}`
  // apiKey: `${ENV["API_KEY"]}`
  // apiKey: `${MAPS_API_KEY}`
  // apiKey: `${ENV['MAPS_API_KEY']}`
  
})(ListingMap);