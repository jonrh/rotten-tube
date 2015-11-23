import React from "react";
import { Button, Grid, Row, Col, Image } from "react-bootstrap";

class ChannelPage extends React.Component {
    render() {
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
                        <h1>Name of channel</h1>
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
                        <iframe width="300" height="169" src="https://www.youtube.com/embed/UXS8UVJuGoI" frameborder="0" allowfullscreen></iframe>
                    </Col>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <h2>Reviews:</h2>
                        Review1 <br />
                        Review2 <br />
                    </Col>
                    <Col md={1}></Col>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <h2>Write a review</h2>
                        Name: <input type="text" /> <br />
                        Rating: <input type="text" /> <br />
                        Comment: <input type="text" />
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Grid>
        );
    }
}

export default ChannelPage;