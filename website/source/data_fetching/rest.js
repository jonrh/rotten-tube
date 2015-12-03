/**
 * A gateway to the REST API. We assume the API is run on localhost on port 3000.
 *
 * Note: we use ES6 Promises for API call results but we are doing it somewhat
 * wrong. For example we do not bother much with handling when errors occur. We
 * do this for for "convenience" as time allotted for the assignment was very
 * tight.
 */

"use strict";

import request from "superagent";

const REST_URL = "http://localhost:3000";

/** Fetches a list of names.
 *
 * When we started the project we used a simple /names/ resource when we were
 * wiring and connecting the different components (MySQL, REST, web app, etc).
 * After we got the wiring we moved on to the /channels/ and /reviews/ resources
 * to make our desired app. We therefore don't use this any more but we'll leave
 * it for the sake of history ＼(^o^)／
 *
 * Example return if there are no errors:
 *
 *      ["Jón Rúnar", "Jill", "Yifei", "Radha", "Samuel"]
 *
 */
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

/**
 * Fetches a list of reviews for a given channel ID by making a GET request to
 * the REST API.
 *
 * Example output given no errors occurred:
 *
 *  [
 *      {
 *          id: 1337,
 *          username: "Donald Trump",
 *          comment: "BEST CHANNEL EVER",
 *          rating: 10,
 *          channel_id: 42
 *      },
 *
 *      ... more reviews
 *  ]
 *
 * @param channelID, the integer ID of the channel row in MySQL
 * @returns {Promise}
 */
export const fetchReviews = channelID => {
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

/**
 * Fetches channels by a specified category string by making a GET request to
 * the REST API.
 *
 * Example output given no errors occurred:
 *
 *      [
 *          {
 *              id: 1337,
 *              name: "You Suck at Cooking",
 *              url: "https://www.youtube.com/channel/UCekQr9znsk2vWxBo3YiLq2w",
 *              category: "Cooking",
 *              rating: 8
 *          },
 *
 *          ... more channels in the Cooking category
 *      ]
 *
 * @param category, string. Given the database 3 values are available: "Comedy",
 * "Travel", "Cooking".
 * @returns {Promise}
 */
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

/**
 * Fetches a channel object given a channel ID by making a GET request to the
 * REST API.
 *
 * Example output given no errors occurred:
 *
 *      {
 *          id: 1337,
 *          name: "You Suck at Cooking",
 *          url: "https://www.youtube.com/channel/UCekQr9znsk2vWxBo3YiLq2w",
 *          category: "Cooking",
 *          rating: 8
 *      }
 *
 * @param channelID, the integer ID of the channel row in MySQL
 * @returns {Promise}
 */
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

/**
 * Posts a new review for a YouTube channel by doing a POST request to the REST
 * API.
 *
 * @param channelID, the integer ID of the channel row in MySQL
 * @param name, the name of the author, string. Example: "Donald Trump"
 * @param rating, integer on the scale 1-10 (including 1 and 10). 1 is the
 * lowest rating possible while 10 is the best.
 * @param comment, string, optional review text. E.g. "Progressive channel with
 * witty humor".
 * @returns {Promise}
 */
export const postReview = (channelID, name, rating, comment) => {
    const jsonReview = {
        channelID,
        name,
        rating,
        comment
    };

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
