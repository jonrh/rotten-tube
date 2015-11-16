import React from "react";

const RaisedButton = require("material-ui/lib/raised-button");

class App extends React.Component {
    render() {
        return <RaisedButton label={this.props.name} />;
    }
}

export default App;