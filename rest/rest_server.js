"use strict";

var express = require("express");
var cors = require("cors"); // https://github.com/expressjs/cors
var bodyParser = require('body-parser');

var database = require("./database");

var app = express();

// Make all request CORS enabled so our SPA website can get it's resources
app.use(cors());

// Use body-parser so we can get content from POST requests
app.use(bodyParser.json());

/**
 * Names endpoint, used for testing and helping us get started. Not used in the
 * app anymore.
 */
app.get("/names/", function(request, response) {
    database.getAllNames()
        .then(allNames => response.send(allNames));
});

app.get("/names/:id", function (request, response){
    database.getNameById(request.params.id)
        .then(name => response.send(name));
});

app.get("/namesx/", function (request, response) {
    database.insertName("Samuel")
        .then(data => response.send(data));
});

/**
 * Reviews endpoints
 */
app.get("/reviews/:id", function(request , response){
    //console.log("REST: reuqest to /reviews/:id");
    database.getReviewsById(request.params.id)
        .then(data => response.send(data));
});

app.post("/reviews", function(request, response) {
    const review = request.body;
    database.postReview(review.name, review.comment, review.rating, review.channelID)
        .then(data => response.send("Review posted"));
});

/**
 * Channel endpoints
 */
app.get("/channels/category/:category", function(request , response){
    database.getChannelsByCategory(request.params.category)
        .then(data =>response.send(data));
});

app.get("/channels/:id", function(request , response){
    database.getChannelById(request.params.id)
        .then(data =>response.send(data));
});


app.listen(3000);
console.log('Listening on port 3000...');