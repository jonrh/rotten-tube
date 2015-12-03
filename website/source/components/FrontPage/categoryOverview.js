"use strict";

import React from "react";
import { Paper } from "material-ui";
import { fetchChannelsByCategory } from "./../../data_fetching/rest.js";

/**
 * A React component that renders an overview of YouTube channels in a specific
 * category. It's meant to be used on the front page to include the highest
 * rated YouTube channels in each category.
 *
 * Rough example:
 *
 *     ---------------
 *     |   Cooking   |
 *     ---------------
 *     | * Channel 1 |
 *     | * Channel 2 |
 *     |     ...     |
 *     ---------------
 */
class CategoryOverview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            channels: []
        };

        // Fetch from the API the channels belonging to this category
        fetchChannelsByCategory(this.props.categoryName).then(channels => {
            this.setState({
                channels: channels
            });
        });
    }

    render() {
        const channels = this.state.channels.map(channel => {
            // This is one of our dirty hacks. Since we're not using a proper
            // router we simply let hrefs do to move around in the app.
            const link = "#/"+ channel.id;

            return (
                <li key={channel.id}>
                    <a href={link}>{channel.name}</a>
                </li>
            );
        });

        return (
            <Paper zDepth={5}>
                <h1>{this.props.categoryName}</h1>
                <ul>
                    {channels}
                </ul>
            </Paper>
        );
    }
}

export default CategoryOverview