/**
 * Example GraphQL client. There are some examples queries here below. To change
 * manually switch the ".send(allDataQuery)" line to run your query. To run this
 * script run on the command line:
 *
 *      node example_client.js
 *
 * This assumes Node v4.2.2 and that the graphql_server.js is running.
 */

"use strict";

var request = require("superagent");

const GRAPHQL_URL = "http://localhost:3001/graphql";

// A simple GraphQL query we used when developing the GraphQL server. Requests
// all channels belonging to the "Cooking" category. Asks to get the id, name,
// url, category, and rating properties for each channel.
var firstQuery = `
    {
        channel(category: "Cooking") {
            id,
            name,
            url,
            category,
            rating
        }
    }
`;

// GraphQL query to get a list of all the channels belonging to the "Cooking"
// category and all the available reviews for each channel.
var allCookingChannelsQuery = `
    {
        channel(category: "Cooking") {
            id,
            name,
            url,
            category,
            rating,
            reviews {
                id,
                username,
                comment,
                rating
            }
        }
    }
`;

// GraphQL query to get all data there is in the database. List of categories,
// in each category a list of channels that belong to that category and a list
// of all reviews for each YouTube channel
var allDataQuery = `
    {
        categories {
            category,
            channels {
                id,
                name,
                url,
                category,
                rating,
                reviews {
                    id,
                    username,
                    comment,
                    rating
                }
            }
        }
    }
`;

const getAllData = () => {
    return new Promise(
        function(resolve, reject) {
            request
                .post(GRAPHQL_URL)
                .type("application/graphql")
                .send(allDataQuery)
                .end(function(error, response){
                    if (response && response.ok) {
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