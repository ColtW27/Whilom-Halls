import React from 'react';
import { Link } from 'react-router-dom';

class FalseDestinationSearchBar extends React.Component {
    

    render() {
        return (
            <div className="destination-search-bar-container">
            <Link to='/listings'>
                <form className="destination-search-bar-form"
                    id="searchform"
                    >
                    <div
                        className="destination-search left">
                        <div
                            className="dest-search-left-inner-div-1">LOCATION
            </div>
                        <input type="search"
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
            </Link>
            </div>
        )
    }
}


export default FalseDestinationSearchBar;