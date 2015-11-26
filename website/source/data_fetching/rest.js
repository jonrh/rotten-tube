import request from "superagent";

"use strict";

const REST_URL = "http://localhost:3000/";

export const getNames = () => {
    request
        .get("http://localhost:3000/names/")
        .accept("application/json")
        .set("Access-Control-Allow-Origin: *")
        .end(function(error, result){
            if (result && result.ok) {
                console.log("It worked!");
                console.log(result);
            } else {
                console.log("Error retrieving user data");
                console.log(error);
            }
        });
};

export const fetchReviews = (channelID) => {
    return new Promise(
        function(resolve, reject) {
            request
                .get(REST_URL + "reviews/"+ channelID)
                .accept("application/json")
                .set("Access-Control-Allow-Origin: *")
                .end(function(error, result) {
                    if (error) {
                        reject(error);
                    }

                    console.log(result.body)
                    resolve(results.body);
                });
        }
    );
};

