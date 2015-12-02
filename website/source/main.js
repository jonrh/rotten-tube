import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

// Tells React to use the <div> with ID "app_content". React will then change
// and modify this div as needed.
ReactDOM.render(<App/>, document.getElementById('app_content'));