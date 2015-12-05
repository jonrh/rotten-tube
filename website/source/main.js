"use strict";

import React from "react";
import ReactDOM from "react-dom";
import RestApp from "./using_rest/app.js";
import GraphQLApp from "./using_graphql/app.js";

// The main entry point into the web app. Tells React to use the <div> with ID
// "app_content". React will then change and modify this div as needed.

// If we want to use the REST API as a backend
ReactDOM.render(<RestApp />, document.getElementById('app_content'));

// If we want to use the GraphQL as a backend
//ReactDOM.render(<GraphQLApp />, document.getElementById('app_content'));