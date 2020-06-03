import React from "react";
import GreetingContainer from './greeting_container';
import Modal from './modal/modal'
import { Link } from 'react-router-dom';

const App = () => (
    <div>
        < Modal />
        <header>
            <Link to='/'>
              <h1>Whilom Halls</h1>
            </Link>
            < GreetingContainer />
        </header>
    </div>
);

export default App;