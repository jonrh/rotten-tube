"use strict";

var express = require("express");
var database = require("./database");

var app = express();

app.get("/names", function(request, response) {
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

app.get("/reviews", function(request , response){
    database.getReviewsById(1)
        .then(data =>response.send(data));
});

app.get("/channels", function(request , response){
    database.getChannelsByCategory("Cooking")
        .then(data =>response.send(data));
});

app.get("/channels/:id", function(request , response){
    database.getChannelById(request.params.id)
        .then(data =>response.send(data));
});

app.get("/review", function(request , response){
    database.postReview("Jillian", "really bad", 1, 1)
        .then(data =>response.send(data));
});


app.get("/review", function(request , response){
    //updateRating(id , new_rating )
    database.updateRating(1, 1)
        .then(data =>response.send(data));
});


app.listen(3000);
console.log('Listening on port 3000...');