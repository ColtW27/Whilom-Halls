import React from 'react';
// import DatePicker from "react-datepicker";

class DestinationSearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      listingQuery: ""
    }

    this.updateSearch = this.updateSearch.bind(this);
  }
  updateSearch(key) {
    console.log(this.state);
    // debugger
    return e => this.setState({
      [key]: e.target.value
    })
  }

  render(){
    return (
      <div className= "destination-search-bar-container">
        <form className= "destination-search-bar-form"
        id="searchform"
        onSubmit={this.props.handleQuery(this.state.listingQuery)}>
          <div
          className="destination-search left">
            <div
              className="dest-search-left-inner-div-1">LOCATION
            </div>  
            <input type="search"
              value={this.state.listingQuery}
              onChange={this.updateSearch('listingQuery')}
              placeholder="Where are you going?"
            />
          </div>
       
          <button
            className="destination-search center">
            <div
            className="dest-search-center-inner-div-1">
              CHECK IN/ CHECK OUT
            </div>  
            <div
            className="dest-search-center-inner-div-2">
              July 4 - 12
            </div>  
          </button>
          
          <button
          className="destination-search right">
            <div
            className="dest-search-right-inner-div-1">
              GUESTS
            </div>
            <div
            className="dest-search-right-inner-div-2">
              Add Guests
            </div>
          </button>

          <div
          className="destination-search submit-background">
          <button type="submit"
              className="destination-search-bar-form submit "
          value=""
          form="searchform"
          > 🔍 Search</button>
          </div>
        </form>
      </div>
    )
  }
}


export default DestinationSearchBar;