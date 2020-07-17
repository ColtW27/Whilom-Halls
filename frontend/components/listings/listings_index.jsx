import React from 'react';
// import { fetchListings } from '../../util/listing_api_util';
import { withRouter } from 'react-router-dom';
import ListingsIndexItem from './listings_index_item';
import SearchBar from "../destination_search_bar/destination_searchbar"

class ListingsIndex extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      listings: this.props.listings,
      searchTerm: ""
    }
    this.handleQuery = this.handleQuery.bind(this);
  }
    componentDidMount(){
       this.props.fetchListings()
    }

    handleQuery(query){
      return (e)=> {
        e.preventDefault();
        this.setState({searchTerm: query})
      }
    }

    componentDidUpdate(prevProps, prevState){
      if(prevState.searchTerm !== this.state.searchTerm) {
        this.setState( {listings: this.props.listings.filter(listing => listing.name
          .toLowerCase()
          .includes(this.state.searchTerm
          .toLowerCase()))})
      }
      if (prevProps.listings !== this.state.listings){
        this.setState( {listings: this.props.listings.filter(listing => listing.name
          .toLowerCase()
          .includes(this.state.searchTerm
          .toLowerCase()))})
      }
    }

    render(){
      if (this.state.listings.length === 0) return null;
      const listings = this.state.listings.map(listing =>
        < ListingsIndexItem
          listing={listing}
          key={listing.id}
          fetchListings={this.props.fetchListings}
      />)

      return (
        <div className="">
          <div>
            <SearchBar handleQuery={this.handleQuery}/>
          </div>

          <div>
           {listings}
          </div>
        </div>
        )
    }
};

export default withRouter (ListingsIndex);