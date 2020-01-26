import React, { Component } from 'react';
import '../../css/social/SocialSideBar.css';

export class SocialSideBar extends Component {
    render() {
        return (
            <div className="social-side-bar-outer-container">
                <div className="social-side-bar-container">
                    <a className="social-side-bar-link" href="https://www.facebook.com/justin.yau.35"><i className="social-side-bar-icon fab fa-facebook-square"></i></a><br />
                    <a className="social-side-bar-link" href="https://www.linkedin.com/in/justin-yau-395534167/"><i className="social-side-bar-icon fab fa-linkedin-square"></i></a><br />
                    <a className="social-side-bar-link" href="https://github.com/JosticeMan"><i className="social-side-bar-icon fab fa-github-square"></i></a>
                </div>
            </div>
        );
    }
}
