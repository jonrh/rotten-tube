"use strict";

import React from "react";
import { Row, Col } from "react-bootstrap";
import { Paper } from "material-ui";

/**
 * List one review for a YouTube channel
 */
class Review extends React.Component {
    render() {
        return (
            <div className="review">
                <h3>{this.props.review.username}, rating: {this.props.review.rating}</h3>
                <p>{this.props.review.comment}</p>
            </div>
        );
    }
}

export default Review;