import React from 'react';
import { Link } from 'react-router-dom'

class HostContainer extends React.Component {
    render() {
        return (
            <div className="individual-footer-component">
                <h6>Ghost</h6>
                <ul>
                    <li><a href="https://www.allure.com/story/is-my-house-haunted-supernatural-signs" target="_blank">Ghost your Home</a></li>

                    <li><a href="https://www.youtube.com/results?search_query=ghost+escapades" target="_blank">Ghost an Escapade</a></li>

                    <li><a href="https://www.sciencenewsforstudents.org/article/science-ghosts" target="_blank">Sustainable Ghosting</a></li>

                    <li><a href="https://www.countryliving.com/life/travel/g22855332/ghost-tours-near-me/" target="_blank">Tours & Walk Throughs</a></li>

                    <li><a href="https://schloss-post.com/how-to-become-a-ghost/" target="_blank">Resources for Future Ghosts</a></li>
                </ul>
            </div>
        )
    }
};
export default HostContainer;