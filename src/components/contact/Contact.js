import React, { Component } from 'react';
import '../../css/contact/Contact.css';
import {SocialContact} from "./SocialContact";
import contact from "../../images/logo/bitmoji_contact.png";

export class Contact extends Component {
    render() {
        return (
            <div className="contact-outer-container">
                <div className="contact-container">
                    <img src={contact} alt="Get in Touch" />
                    <SocialContact />
                    <div className="contact-explicit-details">
                        <b> Main Email </b> <br /> devjustinyau@gmail.com <br />
                        <b> Academic Email </b> <br /> jy1896@rit.edu <br />
                        <b> Phone Number </b> <br /> 646-387-1857 <br />
                    </div>
                </div>
            </div>
        );
    }
}
