import React, { Component } from 'react';
import '../../css/work/Projects.css';
import { Col } from 'react-bootstrap';

export class Projects extends Component {
    render() {
        if(!this.props) {
            return null;
        }

        return (
            <Col sm={12} md={6} lg={6}>
                <div className="hovereffect">
                    <img className="img-responsive" src={require("../../images/project/" + this.props.projectImage + ".png")} alt="" />
                        <div className="overlay">
                            <h2>{this.props.projectName}</h2>
                            <p>
                                {this.props.projectLink !== "" ? <a target={"_blank"} href={this.props.projectLink}>View Code</a>: ''}
                                {this.props.projectDescription ? this.props.projectDescription: ''}
                            </p>
                        </div>
                </div>
            </Col>
        );
    }
}
