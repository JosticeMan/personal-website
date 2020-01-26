import React, { Component } from 'react';
import '../../css/footer/Footer.css';

export class Footer extends Component {

    render() {
        let year = (new Date()).getFullYear();

        return (
            <div className="footer-outer-container">
                <div className="footer-container">
                    <div>
                        justinyau.me © {year} Justin Yau
                    </div>
                </div>
            </div>
        );
    }
}
