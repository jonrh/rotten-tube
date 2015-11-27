import request from "superagent";

"use strict";

const REST_URL = "http://localhost:3000";

/** Used for inital testing when wiring things together */
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
                .get(REST_URL + "/reviews/"+ channelID)
                .end(function(error, result) {
                    if (error) {
                        reject(error);
                    }

                    resolve(result.body);
                });
        }
    );
};

export const fetchChannelsByCategory = category => {
    return new Promise(
        function(resolve, reject) {
            request
                .get(REST_URL + "/channels/category/"+ category)
                .end(function(error, result) {
                    if (error) {
                        reject(error);
                    }

                    resolve(result.body);
                });
        }
    );
};


export const fetchChannelByID = channelID => {
    return new Promise(
        function(resolve, reject) {
            request
                .get(REST_URL + "/channels/"+ channelID)
                .end(function(error, result) {
                    if (error) {
                        reject(error);
                    }

                    resolve(result.body);
                });
        }
    );
};

export const postReview = (channelID, name, rating, comment) => {
    const jsonReview = {
        channelID,
        name,
        rating,
        comment
    };

    console.log(jsonReview);

    return new Promise(
        function(resolve, reject) {
            request
                .post(REST_URL + "/reviews/")
                .type('json')
                .set("Access-Control-Allow-Origin: *")
                .send(jsonReview)
                .end(function(error, result) {
                    if (error) {
                        reject(error);
                    }

                    resolve(result.body);
                });
        }
    );
};
