import React from 'react';
import AboutContainer from "./about_container"
import CommunityContainer from "./community_container"
import HostContainer from "./host_container"
import SupportContainer from "./support_container"
class Footer extends React.Component {
    render() {
        return (
            <div>
                <AboutContainer />
                <CommunityContainer />
                <HostContainer />
                <SupportContainer />
            </div>
        )
    }
}

export default Footer;