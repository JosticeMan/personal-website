import React, { Component } from 'react';
import '../../css/contact/SocialContact.css';

export class SocialContact extends Component {
    render() {
        return (
            <div className="social-contact-outer-container">
                <div className="social-contact-container">
                    <a className="social-contact-link" href="mailto:devjustinyau@gmail.com"><i className="social-side-bar-icon fab fa-envelope-square"></i></a>
                    <a className="social-contact-link" href="tele:646-387-1857"><i className="social-side-bar-icon fab fa-phone-square"></i></a>
                    <a className="social-contact-link" href="https://www.facebook.com/justin.yau.35"><i className="social-side-bar-icon fab fa-facebook-square"></i></a>
                    <a className="social-contact-link" href="https://www.linkedin.com/in/justin-yau-395534167/"><i className="social-side-bar-icon fab fa-linkedin-square"></i></a>
                    <a className="social-contact-link" href="https://github.com/JosticeMan"><i className="social-side-bar-icon fab fa-github-square"></i></a>
                </div>
            </div>
        );
    }
}
