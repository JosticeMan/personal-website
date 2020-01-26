import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo/main-logo.png';
import resume from '../../files/JY Resume.pdf';

import '../../css/header/Header.css';

export class Header extends Component {
    render() {
        return (
            <nav className="header-outer-container header-navbar navbar navbar-expand-md">
                <Link to="/" className="header-logo">
                    <img src={logo} alt="logo"/>
                </Link>
                <div className="container header-container">
                    <button className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#header-navbar-toggler"
                            aria-controls="header-navbar-toggler"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <i className="header-bars fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="header-navbar-toggler">
                        <div className="header-right ml-auto form-inline my-3 my-lg-0">
                            <Link className="header-link" to="/work">
                                Work
                            </Link>
                            <a className="header-link" rel="noopener noreferrer" target="_blank" href={resume}>
                                Resume
                            </a>
                            <Link className="header-link" to="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
