import React from "react";
const Paper = require('material-ui/lib/paper');
import { Button, Grid, Row, Col, Image } from "react-bootstrap";

class App extends React.Component {
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

export default App;