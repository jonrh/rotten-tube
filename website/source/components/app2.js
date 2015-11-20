import React from "react";
import { Button, Grid, Row, Col, Image } from "react-bootstrap";
const Paper = require('material-ui/lib/paper');

class App2 extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <Image src="rottentube_logo.png" className="center-block" responsive />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Paper zDepth={5}>
                            <p>Category 1</p>
                        </Paper>
                    </Col>
                    <Col md={4}>
                        <Paper zDepth={5}>
                            <p>Category 2</p>
                        </Paper>
                    </Col>
                    <Col md={4}>
                        <Paper zDepth={5}>
                            <p>Category 3</p>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App2;