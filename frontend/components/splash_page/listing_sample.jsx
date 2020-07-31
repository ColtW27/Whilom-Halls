import React from 'react';
import { withRouter } from 'react-router-dom';
import FalseDestinationSearchBar from '../destination_search_bar/false_searchbar';


class ListingSample extends React.Component{
    render(){
      return(
        <div>
          < FalseDestinationSearchBar />
          <div className="you-dont-have-to-go-far">
            You Don't Have to Go Very Far...
          </div>
        </div>
      )
    }
}

export default withRouter (ListingSample);