"use strict";

import React from "react";
import { Row, Col } from "react-bootstrap";
const Paper = require('material-ui/lib/paper');

class Review extends React.Component {
    render() {
        return (
            <Row className="review" >
                <Col md={10}>
                    <h3>{this.props.review.username}, rating: {this.props.review.rating}</h3>
                    <p>{this.props.review.comment}</p>
                </Col>
                <br />
            </Row>
        );
    }
}

export default Review;