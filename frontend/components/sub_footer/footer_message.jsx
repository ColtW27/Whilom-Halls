import React from 'react';
import { Link } from 'react-router-dom';
const FooterMessage = () => {
    return (
        <div
            className="header-message-container">
            <div
                className="header-message">
                Get the lastest updates on world events.
        <Link to='/'
                    className="header-message-link">Learn more</Link>
            </div>
        </div>
    )
}

export default FooterMessage;