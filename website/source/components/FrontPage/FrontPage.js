"use strict";

import React from "react";
import { Button, Grid, Row, Col, Image } from "react-bootstrap";

import CategoryOverview from "./categoryOverview";
import { fetchChannelsByCategory } from "./../../data_fetching/rest.js";

/**
 * The front page. Displays a logo and  3 YouTube channel categories.
 *
 *                          - Logo -
 *
 *     ---------------   ---------------   ---------------
 *     |   Cooking   |   |    Comedy   |   |  Traveling  |
 *     ---------------   ---------------   ---------------
 *     | * Channel 1 |   | * Channel 1 |   | * Channel 1 |
 *     |     ...     |   |     ...     |   |     ...     |
 *     ---------------   ---------------   ---------------
 */
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
                        <CategoryOverview categoryName="Cooking"/>
                    </Col>
                    <Col md={4}>
                        <CategoryOverview categoryName="Comedy" />
                    </Col>
                    <Col md={4}>
                        <CategoryOverview categoryName="Traveling" />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default FrontPage;