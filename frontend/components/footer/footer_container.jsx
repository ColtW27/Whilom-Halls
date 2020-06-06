import React from 'react';
import { connect } from 'react-redux';
import AboutContainer from "./about_container"
import CommunityContainer from "./community_container"
import HostContainer from "./host_container"
import SupportContainer from "./support_container"
class FooterContainer extends React.Component{
    render(){
        <div>
            <AboutContainer />
            <CommunityContainer/>
            <HostContainer/>
            <SupportContainer/>
        </div>

    }
}

// const mSTP = state => ({
   
// });

// const mDTP = dispatch => ({
    
// });

// export default connect(mSTP, mDTP)(Footer);
export default FooterContainer;