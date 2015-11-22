import React from "react";
import { Button, Grid, Row, Col, Image } from "react-bootstrap";

import CategoryOverview from "./categoryOverview";

class App extends React.Component {
    render() {
        return (
            <Grid className="frontPage">
                <Row>
                    <Col md={12}>
                        <Image id="logo" src="rottentube_logo.png" className="center-block" responsive />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <CategoryOverview categoryName="Category 1" />
                    </Col>
                    <Col md={4}>
                        <CategoryOverview categoryName="Category 2" />
                    </Col>
                    <Col md={4}>
                        <CategoryOverview categoryName="Category 3" />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;