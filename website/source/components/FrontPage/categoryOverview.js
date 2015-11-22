import React from "react";
import { Paper } from "material-ui";
import { cookingChannels } from "./../../mockData.js";

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
        const channels = this.fetchChannel("channel");
        this.state = {channels: channels};
    }

    fetchChannel(channelName) {
        return cookingChannels;
    }

    render() {
        const channels = this.state.channels.map(function(channel) {
            return (
                <li key={channel.channelID}>
                    <a href="#/channel">{channel.channelName}</a>
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

CategoryOverview.propTypes = { categoryName: React.PropTypes.string };

export default CategoryOverview