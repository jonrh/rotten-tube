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
        //this.state = {channels: channels};
    }

    fetchCategory(categoryName) {
        return cookingChannels;
    }

    render() {
        const channels = this.props.category.channels.map(function(channel) {
            const link = "#/"+ channel.channelID;

            return (
                <li key={channel.channelID}>
                    <a href={link}>{channel.channelName}</a>
                </li>
            );
        });

        return (
            <Paper zDepth={5}>
                <h1>{this.props.category.categoryName}</h1>
                <ul>
                    {channels}
                </ul>
            </Paper>
        );
    }
}

CategoryOverview.propTypes = {
    category: React.PropTypes.shape({
        categoryName: React.PropTypes.string,
        channels: React.PropTypes.array
    })
};

export default CategoryOverview