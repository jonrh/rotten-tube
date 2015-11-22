import React from "react";
import { Button, Grid, Row, Col, Image } from "react-bootstrap";

import FrontPage from "./FrontPage/FrontPage";
import ChannelPage from "./ChannelPage/ChannelPage";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1)
        };
    }

    componentDidMount() {
        window.addEventListener("hashchange", () => {
           this.setState({
               route: window.location.hash.substr(1)
           });
        });
    }

    render() {
        let PageToRender;

        switch (this.state.route) {
            case "/channel":
                PageToRender = ChannelPage;
                break;
            default:
                PageToRender = FrontPage;
        }

        return (
            <PageToRender />
        );
    }
}

export default App;