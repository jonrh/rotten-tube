"use strict";

import React from "react";
import { Button, Grid, Row, Col, Image } from "react-bootstrap";

import FrontPage from "./FrontPage/FrontPage";
import ChannelPage from "./ChannelPage/ChannelPage.js";

/**
 * The root React component.
 *
 * Initially we were going to use Redux for state management but due to lack of
 * time we took a very simple and dirty route, a route-store of sorts. We are
 * basically implementing our own router and use a part of the URL as our store.
 *
 * We basically adapted the code here:
 *  https://github.com/rackt/react-router/blob/master/docs/Introduction.md#without-react-router
 *
 * For example, let's say you open up the website at the following URL:
 *   http://localhost:63342/rotten-tube/website/dist/index.html
 *
 * Next we click some channel and get redirected:
 *   http://localhost:63342/rotten-tube/website/dist/index.html#/1
 *
 * The routing part of this component basically listens for any changes in the
 * URL after the "#/" part of the URL. In the above case it's 1. When that
 * changes we update the state of this component which triggers a re-render.
 *
 * This works because the channel links have a href link with their given ID,
 * this means we are essentially managing state in the DOM, which is really bad
 * but for such a simple assignment we let it slip (^_-)
 */
class App extends React.Component {
    constructor(props) {
        super(props);

        // The only state of this component will be a channel ID. It's either
        // the empty string "" or some ID string "1" for example.
        this.state = {
            selectedChannelID: window.location.hash.substr(2)
        };
    }

    /**
     * After this component has mounted, start watching the URL for changes.
     */
    componentDidMount() {
        window.addEventListener("hashchange", () => {
           this.setState({
               selectedChannelID: window.location.hash.substr(2)
           });
        });
    }

    /**
     * Every time the state of this component changes, this method is called.
     */
    render() {
        let pageToRender;

        // Render the front page if no channel is selected
        if (this.state.selectedChannelID === "")
            pageToRender = <FrontPage />;
        // Otherwise render a channel page with provided channel ID
        else
            pageToRender = <ChannelPage channelID = {this.state.selectedChannelID} />;

        return pageToRender;
    }
}

export default App;