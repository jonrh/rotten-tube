"use strict";

var request = require("superagent");

const GRAPHQL_URL = "http://localhost:3001/graphql";

var query1 = '{ channel(category: "Cooking") {id, name, url, category, rating}}';
var query2 = '{ channel(category: "Cooking") {id, name, url, category, rating, reviews {id, username, comment, rating}}}';
var query3 = '{ categories {category, channels {id, name, url, category, rating, reviews {id, username, comment, rating}}}}';

const getAllData = () => {
    return new Promise(
        function(resolve, reject) {
            request
                .post(GRAPHQL_URL)
                .type("application/graphql")
                .send(query3)
                .end(function(error, response){
                    if (response && response.ok) {
                        //console.log("Response:");
                        //console.log(response.text);
                        resolve(response.text);
                    } else {
                        console.log("Error retrieving data");
                        console.log(error);
                    }
                });
        }
    );
};

getAllData().then(data => {
   console.log(data);
});