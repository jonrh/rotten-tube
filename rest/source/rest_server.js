"use strict";

var express = require("express");
var database = require("./database");

var app = express();

app.get("/names", function(request, response) {
    database.getAllNames().then(allNames => response.send(allNames));
});

app.get("/names/:id", function (request, response){
    database.getNameById(request.params.id).then(name => response.send(name));
});

app.get("/namesx/", function (request, response) {
    database.insertName("Samuel").then(data => response.send(data));
});


app.get('/wines', function(req, res) {
    res.send([{name:'wine1'}, {name:'wine2'}]);
});
app.get('/wines/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});

app.listen(3000);
console.log('Listening on port 3000...');