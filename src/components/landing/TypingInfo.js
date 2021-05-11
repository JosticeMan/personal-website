import React, { Component } from 'react';
import '../../css/landing/TypingInfo.css';
import Typing from 'react-typing-animation';

export class TypingInfo extends Component {
    render() {
        return (
            <div className="typing-outer-container">
                <div className="typing-container">
                    <Typing speed={150} className="typing-text">
                        Justin Yau <br />
                        <Typing.Speed ms={0} />
                        Software Engineer <br /> <Typing.Delay ms={500} />
                        RIT CS Senior
                    </Typing>
                </div>
            </div>
        );
    }
}
