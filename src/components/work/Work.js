import React, { Component } from 'react';
import '../../css/work/Work.css';
import {Experience} from "./Experience";

export class Work extends Component {
    render() {
        return (
            <div className="work-outer-container">
                <div className="work-container">
                    <Experience />
                </div>
            </div>
        );
    }
}
