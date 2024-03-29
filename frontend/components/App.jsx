import React from "react";
import { Link, Route, Switch} from 'react-router-dom';
// import HeaderMessage from './header/header_message'
import Modal from './modal/modal'
import ScrollToTop from './scroll_restore/scroll_restoration'
import NavBarContainer from './navbar/navbar_container';
import FooterContainer from "./footer/footer_container";
import FooterMessage from "./sub_footer/footer_message";
import FutureDestinationsContainer from "./future_dests_bar/future_destinations_container";
// import DestinationSearchBarContainer from "./destination_search_bar/destination_searchbar_container"
import ListingsIndexContainer from './listings/listing_index_container';
import ListingShowContainer from './listings/listing_show_container';
import ListingSampleContainer from "./splash_page/listings_sample_container";
// import BookingsContainer from './Booking/booking_container';

const App = () => (
  <div>
    <ScrollToTop/>
    {/* <HeaderMessage /> */}
    <Modal />
    <header className= "header-in-app">
      <Link to='/'
        className="logo-link-home">
        <h2 className='Logo'>〄 Whil𝕠m H𝕒lls  </h2>
      </Link>
      <NavBarContainer className="greeting-container"/>  
    </header>
      <Switch>
        <Route exact path="/" component={ListingSampleContainer} />
        <Route path="/listings/:id" component={ListingShowContainer}/>
        <Route path="/listings" component={ListingsIndexContainer} />
      </Switch>
      <Route exact path="/" component={FutureDestinationsContainer } />
      <Route path="/" component={FooterContainer} />
      <Route path="/" component={FooterMessage} />
  </div>
);

export default App;