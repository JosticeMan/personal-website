import React, { Component } from 'react';
import '../../css/landing/Homepage.css';
import {AnimatedMe} from "./AnimatedMe";
import {TypingInfo} from "./TypingInfo";
import {AboutMe} from "./AboutMe";

export class Homepage extends Component {
    render() {
        return (
          <div className="homepage-outer-container">
              <div className="homepage-container">
                  <div className="three-container">
                      <TypingInfo />
                      <AnimatedMe/>
                  </div>
                  <AboutMe />
              </div>
          </div>
        );
    }
}
