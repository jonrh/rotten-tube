"use strict";

import React from "react";
import { Paper } from "material-ui";

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
    render() {
        const channels = this.props.category.channels.map(channel => {
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
                <h1>{this.props.category.category}</h1>
                <ul>
                    {channels}
                </ul>
            </Paper>
        );
    }
}

export default CategoryOverview