import React from "react";
import { Button, Grid, Row, Col, Image } from "react-bootstrap";

import FrontPage from "./FrontPage/FrontPage";
import ChannelPage from "./ChannelPage/ChannelPage";

/**
 * The
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChannelID: window.location.hash.substr(2)
        };
    }

    componentDidMount() {
        window.addEventListener("hashchange", () => {
           this.setState({
               selectedChannelID: window.location.hash.substr(2)
           });
        });
    }

    /**
     * A function we pass down to other components to update the app state.
     *
     * @param channelID, integer
     */
    selectChannel(channelID) {
        this.setState({
            selectedChannelID: channelID
        });
    }

    render() {
        let PageToRender;

        if (this.state.selectedChannelID === "")
            PageToRender = FrontPage;
        else
            PageToRender = ChannelPage;

        return (
            <PageToRender />
        );
    }
}

export default App;