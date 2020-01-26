import React, { Component } from 'react';
import '../../css/work/WorkBlock.css';
import { Row, Col } from 'react-bootstrap';

export class WorkBlock extends Component {
    render() {
        return (
            <div className="work-block-outer-container">
                <div className="work-block-container">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <div>
                                <b>{this.props.companyName}</b>, {this.props.companyLocation} <div className="work-inline"> <b>{this.props.workTime}</b> </div>
                            </div>
                            <hr />
                        </Col>
                        <Col sm={12} md={12} lg={12}>
                            <div>
                                <i>{this.props.companyDescription}</i>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12}>
                            <div>
                                <b>{this.props.companyRole}</b>
                            </div>
                        </Col>
                        {this.props.companyResponsibilities.map((item, ind) =>
                            <Col sm={12} md={12} lg={12} key={"block-responsibilities-" + this.props.companyName + "-" + ind}>
                                <div>
                                    - {item}
                                </div>
                            </Col>)}
                    </Row>
                </div>
            </div>
        );
    }
}
