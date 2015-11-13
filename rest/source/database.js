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
    }
};

module.exports = Database;