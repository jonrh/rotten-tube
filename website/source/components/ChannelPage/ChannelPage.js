"use strict";

import React from "react";
import { Button, Grid, Row, Col, Image, Input } from "react-bootstrap";
const Paper = require('material-ui/lib/paper');
const TextField = require('material-ui/lib/text-field');

import Review from "./Review";
import { fetchReviews, fetchChannelByID, postReview } from "./../../data_fetching/rest.js";

class ChannelPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channel: {
                id: 0,
                name: "",
                url: "",
                category: "",
                rating: 0
            }
        };

        this.fetchChannelAndReviews();
    }

    fetchChannelAndReviews() {
        fetchReviews(this.props.channelID).then(listOfReviews => {
            this.setState({
                reviews: listOfReviews
            });
        });

        fetchChannelByID(this.props.channelID).then(channel => {
            this.setState({
                channel: channel
            });
        });
    }

    handleReviewSubmit(event) {
        const name = this.refs.name.getValue();
        const rating = this.refs.rating.getValue();
        const comment = this.refs.comment.getValue();

        postReview(this.props.channelID, name, rating, comment)
            .then(() => {
                this.fetchChannelAndReviews();
            });
    }

    render() {
        let reviews = <span></span>;
        if (this.state && this.state.reviews) {
            reviews = this.state.reviews.map(review => {
                return <Review review={review} />
            });
        }

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
                        <h1>{this.state.channel.name}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <iframe width="300" height="169" src="https://www.youtube.com/embed/UXS8UVJuGoI" frameborder="0" allowfullscreen></iframe>
                    </Col>
                    <Col md={4}>
                        <iframe width="300" height="169" src="https://www.youtube.com/embed/UXS8UVJuGoI" frameborder="0" allowfullscreen></iframe>
                    </Col>
                    <Col md={4}>
                        <iframe width="300" height="169" src="https://www.youtube.com/embed/0weCqOLSPfs" frameborder="0" allowfullscreen></iframe>
                    </Col>
                </Row>
                <br />

                <h2>Reviews:</h2>
                <Paper zDepth={2} rounded={false}>
                    {reviews}
                </Paper>
                <br />
                <Paper zDepth={2} rounded={false}>

                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>

                        <h2>Write a review</h2>
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

                    </Col>
                    <Col md={3}></Col>
                </Row>
                    <br />
                </Paper>
            </Grid>
        );
    }
}

export default ChannelPage;