import React from "react";
const Paper = require('material-ui/lib/paper');

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
        return (
            <Paper zDepth={5}>
                <h1>{this.props.categoryName}</h1>
                <ul>
                    <li>Channel 1</li>
                    <li>Channel 2</li>
                    <li>Channel 3</li>
                </ul>
            </Paper>
        );
    }
}

export default CategoryOverview