import React from "react";
import { Link } from 'react-router-dom';
import HeaderMessage from './header/header_message'
import Modal from './modal/modal'
import NavBarContainer from './navbar/navbar_container';
import FooterContainer from "./footer/footer_container";
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
          < NavBarContainer className="greeting-container"/>
          <FooterContainer/>
      </header>
    </div>
);

export default App;