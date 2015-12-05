"use strict";

import React from "react";
import { Button, Grid, Row, Col, Image, Input } from "react-bootstrap";
import Paper from "material-ui/lib/paper";

import Review from "./Review";
import { postReview } from "./../../data_fetching/rest.js";

class ChannelPage extends React.Component {
    /**
     * When the Write review submit button is pressed.
     */
    handleReviewSubmit() {
        const name = this.refs.name.getValue();
        const rating = this.refs.rating.getValue();
        const comment = this.refs.comment.getValue();

        // Post the review to the REST API and then ask for the new review list
        // from the API. Once fetched the state will be updated and the UI
        // re-rendered.
        postReview(this.props.channel.id, name, rating, comment)
            .then(() => {
                this.props.fetchAllDataFn();
            });
    }

    render() {
        // If there are no reviews for this channel use an empty span, otherwise
        // return a list of <Review /> components
        let reviews = <span></span>;
        if (this.props.channel && this.props.channel.reviews) {
            reviews = this.props.channel.reviews.map(review => {
                return <Review review={review} />
            });
        }

        /**
         * Note: Currently we only have the 3 embedded youtube videos hardcoded,
         * that is, the 3 same videos will always be displayed.
         */
        return (
            <Grid className="channelPage">
                <Row>
                    <Col md={12}>
                        <a href="#/">
                            <Image id="logo" src="rottentube_logo.png" className="center-block small" responsive />
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <h1>{this.props.channel.name}</h1>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <iframe width="100%" height="169" src="https://www.youtube.com/embed/iqhJvadqtAc" frameborder="0" allowfullscreen></iframe>
                    </Col>
                    <Col md={4}>
                        <iframe width="100%" height="169" src="https://www.youtube.com/embed/l6MJe5wKT7Y" frameborder="0" allowfullscreen></iframe>
                    </Col>
                    <Col md={4}>
                        <iframe width="100%" height="169" src="https://www.youtube.com/embed/0weCqOLSPfs" frameborder="0" allowfullscreen></iframe>
                    </Col>
                </Row>

                <br />

                <Paper zDepth={5}>
                <Row>
                    <Col md={5} className="littleBitOfMarginNeverHurtNobody">
                        <h2>Reviews</h2>
                        <Paper zDepth={1}>
                            {reviews}
                            <br />
                        </Paper>
                    </Col>

                    <Col md={5} className="littleBitOfMarginNeverHurtNobody">
                        <h2>Write a review</h2>

                        <Paper zDepth={1}>
                            <div className="littleBitOfPaddingNeverHurtNobody">
                                <Input type="text" label="Name" ref="name" placeholder="Put your name here sure" />

                                <Input type="select" label="Rating" ref="rating" placeholder="select">
                                    <option value="0">select</option>
                                    <option value="1">1 - Terrible.</option>
                                    <option value="2">2 - Not worth my time</option>
                                    <option value="3">3 - Radha's love for the Irish climate</option>
                                    <option value="4">4 - Not my cup of tea</option>
                                    <option value="5">5 - It's ok</option>
                                    <option value="6">6 - I wouldn't kick it out of bed </option>
                                    <option value="7">7 - I like it </option>
                                    <option value="8">8 - Dog's bollocks</option>
                                    <option value="9">9 - I love it</option>
                                    <option value="10">10 - Better than Rems teaching (Impossible)</option>
                                </Input>
                                <Input type="textarea" label="Comment" ref="comment" placeholder="Got something to say ??" />
                                <Button onClick={this.handleReviewSubmit.bind(this)} active>Submit Review</Button>
                            </div>
                        </Paper>
                    </Col>
                </Row>
                </Paper>

            </Grid>
        );
    }
}

export default ChannelPage;