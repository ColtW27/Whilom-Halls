import React from "react";
import GreetingContainer from './greeting_container';
import Modal from './modal/modal'
import { Link } from 'react-router-dom';
import HeaderMessage from './header/header_message'
const App = () => (
    <div>
      <HeaderMessage />
      < Modal />
      <header className= "header-in-app">
          <Link to='/'
                className="logo-link-home">
              <h2 className='Logo'>〄 Whil𝕠m H𝕒lls  </h2>
                    {/* 𝒲𝒽𝒾𝓁𝓸𝓂 ℋ𝒶𝓁𝓁𝓈 */}
          </Link>
          < GreetingContainer className="greeting-container"/>
      </header>
    </div>
);

export default App;