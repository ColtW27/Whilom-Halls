import React from 'react';
// import { fetchListings } from '../../util/listing_api_util';
import { withRouter, Link } from 'react-router-dom';
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
        // debugger
        e.preventDefault();
        this.setState({searchTerm: query}, ()=> {
          console.log(this.state.searchTerm)
        })
      }
    }

    componentDidUpdate(prevProps, prevState){

      if(prevState.searchTerm !== this.state.searchTerm) {
        this.setState( {listings: this.props.listings.filter(listing => listing.name
          .toLowerCase()
          .includes(this.state.searchTerm
          .toLowerCase()))})
          return
      }
      if (prevProps.listings !== this.props.listings){

        this.setState( {listings: this.props.listings.filter(listing => listing.name
          .toLowerCase()
          .includes(this.state.searchTerm
          .toLowerCase()))})
          return
      }
    }
  
    resultsFor(searchTerm, listings) {
      if (listings.length === 0) {
        return(
          <div className="results-for">
            Sorry, but there are no homes matching "{this.state.searchTerm}"
          </div>
          )
      }
      if (searchTerm.length === 0 ) {
        return null;
      } else {
        return (
          <div>Showing you results for "{searchTerm}"</div>
        )
      }
    }
    render(){
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
          <div className="results-for">
            {this.resultsFor(this.state.searchTerm, listings)}
           
            
          </div>
          <div>
           {listings}
          </div>
        </div>
        )
    }
};

export default withRouter (ListingsIndex);