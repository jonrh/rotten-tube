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
    getAllNames: function() {
        return new Promise(
            function(resolve, reject) {
                const queryStr = "select name from names";

                connection.query(queryStr, function(error, rows, fields) {
                    if (error)
                        reject(error);

                    let allNames = rows.map(row => row.name);
                    console.log(allNames);

                    resolve(allNames);
                });
            }
        );
    },

    getNameById: function(id){
        return new Promise(
            function(resolve, reject){
                const queryStr ="select name from names where id ="+ id
                connection.query(queryStr, function(error, rows, fields){
                    if(error)
                        reject(error);

                    let name = rows[0].name;

                    resolve(name);
                });
            }
        );
    } ,


    insertName: function(name){
        return new Promise(
            function(resolve, reject){
                const queryStr ="insert into names (name) values ('" + name + "')";
                connection.query(queryStr, function(error, rows, fields){
                    if(error)
                        reject(error);


                    console.log(rows);
                    resolve(name);


                });
            }
        );
    },
//gets reviews  based on the id of the channel
    getReviewsById: function(id) {
        return new Promise(
            function(resolve, reject) {
                const queryStr = "select * from reviews where channel_id =" + id;

                connection.query(queryStr, function(error, rows, fields) {
                    if (error)
                        reject(error);

                    //console.log(rows);

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

                    //let allChannels = rows.map(row => row.name);
                    //console.log(allChannels);

                    //resolve(allChannels);
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


    updateRating: function(id, new_rating) { 
        return new Promise( function(resolve, reject) {   
            const queryStr = "update channels set rating = " + new_rating +  " where id =" + id;  
            connection.query(queryStr, function(error, rows, fields) { 
                if (error)  reject(error);  
                //console.log(Channel);  
                 resolve("Rating updated"); 
            }); 
        } ); 
    }
};

module.exports = Database;