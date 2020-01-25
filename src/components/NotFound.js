import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/NotFound.css';

export class NotFound extends Component {
    render() {
        return (
            <div className="not-found-container">
                <div className="text">
                    <b> Woops! I was unable to find that page! </b> <br />
                    Are you in the right place? <br />
                    Back to <Link to="/">home</Link>!
                </div>
            </div>
        );
    }
}
