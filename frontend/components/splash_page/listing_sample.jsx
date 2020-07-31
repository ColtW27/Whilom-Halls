import React from 'react';
import { withRouter } from 'react-router-dom';
import FalseDestinationSearchBar from '../destination_search_bar/false_searchbar';


class ListingSample extends React.Component{
    render(){
      return(
          < FalseDestinationSearchBar />
      )
    }
}

export default withRouter (ListingSample);