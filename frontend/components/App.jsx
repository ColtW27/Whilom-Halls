import React from "react";
import { Link } from 'react-router-dom';
import HeaderMessage from './header/header_message'
import Modal from './modal/modal'
import NavBarContainer from './navbar/navbar_container';
import FooterContainer from "./footer/footer_container";
import FooterMessage from "./sub_footer/footer_message"
import FutureDestinationsContainer from "./future_dests_bar/future_destinations_container";
import DestinationSearchBarContainer from "./destination_search_bar/destination_searchbar_container"
import ListingsIndexContainer from './listings/listing_index_container'
import { Route } from "react-router-dom";

const App = () => (
    <div>
      {/* <HeaderMessage /> */}
      < Modal />
  
      <header className= "header-in-app">
          <Link to='/'
                className="logo-link-home">
              <h2 className='Logo'>〄 Whil𝕠m H𝕒lls  </h2>
                    {/* 𝒲𝒽𝒾𝓁𝓸𝓂 ℋ𝒶𝓁𝓁𝓈 */}
          </Link>
      < NavBarContainer className="greeting-container"/>  
      </header>
      <DestinationSearchBarContainer />
    {/* <Route exact path="/" component={ListingsIndexContainer} /> */}
    <ListingsIndexContainer />
      <FutureDestinationsContainer />
      <FooterContainer />
      <FooterMessage />
    </div>
);

export default App;