
import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from './store/store';
import { fetchListings, fetchListing} from "./util/listing_api_util"
import { login, logout, signup } from './actions/session_actions'
//  import { login } from './util/session_api_util' // for testing api util login
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store;
    if (window.currentUser){
      const initialState = {
        entities: {
          users: { [ window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
      };
      store = configureStore(initialState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }

//testing
window.fetchListings = fetchListings;
window.fetchListing = fetchListing;
    ReactDOM.render(< Root store={store}/>, root);
});