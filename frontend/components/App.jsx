import React from "react";
import GreetingContainer from './greeting_container';
import Modal from './modal/modal'
import { Link } from 'react-router-dom';

const App = () => (
    <div>
        < Modal />
        <header className= "header-in-app">
            <Link to='/'
                className="logo-link-home">
              <h1 className='Logo'>Whilom Halls</h1>
            </Link>
            < GreetingContainer className="greeting-container"/>
        </header>
    </div>
);

export default App;