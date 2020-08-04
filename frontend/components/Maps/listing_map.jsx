import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


class ListingMap extends React.Component {

    componentDidMount() {
        const mapOptions = {
            center: { lat: 44.225507, lng: -68.324317 },
            zoom: 13
        };
      
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }
  render(){
      return (
        <div id="map-container" ref={(map) => (this.mapNode = map)}></div>
      );
  }
}

// export default ListingMap;
export default GoogleApiWrapper({
  //   apiKey: MAPS_API_KEY
  //   apiKey: `${MAPS_API_KEY}`/

})(ListingMap);