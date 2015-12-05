"use strict";

var express = require("express");
var schema = require("./schema.js");
var graphql = require("graphql");
var bodyParser = require("body-parser");
var cors = require("cors");

var app  = express();
var PORT = 3001;

// Make all request CORS enabled so our SPA website can get it's resources
app.use(cors());

// parse POST body as text
app.use(bodyParser.text({ type: 'application/graphql' }));

app.post('/graphql', (req, res) => {
    console.log("Got a query");

    // execute GraphQL!
    graphql.graphql(schema, req.body)
        .then((result) => {
            res.send(JSON.stringify(result, null, 2));
        });
});

var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('GraphQL listening at http://%s:%s', host, port);
});