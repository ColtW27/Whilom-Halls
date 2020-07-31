import React from 'react';
import { withRouter } from 'react-router-dom';
import DestinationSearchBar from '../destination_search_bar/destination_searchbar';


class ListingSample extends React.Component{
    render(){
      return(
          < DestinationSearchBar />
      )
    }
}

export default withRouter (ListingSample);