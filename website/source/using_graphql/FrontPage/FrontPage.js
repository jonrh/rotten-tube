"use strict";

import React from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

import CategoryOverview from "./categoryOverview";

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
        const categories = this.props.categories.map(category => {
            return (
                <Col md={4}>
                    <CategoryOverview category={category} />
                </Col>
            );
        });

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
                    {categories}
                </Row>
            </Grid>
        );
    }
}

export default FrontPage;