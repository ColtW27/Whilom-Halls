
import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from './store/store';
// import { login, logout } from './actions/session_actions'
//  import { login } from './util/session_api_util' // for testing api util login
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
  //Testing Start
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    // window.logout = logout;
  //Testing End

    ReactDOM.render(< Root store={store}/>, root);
});