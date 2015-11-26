import React from "react";
import { Button, Grid, Row, Col, Image, Input } from "react-bootstrap";
const Paper = require('material-ui/lib/paper');
const TextField = require('material-ui/lib/text-field');
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
                        <iframe width="300" height="169" src="https://www.youtube.com/embed/0weCqOLSPfs" frameborder="0" allowfullscreen></iframe>
                    </Col>
                </Row>
                <br />
                <h2>Reviews:</h2>
                <Paper zDepth={2} rounded={false}>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>

                        <h3>Name: Jillian </h3>

                        <p>This is my review blah blah blah blah ......</p><br />

                    </Col>
                    <Col md={1}></Col>
                    <br />
                </Row>
                </Paper>
                <br />
                <Paper zDepth={2} rounded={false}>

                <Row>
                    <Col md={1}></Col>
                    <Col md={3}>

                        <h2>Write a review</h2>
                        <Input type="text" label="Name" placeholder="Put your name here sure" />

                        <Input type="select" label="Rating" placeholder="select">
                            <option value="select">select</option>
                            <option value="one">1 - Terrible.</option>
                            <option value="two">2 - Not worth my time</option>
                            <option value="three">3 - Radha's love for the Irish climate</option>
                            <option value="four">4 - Not my cup of tea</option>
                            <option value="five">5 - It's ok</option>
                            <option value="six">6 - I wouldn't kick it out of bed </option>
                            <option value="seven">7 - I like it </option>
                            <option value="eight">8 - Beer</option>
                            <option value="nine">9 - I love it</option>
                            <option value="ten">10 - Better than Rems teaching (Impossible)</option>
                        </Input>
                        <Input type="textarea" label="Comment" placeholder="Got something to say ??" />
                        <Button  active>Submit Review</Button>

                    </Col>
                    <Col md={1}></Col>
                </Row>
                    <br />
                </Paper>
            </Grid>
        );
    }
}

export default ChannelPage;