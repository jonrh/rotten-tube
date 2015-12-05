"use strict";

import request from "superagent";

const GRAPHQL_URL = "http://localhost:3001/graphql";

// GraphQL query to get all data there is in the database. List of categories,
// in each category a list of channels that belong to that category and a list
// of all reviews for each YouTube channel
const allDataQuery = `
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

export const getAllData = () => {
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