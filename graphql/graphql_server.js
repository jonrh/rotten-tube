"use strict";

var express = require("express");
var schema = require("./schema.js");
var graphql = require("graphql");
var bodyParser = require("body-parser");

var app  = express();
var PORT = 3001;

// parse POST body as text
app.use(bodyParser.text({ type: 'application/graphql' }));

app.post('/graphql', (req, res) => {
    console.log(req.body);

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