import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <nav className="blue-grey">
            <div className="nav-wrapper">
                <Link style={{paddingLeft: '8px'}} to="/" className="brand-logo">Fire Chat</Link>
                <ul className="right">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/chat-room">Chat Room</Link>
                    </li>
                    <li>
                        <Link to="/choose-name">Change Name</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
