import React from "react";
import { Button, Grid, Row, Col, Image } from "react-bootstrap";

class ChannelPage extends React.Component {
    render() {
        return (
            <Grid className="frontPage">
                <Row>
                    <Col md={12}>
                        <a href="#/">
                            <Image id="logo" src="rottentube_logo.png" className="center-block small" responsive />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        Channel page
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default ChannelPage;