import React from "react";
import { Button, Grid, Row, Col, Image } from "react-bootstrap";

import CategoryOverview from "./categoryOverview";
import { frontPageCategories } from "./../../mockData";

class FrontPage extends React.Component {
    render() {
        return (
            <Grid className="frontPage">
                <Row>
                    <Col md={12}>
                        <a href="#/">
                            <Image id="logo" src="rottentube_logo.png" className="center-block" responsive />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <CategoryOverview category={frontPageCategories[0]}/>
                    </Col>
                    <Col md={4}>
                        <CategoryOverview category={frontPageCategories[1]}/>
                    </Col>
                    <Col md={4}>
                        <CategoryOverview category={frontPageCategories[2]}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default FrontPage;