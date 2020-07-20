import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo/main-logo.png';
import resume from '../../files/JY Resume.pdf';
import withWindowDimensions from './WindowDimension.js';

import '../../css/header/Header.css';

class Header extends Component {

    render() {
        const { windowWidth } = this.props;
        if(windowWidth < 767) {
            return (
                <nav className="header-outer-container header-navbar">
                    <div className="container header-container">
                        <Link to="/" className="header-logo">
                            <img src={logo} alt="logo"/>
                        </Link>
                        <div className="header-links nav">
                            <Link className="header-link right" to="/work">
                                Work
                            </Link>
                            <a className="header-link right" rel="noopener noreferrer" target="_blank" href={resume}>
                                Resume
                            </a>
                            <Link className="header-link left" to="/hobby">
                                Hobby
                            </Link>
                            <Link className="header-link left" to="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav>
            );
        }

        return (
            <nav className="header-outer-container header-navbar">
                <div className="container header-container">
                    <div className="header-links">
                        <Link className="header-link right" to="/work">
                            Work
                        </Link>
                        <a className="header-link right" rel="noopener noreferrer" target="_blank" href={resume}>
                            Resume
                        </a>
                        <Link to="/" className="header-logo">
                            <img src={logo} alt="logo"/>
                        </Link>
                        <Link className="header-link left" to="/hobby">
                            Hobbies
                        </Link>
                        <Link className="header-link left" to="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withWindowDimensions(Header);
