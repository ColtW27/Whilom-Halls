import React from 'react';
import AboutContainer from "./about_container"
import CommunityContainer from "./community_container"
import HostContainer from "./host_container"
import SupportContainer from "./support_container"
const Footer = () => {
    return (
      <div className = "footer-container">
        <AboutContainer />
        <CommunityContainer />
        <HostContainer />
        <SupportContainer />
      </div>
    )
}

export default Footer;