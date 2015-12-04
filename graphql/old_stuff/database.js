"use strict";

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : process.env.mysql_host,
    user     : process.env.my_user,
    password : process.env.my_pass,
    database : process.env.database_name
});

connection.connect();

var Database = {

    //gets reviews  based on the id of the channel
    getReviewsByChannelId: function(id) {
        return new Promise(
            function(resolve, reject) {
                const queryStr = "select * from reviews where channel_id =" + id;

                connection.query(queryStr, function(error, rows, fields) {
                    if (error)
                        reject(error);

                    resolve(rows);
                });
            }
        );
    },

    //get list of channels for a category - sorted by rating in descending order
    getChannelsByCategory: function(category) {
        return new Promise(
            function(resolve, reject) {
                const queryStr = "select * from channels where category = '" + category + "' order by rating DESC";

                connection.query(queryStr, function(error, rows, fields) {
                    if (error)
                        reject(error);

                    resolve(rows);
                });
            }
        );
    },

    //retuns channel details based on an id
    getChannelById: function(id) {
        return new Promise(
            function(resolve, reject) {
                const queryStr = "select * from channels where id = " + id ;

                connection.query(queryStr, function(error, rows, fields) {
                    if (error)
                        reject(error);

                    resolve(rows[0]);
                });
            }
        );
    },

    postReview: function(review_user , review_comment, review_rating , channel_id) {
        return new Promise(
            function(resolve, reject) {
                const queryStr = "insert into reviews (username, comment, rating, channel_id) values ('" + review_user + "','"+review_comment +"',"
                    + review_rating +","+ channel_id +")";

                console.log(queryStr);

                connection.query(queryStr, function(error, rows, fields) {
                    if (error) {
                        reject(error);
                    }

                   // let Channel = rows.map(row => row.name);
                   // console.log(Channel);

                    resolve("Review posted");
                });
            }
        );
    },
};

module.exports = Database;
